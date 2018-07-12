package com.econi.api.controllers;

import com.econi.api.models.Person;
import com.econi.api.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/people")
public class PersonController {
  @Autowired
  private PersonRepository repository;
  
  @RequestMapping(value = "/", method = RequestMethod.GET)
  public List<Person> getAllPets() {
    return repository.findAll();
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.GET)
  public List<Person> getPetById(@PathVariable("id") String id) {
    return repository.findByid(id);
  }
  
  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public void modifyPetById(@PathVariable("id") String id, @Valid 
  @RequestBody Person person) {
    repository.save(person);
  }
}