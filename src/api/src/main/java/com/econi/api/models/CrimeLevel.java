package com.econi.api.models;

public class CrimeLevel {

	private Integer year;
	private Integer violenceAgainstThePerson;
	private Integer sexualOffences;
	private Integer robbery;
	private Integer theft;
	private Integer criminalDamage;
	private Integer drugOffences;
	private Integer publicOrderOffences;
	private Integer possessionOfWeapons;
	private Integer miscellaneousCrimesAgainstSociety;
	private Integer otherFraud;
	private Integer allCrime;

	public Integer getYear() {
		return year;
	}
	
	public Integer getViolenceAgainstThePerson() {
		return violenceAgainstThePerson;
	}

	public void setViolenceAgainstThePerson(Integer violenceAgainstThePerson) {
		this.violenceAgainstThePerson = violenceAgainstThePerson;
	}

	public Integer getSexualOffences() {
		return sexualOffences;
	}

	public void setSexualOffences(Integer sexualOffences) {
		this.sexualOffences = sexualOffences;
	}

	public Integer getRobbery() {
		return robbery;
	}

	public void setRobbery(Integer robbery) {
		this.robbery = robbery;
	}

	public Integer getTheft() {
		return theft;
	}

	public void setTheft(Integer theft) {
		this.theft = theft;
	}

	public Integer getCriminalDamage() {
		return criminalDamage;
	}

	public void setCriminalDamage(Integer criminalDamage) {
		this.criminalDamage = criminalDamage;
	}

	public Integer getDrugOffences() {
		return drugOffences;
	}

	public void setDrugOffences(Integer drugOffences) {
		this.drugOffences = drugOffences;
	}

	public Integer getPublicOrderOffences() {
		return publicOrderOffences;
	}

	public void setPublicOrderOffences(Integer publicOrderOffences) {
		this.publicOrderOffences = publicOrderOffences;
	}

	public Integer getPossessionOfWeapons() {
		return possessionOfWeapons;
	}

	public void setPossessionOfWeapons(Integer possessionOfWeapons) {
		this.possessionOfWeapons = possessionOfWeapons;
	}

	public Integer getMiscellaneousCrimesAgainstSociety() {
		return miscellaneousCrimesAgainstSociety;
	}

	public void setMiscellaneousCrimesAgainstSociety(Integer miscellaneousCrimesAgainstSociety) {
		this.miscellaneousCrimesAgainstSociety = miscellaneousCrimesAgainstSociety;
	}

	public Integer getOtherFraud() {
		return otherFraud;
	}

	public void setOtherFraud(Integer otherFraud) {
		this.otherFraud = otherFraud;
	}

	public Integer getAllCrime() {
		return allCrime;
	}

	public void setAllCrime(Integer allCrime) {
		this.allCrime = allCrime;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

}