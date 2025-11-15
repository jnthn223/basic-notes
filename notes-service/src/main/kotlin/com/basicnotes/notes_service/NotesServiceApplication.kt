package com.basicnotes.notes_service

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class NotesServiceApplication

fun main(args: Array<String>) {
	runApplication<NotesServiceApplication>(*args)
}
