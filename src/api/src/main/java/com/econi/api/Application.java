package com.econi.api;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.econi.api.models.PortTraffic;
import com.econi.api.models.AirPassengers;

import com.econi.api.services.PortTrafficService;
import com.econi.api.services.AirPassengersService;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(
    		ApplicationContext ctx, 
    		PortTrafficService portTrafficService,
    		AirPassengersService airPassengersService) {
        return args -> {
            System.out.println("Saving economic data...");
            ObjectMapper mapper = new ObjectMapper();
			TypeReference<List<PortTraffic>> portTrafficTypeReference = new TypeReference<List<PortTraffic>>(){};
			InputStream portTrafficInputStream = TypeReference.class.getResourceAsStream("/data/portTraffic.json");
			try {
				List<PortTraffic> portTraffic = mapper.readValue(portTrafficInputStream,portTrafficTypeReference);
				portTrafficService.save(portTraffic);
				System.out.println("Port traffic saved!");
			} catch (IOException e) {
				System.out.println("Unable to save port traffic data: " + e.getMessage());
			};
			
			TypeReference<List<AirPassengers>> airPassengerTypeReference = new TypeReference<List<AirPassengers>>(){};
			InputStream airPassengerInputStream = TypeReference.class.getResourceAsStream("/data/AirPassengers.json");
			try {
				List<AirPassengers> airPassengers = mapper.readValue(airPassengerInputStream,airPassengerTypeReference);
				airPassengersService.save(airPassengers);
				System.out.println("Air passengers saved!");
			} catch (IOException e) {
				System.out.println("Unable to save air passenger data: " + e.getMessage());
			};
        };
    }

}
