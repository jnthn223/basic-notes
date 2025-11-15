package com.basicnotes.notes_service.entities

import jakarta.persistence.*

@Entity
@Table(name = "notes")
data class Note(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    val title: String,
    val content: String
)
