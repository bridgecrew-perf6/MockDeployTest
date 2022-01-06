package com.vti.repositoty;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.vti.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Short>, JpaSpecificationExecutor<Customer> {
	

}
