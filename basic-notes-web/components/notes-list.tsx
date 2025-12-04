"use client"

import type { Note } from "@/app/page"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { format } from "date-fns"

interface NotesListProps {
  notes: Note[]
  selectedNoteId: string | null
  onSelectNote: (id: string) => void
  onDeleteNote: (id: string) => void
}

export default function NotesList({ notes, selectedNoteId, onSelectNote, onDeleteNote }: NotesListProps) {
  return (
    <ScrollArea className="flex-1">
      <div className="p-4 space-y-2">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`group p-3 rounded-lg cursor-pointer transition-all ${
              selectedNoteId === note.id
                ? "bg-primary/10 border border-primary/20"
                : "hover:bg-muted border border-transparent"
            }`}
            onClick={() => onSelectNote(note.id)}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground line-clamp-1 text-sm">{note.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-4 mt-1">{note.content || "No additional text"}</p>
                <p className="text-xs text-muted-foreground/60 mt-2">
                  {format(new Date(note.updatedAt), "MMM d, yyyy")}
                </p>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0 hover:bg-destructive/10 hover:text-destructive"
                onClick={(e) => {
                  e.stopPropagation()
                  onDeleteNote(note.id)
                }}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
