package com.econi.api.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import com.econi.api.models.EconomicIndex;

public interface EconomicIndexRepository extends MongoRepository<EconomicIndex, String> {
	
	List<EconomicIndex> findByPeriod(@Param("period") String period);

}