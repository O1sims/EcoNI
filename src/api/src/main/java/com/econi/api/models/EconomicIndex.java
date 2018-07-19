package com.econi.api.models;

public class EconomicIndex {

	private String period;
	private double compositeEconomicIndex;
	private double privateSector;
	private double publicSector;
	private double services;
	private double production;
	private double construction;
	
	public String getPeriod() {
		return period;
	}
	
	public void setPeriod(String period) {
		this.period = period;
	}
	
	public double getCompositeEconomicIndex() {
		return compositeEconomicIndex;
	}

	public void setCompositeEconomicIndex(double compositeEconomicIndex) {
		this.compositeEconomicIndex = compositeEconomicIndex;
	}

	public double getPrivateSector() {
		return privateSector;
	}
	
	public void setPrivateSector(double privateSector) {
		this.privateSector = privateSector;
	}
	
	public double getPublicSector() {
		return publicSector;
	}
	
	public void setPublicSector(double publicSector) {
		this.publicSector = publicSector;
	}
	
	public double getServices() {
		return services;
	}
	
	public void setServices(double services) {
		this.services = services;
	}
	
	public double getProduction() {
		return production;
	}
	
	public void setProduction(double production) {
		this.production = production;
	}
	
	public double getConstruction() {
		return construction;
	}
	
	public void setConstruction(double construction) {
		this.construction = construction;
	}
	
}
