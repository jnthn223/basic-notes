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
class GatewaySecurityConfig {
    @Value("\${AUTH_SERVER_URL:http://auth-server:4000}")
    private lateinit var authServerURL: String
    @Bean
    fun securityWebFilterChain(http: ServerHttpSecurity): SecurityWebFilterChain {
        http
            .authorizeExchange { exchanges: AuthorizeExchangeSpec ->
                exchanges
                    .pathMatchers(
                        "/login/**"// <-- if you have /auth login paths
                    ).permitAll()
                    .anyExchange().authenticated()
            }
            .oauth2ResourceServer { oauth2: OAuth2ResourceServerSpec ->
                oauth2
                    .jwt { jwt: OAuth2ResourceServerSpec.JwtSpec ->
                        jwt
                            .jwkSetUri("${authServerURL}/oauth2/jwks")
                    }
            }
        return http.build()
    }
}