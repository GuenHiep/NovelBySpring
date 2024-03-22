package com.regis.imp;

import java.util.Optional;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.regis.entity.Login;
import com.regis.entity.UserDtls;
import com.regis.repository.LoginRepo;
import com.regis.repository.UserRepo;
import com.regis.service.UserService;

@Service
public class LoginImp implements UserService{
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public LoginRepo loginUser(Login login) {
		String msg = "";
		UserDtls user1 = userRepo.findByEmail(login.getEmail());
		
		if(user1 != null) {
			String password = login.getPassword();
			String encodedPassword = user1.getPassword();
			Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
			
			if(isPwdRight) {
				Optional<UserDtls> user = userRepo.findOneByEmailAndPassword(login.getEmail(), encodedPassword);
				if(user.isPresent()) {
					return new LoginRepo("Login Success", true);
				}else {
                    return new LoginRepo("Login Failed", false);
                }
			}else {
                return new LoginRepo("password Not Match", false);
            }
		}else {
            return new LoginRepo("Email not exits", false);
        }
	}
}
