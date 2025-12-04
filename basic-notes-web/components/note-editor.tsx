"use client"

import { useState, useEffect } from "react"
import type { Note } from "@/app/page"
import { format } from "date-fns"

interface NoteEditorProps {
  note: Note
  onUpdate: (id: string, updates: Partial<Note>) => void
}

export default function NoteEditor({ note, onUpdate }: NoteEditorProps) {
  const [title, setTitle] = useState(note.title)
  const [content, setContent] = useState(note.content)

  useEffect(() => {
    setTitle(note.title)
    setContent(note.content)
  }, [note])

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle)
    onUpdate(note.id, { title: newTitle })
  }

  const handleContentChange = (newContent: string) => {
    setContent(newContent)
    onUpdate(note.id, { content: newContent })
  }

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header */}
      <div className="border-b border-border p-6">
        <input
          type="text"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          className="text-3xl font-bold text-foreground bg-transparent outline-none w-full mb-2 placeholder-muted-foreground"
          placeholder="Note title"
        />
        <p className="text-sm text-muted-foreground">
          Last modified {format(new Date(note.updatedAt), "MMM d, yyyy 'at' h:mm a")}
        </p>
      </div>

      {/* Editor */}
      <textarea
        value={content}
        onChange={(e) => handleContentChange(e.target.value)}
        className="flex-1 p-6 bg-background text-foreground outline-none resize-none placeholder-muted-foreground/50 font-mono text-sm"
        placeholder="Start typing your note..."
      />
    </div>
  )
}
