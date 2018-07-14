package com.econi.api.controllers;

import com.econi.api.models.CrimeLevel;
import com.econi.api.repositories.CrimeLevelRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/crime-level")
public class CrimeLevelController {
  @Autowired
  private CrimeLevelRepository repository;

  @RequestMapping(value = "/", method = RequestMethod.GET)
  public List<CrimeLevel> getAllcrimeLevels() {
    return repository.findAll();
  }

  @RequestMapping(value = "/{year}", method = RequestMethod.GET)
  public List<CrimeLevel> getcrimeLevelByYear(@PathVariable("year") Integer year) {
    return repository.findByYear(year);
  }
  
  @RequestMapping(value = "/{year}", method = RequestMethod.PUT)
  public void modifyCrimeLevelByYear(@PathVariable("year") Integer year, @Valid
  @RequestBody CrimeLevel crimeLevel) {
    repository.save(crimeLevel);
  }
}
