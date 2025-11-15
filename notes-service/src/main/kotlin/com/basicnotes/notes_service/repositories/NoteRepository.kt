package com.basicnotes.notes_service.repositories

import com.basicnotes.notes_service.entities.Note
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface NoteRepository : JpaRepository<Note, Long>