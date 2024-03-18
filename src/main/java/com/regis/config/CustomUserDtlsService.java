package com.regis.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.regis.entity.UserDtls;
import com.regis.repository.UserRepo;

public class CustomUserDtlsService implements UserDetailsService{

	@Autowired
	private UserRepo userRepo;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		
		try {
			
			UserDtls user = userRepo.findByEmail(email);
			
			if(user == null) {
				throw new UsernameNotFoundException("No user");
			}else {
				return new CustomUserDtls(user);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
	

}
