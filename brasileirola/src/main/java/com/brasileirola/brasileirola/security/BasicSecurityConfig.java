package com.brasileirola.brasileirola.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
@Configuration
public class BasicSecurityConfig{	
	
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
			.csrf( csrf -> csrf.disable())
			.httpBasic(httpBasic -> httpBasic.init(http))
			//.sessionManagement(sessionManagement -> sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
			.authorizeHttpRequests((requests) -> requests
				.requestMatchers(HttpMethod.GET, "/partidas/*").permitAll()
				.requestMatchers(HttpMethod.GET, "/partidas/vencedor/*").permitAll()
				.requestMatchers(HttpMethod.GET, "/partidas").permitAll()
				.requestMatchers(HttpMethod.GET, "/partidas/rodada/*").permitAll()
				.anyRequest().authenticated()
			);

		return http.build();
	}
}
