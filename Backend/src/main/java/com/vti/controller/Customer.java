package com.vti.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vti.form.CustomerFormForCreating;
import com.vti.service.ICustomerService;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/customer")
public class Customer {

	@Autowired
	private ICustomerService customerService;	
	
//	@GetMapping()
//	public ResponseEntity<?> getAllCustomers(
//			Pageable pageable, 
//			GroupFilter filter,
//			@RequestParam(required = false) String search) {
//		Page<com.vti.entity.Customer> entities = customerService.getAllCustomers(pageable, filter, search);
//		return new ResponseEntity<>(entities, HttpStatus.OK);
//	}
	
	@PostMapping()
	public ResponseEntity<?> createCustomer(@RequestBody CustomerFormForCreating dto) {
		// create User
		customerService.createCustomer(dto);

		return new ResponseEntity<String>("Thành công!", HttpStatus.OK);
	}
}
