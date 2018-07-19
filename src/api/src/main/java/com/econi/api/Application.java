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

import com.econi.api.models.CrimeLevel;
import com.econi.api.models.PortTraffic;
import com.econi.api.models.AirPassengers;
import com.econi.api.models.EconomicIndex;

import com.econi.api.services.CrimeLevelService;
import com.econi.api.services.PortTrafficService;
import com.econi.api.services.AirPassengersService;
import com.econi.api.services.EconomicIndexService;


@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(
    		ApplicationContext ctx, 
    		CrimeLevelService crimeLevelService,
    		PortTrafficService portTrafficService,
    		AirPassengersService airPassengersService,
    		EconomicIndexService economicIndexService) {
        return args -> {
            System.out.println("Saving economic data...");
            ObjectMapper mapper = new ObjectMapper();
			TypeReference<List<PortTraffic>> portTrafficTypeReference = new TypeReference<List<PortTraffic>>(){};
			InputStream portTrafficInputStream = TypeReference.class.getResourceAsStream("/data/portTraffic.json");
			try {
				List<PortTraffic> portTraffic = mapper.readValue(portTrafficInputStream,portTrafficTypeReference);
				portTrafficService.dropCollection();
				portTrafficService.save(portTraffic);
				System.out.println("Port traffic saved!");
			} catch (IOException e) {
				System.out.println("Unable to save port traffic data: " + e.getMessage());
			};
			
			TypeReference<List<AirPassengers>> airPassengerTypeReference = new TypeReference<List<AirPassengers>>(){};
			InputStream airPassengerInputStream = TypeReference.class.getResourceAsStream("/data/airPassengers.json");
			try {
				List<AirPassengers> airPassengers = mapper.readValue(airPassengerInputStream,airPassengerTypeReference);
				airPassengersService.dropCollection();
				airPassengersService.save(airPassengers);
				System.out.println("Air passengers saved!");
			} catch (IOException e) {
				System.out.println("Unable to save air passenger data: " + e.getMessage());
			};
			
			TypeReference<List<CrimeLevel>> crimeLevelTypeReference = new TypeReference<List<CrimeLevel>>(){};
			InputStream crimeLevelInputStream = TypeReference.class.getResourceAsStream("/data/crimeLevels.json");
			try {
				List<CrimeLevel> crimeLevels = mapper.readValue(crimeLevelInputStream, crimeLevelTypeReference);
				crimeLevelService.dropCollection();
				crimeLevelService.save(crimeLevels);
				System.out.println("Crime levels saved!");
			} catch (IOException e) {
				System.out.println("Unable to save crime level data: " + e.getMessage());
			};
			
			TypeReference<List<EconomicIndex>> economicIndexTypeReference = new TypeReference<List<EconomicIndex>>(){};
			InputStream economicIndexInputStream = TypeReference.class.getResourceAsStream("/data/economicIndexs.json");
			try {
				List<EconomicIndex> economicIndexs = mapper.readValue(economicIndexInputStream, economicIndexTypeReference);
				economicIndexService.dropCollection();
				economicIndexService.save(economicIndexs);
				System.out.println("Economic indicies saved!");
			} catch (IOException e) {
				System.out.println("Unable to save economic indicies: " + e.getMessage());
			};
        };
    }

}
