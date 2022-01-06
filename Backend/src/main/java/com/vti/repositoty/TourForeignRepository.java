package com.vti.repositoty;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;


import com.vti.entity.TourForeign;

public interface TourForeignRepository extends JpaRepository<TourForeign, Short>, JpaSpecificationExecutor<TourForeign> {

	public TourForeign findByTourForeignId(Short tourForeignId);
	
}
