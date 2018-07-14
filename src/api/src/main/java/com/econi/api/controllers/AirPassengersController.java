package com.econi.api.controllers;

import com.econi.api.models.AirPassengers;
import com.econi.api.repositories.AirPassengersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/air-passengers")
public class AirPassengersController {
  @Autowired
  private AirPassengersRepository repository;

  @RequestMapping(
		  value = "/", 
		  method = RequestMethod.GET)
  public List<AirPassengers> getAllcrimeLevels() {
    return repository.findAll();
  }
  
  @RequestMapping(
		  value = "/", 
		  method = RequestMethod.POST)
  public void insertAirPassengers(@Valid
		  @RequestBody List<AirPassengers> airPassengers) {
    repository.saveAll(airPassengers);
  }

  @RequestMapping(
		  value = "/{year}", 
		  method = RequestMethod.GET)
  public List<AirPassengers> getcrimeLevelByYear(@PathVariable("year") Integer year) {
    return repository.findByYear(year);
  }
  
  @RequestMapping(
		  value = "/{year}", 
		  method = RequestMethod.PUT)
  public void modifyCrimeLevelByYear(@PathVariable("year") Integer year, @Valid
  @RequestBody AirPassengers crimeLevel) {
    repository.save(crimeLevel);
  }
}
