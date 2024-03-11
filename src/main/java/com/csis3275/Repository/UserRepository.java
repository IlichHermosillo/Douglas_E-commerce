package com.csis3275.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.csis3275.Entity.UserEntity;


@Repository
public interface UserRepository extends CrudRepository<UserEntity, Integer> {
	public UserEntity findByUsernameAndPassword(String username, String password);
}