"use client"

import { useState, useEffect } from "react"
import NotesList from "@/components/notes-list"
import NoteEditor from "@/components/note-editor"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export interface Note {
  id: string
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
}

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([])
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load notes from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("notes")
    if (saved) {
      const parsed = JSON.parse(saved)
      setNotes(
        parsed.map((n: any) => ({
          ...n,
          createdAt: new Date(n.createdAt),
          updatedAt: new Date(n.updatedAt),
        })),
      )
      if (parsed.length > 0) {
        setSelectedNoteId(parsed[0].id)
      }
    }
    setIsLoading(false)
  }, [])

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  const createNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: "Untitled Note",
      content: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    setNotes([newNote, ...notes])
    setSelectedNoteId(newNote.id)
  }

  const updateNote = (id: string, updates: Partial<Note>) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, ...updates, updatedAt: new Date() } : note)))
  }

  const deleteNote = (id: string) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)

    if (selectedNoteId === id) {
      setSelectedNoteId(newNotes.length > 0 ? newNotes[0].id : null)
    }
  }

  const selectedNote = notes.find((n) => n.id === selectedNoteId)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="text-muted-foreground">Loading notes...</div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <div className="w-72 border-r border-border bg-card flex flex-col">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-foreground">Basic Notes</h1>
          </div>
          <Button onClick={createNote} className="w-full gap-2 bg-primary hover:bg-primary/90" size="sm">
            <Plus className="w-4 h-4" />
            New Note
          </Button>
        </div>

        <NotesList
          notes={notes}
          selectedNoteId={selectedNoteId}
          onSelectNote={setSelectedNoteId}
          onDeleteNote={deleteNote}
        />
      </div>

      {/* Main Editor */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {selectedNote ? (
          <NoteEditor note={selectedNote} onUpdate={updateNote} />
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <div className="text-center">
              <p className="text-lg mb-2">No notes yet</p>
              <p className="text-sm">Create a new note to get started</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
