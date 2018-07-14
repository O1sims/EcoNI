package com.econi.api.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import com.econi.api.models.CrimeLevel;

public interface CrimeLevelRepository extends MongoRepository<CrimeLevel, String> {
	
	List<CrimeLevel> findByYear(@Param("year") Integer year);

}