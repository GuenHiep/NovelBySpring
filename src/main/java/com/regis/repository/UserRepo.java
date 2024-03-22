package com.regis.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.regis.entity.UserDtls;

@EnableJpaRepositories
@Repository
public interface UserRepo extends JpaRepository<UserDtls, Integer> {
	
	Optional<UserDtls> findOneByEmailAndPassword(String email, String password);
	
	public UserDtls findByEmail(String email);
	
}
