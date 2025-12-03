package com.basicnotes.gateway_service

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class GatewayServiceApplication

fun main(args: Array<String>) {
	print("I have been updated")
	runApplication<GatewayServiceApplication>(*args)
}
