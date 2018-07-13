package com.econi.api.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.econi.api.models.AirPassengers;
import com.econi.api.repositories.AirPassengersRepository;


@Service
public class AirPassengersService {
 
    private AirPassengersRepository airPassengersRepository;
 
    public AirPassengersService(AirPassengersRepository airPassengersRepository) {
        this.airPassengersRepository = airPassengersRepository;
    }
 
    public Iterable<AirPassengers> list() {
        return airPassengersRepository.findAll();
    }
 
    public Iterable<AirPassengers> save(List<AirPassengers> airPassengers) {
        return airPassengersRepository.saveAll(airPassengers);
    }
 
}