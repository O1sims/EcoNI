package com.econi.api.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.econi.api.models.PortTraffic;
import com.econi.api.repositories.PortTrafficRepository;


@Service
public class PortTrafficService {
 
    private PortTrafficRepository portTrafficRepository;
 
    public PortTrafficService(PortTrafficRepository portTrafficRepository) {
        this.portTrafficRepository = portTrafficRepository;
    }
 
    public Iterable<PortTraffic> list() {
        return portTrafficRepository.findAll();
    }
 
    public Iterable<PortTraffic> save(List<PortTraffic> portTraffic) {
        return portTrafficRepository.saveAll(portTraffic);
    }
 
}