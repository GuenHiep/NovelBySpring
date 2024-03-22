package com.regis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.regis.entity.Login;
import com.regis.entity.UserDtls;
import com.regis.repository.LoginRepo;
import com.regis.repository.UserRepo;
import com.regis.service.UserService;

import jakarta.servlet.http.HttpSession;

import org.springframework.http.ResponseEntity;
//@Controller
@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	private UserRepo repo;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private BCryptPasswordEncoder bp;
	
	@GetMapping("/")
	public String home() {
		return "index";
	}
	
//	@GetMapping("/login")
//	public String login() {
//		return "login";
//	}
	
	@PostMapping(path = "/register")
	public String register(@RequestBody UserDtls user) {
				
//		System.out.println(user);
		user.setPassword(bp.encode(user.getPassword()));
		user.setRole("ROLE_USER");
		repo.save(user);
		return user.getFullname();
	}
	
	@PostMapping(path = "/login")
	public ResponseEntity<?> loginUser(@RequestBody Login login)
    {
        LoginRepo loginResponse = userService.loginUser(login);
        return ResponseEntity.ok(loginResponse);
    }
	
}
