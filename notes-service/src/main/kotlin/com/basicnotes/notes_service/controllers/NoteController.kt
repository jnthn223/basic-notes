package com.basicnotes.notes_service.controllers

import com.basicnotes.notes_service.entities.Note
import com.basicnotes.notes_service.repositories.NoteRepository
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/notes")
class NoteController(private val noteRepository: NoteRepository) {

    @GetMapping
    fun getAllNotes(): List<Note> = noteRepository.findAll()

    @PostMapping
    fun createNote(@RequestBody note: Note): Note = noteRepository.save(note)
}