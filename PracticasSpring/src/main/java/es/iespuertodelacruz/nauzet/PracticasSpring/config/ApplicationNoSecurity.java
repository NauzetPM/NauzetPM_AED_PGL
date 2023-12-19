package es.iespuertodelacruz.nauzet.PracticasSpring.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
@Configuration
public class ApplicationNoSecurity {
@Bean
public WebSecurityCustomizer webSecurityCustomizer() {
return (web) -> web.ignoring()
.requestMatchers("/**");
}
}