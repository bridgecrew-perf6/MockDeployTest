package com.vti.service;

import com.vti.form.CustomerFormForCreating;

public interface ICustomerService  {

//	  Page<Customer> getAllCustomers(Pageable pageable, GroupFilter filter, String search);
      void createCustomer(CustomerFormForCreating dto);

}