package com.econi.api.controllers;

import com.econi.api.models.EconomicIndex;
import com.econi.api.repositories.EconomicIndexRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/economic-indicies")
public class EconomicIndexController {
  @Autowired
  private EconomicIndexRepository repository;

  @RequestMapping(
		  value = "/", 
		  method = RequestMethod.GET)
  public List<EconomicIndex> getAllEconomicIndicies() {
    return repository.findAll();
  }
  
  @RequestMapping(
		  value = "/", 
		  method = RequestMethod.POST)
  public void insertPortTraffic(@Valid
		  @RequestBody List<EconomicIndex> economicIndicies) {
    repository.saveAll(economicIndicies);
  }
}
