package com.econi.api.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.econi.api.models.EconomicIndex;
import com.econi.api.repositories.EconomicIndexRepository;


@Service
public class EconomicIndexService {
 
    private EconomicIndexRepository economicIndexRepository;
 
    public EconomicIndexService(EconomicIndexRepository economicIndexRepository) {
        this.economicIndexRepository = economicIndexRepository;
    }
 
    public Iterable<EconomicIndex> list() {
        return economicIndexRepository.findAll();
    }
 
    public Iterable<EconomicIndex> save(List<EconomicIndex> portTraffic) {
        return economicIndexRepository.saveAll(portTraffic);
    }
    
    public void dropCollection() {
    	economicIndexRepository.deleteAll();
    }
 
}