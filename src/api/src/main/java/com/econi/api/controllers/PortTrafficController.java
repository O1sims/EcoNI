package com.econi.api.controllers;

import com.econi.api.models.PortTraffic;
import com.econi.api.repositories.PortTrafficRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/port-traffic")
public class PortTrafficController {
  @Autowired
  private PortTrafficRepository repository;

  @RequestMapping(
		  value = "/", 
		  method = RequestMethod.GET)
  public List<PortTraffic> getAllPortTraffic() {
    return repository.findAll();
  }
  
  @RequestMapping(
		  value = "/", 
		  method = RequestMethod.POST)
  public void insertPortTraffic(@Valid
		  @RequestBody List<PortTraffic> portTraffic) {
    repository.saveAll(portTraffic);
  }

  @RequestMapping(
		  value = "/{year}", 
		  method = RequestMethod.GET)
  public List<PortTraffic> getPetById(@PathVariable("year") Integer year) {
    return repository.findByYear(year);
  }
  
  @RequestMapping(
		  value = "/{year}", 
		  method = RequestMethod.PUT)
  public void modifyPortTrafficByYear(@PathVariable("year") Integer year, @Valid
  @RequestBody PortTraffic portTraffic) {
    repository.save(portTraffic);
  }
}
