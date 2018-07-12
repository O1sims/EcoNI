package com.econi.api.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import com.econi.api.models.Person;

public interface PersonRepository extends MongoRepository<Person, String> {
	
	List<Person> findByid(@Param("id") String id);
	List<Person> findByfirstName(@Param("FirstName") String firstName);
	List<Person> findBylastName(@Param("LastName") String lastName);

}