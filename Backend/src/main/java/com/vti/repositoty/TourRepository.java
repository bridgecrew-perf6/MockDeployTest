package com.vti.repositoty;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import com.vti.entity.Tour;

public interface TourRepository extends JpaRepository<Tour, Short>, JpaSpecificationExecutor<Tour> {
	
	public Tour findByTourId(Short tourId);
	

}
