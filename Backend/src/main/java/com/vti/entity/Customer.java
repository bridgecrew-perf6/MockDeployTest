package com.vti.entity;
import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "CUSTOMER")
public class Customer implements Serializable{
	private static final long serialVersionUID = 1L;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CustomerID", unique = true, nullable = false)
	private short customerID;
	
	@Column(name = "CustomerName", nullable = false, length = 50, unique = true)
	private String customerName;

	@Column(name = "`email`", nullable = false, length = 50, unique = true)
	private String email;
	
	@Column(name = "NgayKhoiHanh")
	private LocalDate date;		
	
	@Column(name = "Phone", nullable = false, length = 10, unique = true)
	private String phone;
	
	@Column(name = "Address", nullable = false, length = 100, unique = true)
	private String address;
	
	@Column(name = "Note", nullable = false, length = 250, unique = true)
	private String note;

	public Customer(String customerName, String email,LocalDate date ,String phone, String address, String note) {
		super();
		this.customerName = customerName;
		this.email = email;
		this.date = date;
		this.phone = phone;
		this.address = address;
		this.note = note;
	}



	public short getCustomerID() {
		return customerID;
	}



	public void setCustomerID(short customerID) {
		this.customerID = customerID;
	}



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



	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
}
