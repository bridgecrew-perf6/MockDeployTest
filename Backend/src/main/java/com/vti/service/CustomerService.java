package com.vti.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.vti.form.CustomerFormForCreating;
import com.vti.repositoty.CustomerRepository;

@Service
@Component
@Transactional
public class CustomerService implements ICustomerService{

	@Autowired
	private CustomerRepository customerRepository;
	
//	public Page<Customer> getAllCustomers(Pageable pageable, GroupFilter filter, String search) {
//
//		GroupSpecificationBuilder2 specification = new GroupSpecificationBuilder2(filter, search);
//
//		return customerRepository.findAll(specification.build(), pageable);
//	}

	
	@Override
	public void createCustomer(CustomerFormForCreating dto) {
 		
		customerRepository.save(dto.toEntity());
		
	}

}