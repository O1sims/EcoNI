package com.econi.api.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.econi.api.models.CrimeLevel;
import com.econi.api.repositories.CrimeLevelRepository;


@Service
public class CrimeLevelService {
 
    private CrimeLevelRepository crimeLevelRepository;
 
    public CrimeLevelService(CrimeLevelRepository crimeLevelRepository) {
        this.crimeLevelRepository = crimeLevelRepository;
    }
 
    public Iterable<CrimeLevel> list() {
        return crimeLevelRepository.findAll();
    }
 
    public void save(List<CrimeLevel> airPassengers) {
        crimeLevelRepository.saveAll(airPassengers);
    }
    
    public void dropCollection() {
    	crimeLevelRepository.deleteAll();
    }
 
}