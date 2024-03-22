package com.regis.service;

import com.regis.entity.Login;
import com.regis.repository.LoginRepo;

public interface UserService {
	LoginRepo loginUser(Login login);
}
