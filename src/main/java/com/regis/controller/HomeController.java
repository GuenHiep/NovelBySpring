package com.regis.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.regis.entity.UserDtls;
import com.regis.repository.UserRepo;

@Controller
@RequestMapping("/user")
public class HomeController {

	@Autowired
	private UserRepo userRepo;

	@GetMapping("/home")
	public String home(Principal p, Model m) {
		String email = p.getName();
		UserDtls user = userRepo.findByEmail(email);		
		m.addAttribute("fullName", user.getFullname());
		m.addAttribute("email", user.getEmail());
		return "home";
	}
}
