package com.econi.api.models;

public class PortTraffic {

	private Integer year;
	private Integer totalInward;
	private Integer totalOutward;

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}
	
	public Integer getTotalInward() {
		return totalInward;
	}

	public void setTotalInward(Integer totalInward) {
		this.totalInward = totalInward;
	}
	
	public Integer getTotalOutward() {
		return totalOutward;
	}

	public void setTotalOutward(Integer totalOutward) {
		this.totalOutward = totalOutward;
	}

}