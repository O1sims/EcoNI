package com.econi.api.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import com.econi.api.models.AirPassengers;

public interface AirPassengersRepository extends MongoRepository<AirPassengers, String> {
	
	List<AirPassengers> findByYear(@Param("year") Integer year);

}