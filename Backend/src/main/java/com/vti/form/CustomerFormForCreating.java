package com.vti.form;

import java.time.LocalDate;

import com.vti.entity.Customer;

public class CustomerFormForCreating {
	private String customerName;
	
	private String email;
	
	private LocalDate date;
	
	private String phone;
	
	private String address;
	
	private String note;

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}


	public Customer toEntity() {
		return new Customer(customerName,email,date,phone,address,note);
	}
	
	
	
	
	
}
