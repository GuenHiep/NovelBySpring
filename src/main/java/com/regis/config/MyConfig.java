package com.regis.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class MyConfig{
	
	@Bean
	UserDetailsService getUserDetailsService() {
		return new CustomUserDtlsService();
	};
	
	@Bean
	BCryptPasswordEncoder getPassword() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	DaoAuthenticationProvider getDaoProvider() {
		DaoAuthenticationProvider dao = new DaoAuthenticationProvider();
		dao.setUserDetailsService(getUserDetailsService());
		dao.setPasswordEncoder(getPassword());
		return dao;
	}
	
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(getDaoProvider());
    }
    
    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeRequests().requestMatchers("/user/**").hasRole("USER").requestMatchers("/**").permitAll()
        .and().formLogin()
        .loginPage("/login")
        .loginProcessingUrl("/dologin").defaultSuccessUrl("/user/home")
        .and().csrf().disable();        
        http.authenticationProvider(getDaoProvider());
        return http.build();
    }

	
}
