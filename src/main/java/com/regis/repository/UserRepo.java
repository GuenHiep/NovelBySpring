package com.regis.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.regis.entity.UserDtls;

public interface UserRepo extends JpaRepository<UserDtls, Integer> {
	
	public UserDtls findByEmail(String email);
	
}
