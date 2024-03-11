package com.csis3275.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.csis3275.Entity.UserEntity;
import com.csis3275.Repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	//Method 1
	public UserEntity signup(UserEntity user) {
		return userRepository.save(user);
	}
	
	
	//Method 2
	public boolean login(UserEntity person) {
		UserEntity dbUser = userRepository.findByUsernameAndPassword(person.getUsername(), person.getPassword());
		boolean loginStatus = dbUser != null ? true : false;
		return loginStatus;
	}
}