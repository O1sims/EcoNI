package com.econi.api.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import com.econi.api.models.PortTraffic;

public interface PortTrafficRepository extends MongoRepository<PortTraffic, String> {
	
	List<PortTraffic> findByYear(@Param("year") Integer year);

}