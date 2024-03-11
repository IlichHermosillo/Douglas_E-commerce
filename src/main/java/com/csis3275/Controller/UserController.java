package com.csis3275.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.csis3275.Entity.UserEntity;
import com.csis3275.Service.UserService;


@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

	@Autowired
	public UserService userService;
	
	@PostMapping("/signup")
	public UserEntity signup(@RequestBody UserEntity person) {
		return userService.signup(person);
	}
	
	@PostMapping("/login")
	public boolean login(@RequestBody UserEntity person) {
		return userService.login(person);
	}
}
