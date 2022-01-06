package com.vti.service;

import java.io.IOException;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import com.vti.entity.Tour;

public interface ITourService {

	Page<Tour> getAllTours(Pageable pageable);

//	void createTour(Tour tour);

	Tour getTourByID(short id);

	String createTour(String nameTour, String timer, String departureDay, String slotBlank, String money,
			MultipartFile img1, MultipartFile img2, MultipartFile img3, MultipartFile img4, MultipartFile img5,
			String day1, String day2) throws IOException;

	String updateTour(short tourId, String nameTour, String timer, String departureDay, String slotBlank, String money,
			MultipartFile img1, MultipartFile img2, MultipartFile img3, MultipartFile img4, MultipartFile img5,
			String day1, String day2) throws IOException;

	void deleteTour(short tourId);

}
