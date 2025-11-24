package com.basicnotes.gateway_service.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity
import org.springframework.security.config.web.server.ServerHttpSecurity
import org.springframework.security.config.web.server.ServerHttpSecurity.AuthorizeExchangeSpec
import org.springframework.security.config.web.server.ServerHttpSecurity.OAuth2ResourceServerSpec
import org.springframework.security.web.server.SecurityWebFilterChain


@Configuration
@EnableWebFluxSecurity
class ReactiveResourceServerConfig {
    @Value("\${GATEWAY_SERVER_URL:http://localhost:4006}")
    private lateinit var authserverURL: String
    @Bean
    fun securityWebFilterChain(http: ServerHttpSecurity): SecurityWebFilterChain {
        http
            .authorizeExchange { exchanges: AuthorizeExchangeSpec ->
                exchanges
                    .pathMatchers("/api/public/**").permitAll()
                    .anyExchange().authenticated()
            }
            .oauth2ResourceServer { oauth2: OAuth2ResourceServerSpec ->
                oauth2
                    .jwt { jwt: OAuth2ResourceServerSpec.JwtSpec ->
                        jwt
                            .jwkSetUri("${authserverURL}/oauth2/jwks")
                    }
            }
        return http.build()
    }
}