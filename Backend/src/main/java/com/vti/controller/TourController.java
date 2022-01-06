package com.vti.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.vti.entity.Tour;
import com.vti.service.ITourService;

@RestController
@RequestMapping(value = "api/v1/tours")
@CrossOrigin("*")
public class TourController {

	@Autowired
	private ITourService service;

	@GetMapping()
	public ResponseEntity<?> getAllTours(Pageable pageable) {
		Page<Tour> entities = service.getAllTours(pageable);
		return new ResponseEntity<>(entities, HttpStatus.OK);
	}

	@PostMapping()
	public ResponseEntity<?> createTour(@RequestParam("nameTour") String nameTour, @RequestParam("timer") String timer,
			@RequestParam("departureDay") String departureDay, @RequestParam("slotBlank") String slotBlank,
			@RequestParam("money") String money, @RequestParam(name = "img1", required = false) MultipartFile img1,
			@RequestParam(name = "img2", required = false) MultipartFile img2,
			@RequestParam(name = "img3", required = false) MultipartFile img3,
			@RequestParam(name = "img4", required = false) MultipartFile img4,
			@RequestParam(name = "img5", required = false) MultipartFile img5,
			@RequestParam("day1") String day1,
			@RequestParam("day2") String day2

	) throws IOException {
		service.createTour(nameTour, timer, departureDay, slotBlank, money, img1, img2, img3, img4, img5, day1, day2);
		return new ResponseEntity<String>("Create successfully!", HttpStatus.OK);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<?> getTourByID(@PathVariable(name = "id") short id) {
		return new ResponseEntity<>(service.getTourByID(id), HttpStatus.OK);
	}

	@PutMapping(value = "/update/{tourId}")
	public ResponseEntity<?> updateTour(@PathVariable(name = "tourId") short tourId,
			@RequestParam("nameTour") String nameTour, @RequestParam("timer") String timer,
			@RequestParam("departureDay") String departureDay, @RequestParam("slotBlank") String slotBlank,
			@RequestParam("money") String money, @RequestParam(name = "img1", required = false) MultipartFile img1,
			@RequestParam(name = "img2", required = false) MultipartFile img2,
			@RequestParam(name = "img3", required = false) MultipartFile img3,
			@RequestParam(name = "img4", required = false) MultipartFile img4,
			@RequestParam(name = "img5", required = false) MultipartFile img5, @RequestParam("day1") String day1,
			@RequestParam("day2") String day2

	) throws IOException {
		service.updateTour(tourId, nameTour, timer, departureDay, slotBlank, money, img1, img2, img3, img4, img5, day1,
				day2);
		return new ResponseEntity<String>("Update successfully!", HttpStatus.OK);
	}
	
	@DeleteMapping(value = "/delete/{tourId}")
	public ResponseEntity<?> deleteTour(@PathVariable(name = "tourId") short tourId) {
		service.deleteTour(tourId);
		return new ResponseEntity<String>("Delete successfully!", HttpStatus.OK);
	}

}
