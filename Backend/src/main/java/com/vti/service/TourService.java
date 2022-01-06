package com.vti.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.vti.entity.Tour;
import com.vti.repositoty.TourRepository;
import com.vti.utils.FileUploadUtil;


@Service
public class TourService implements ITourService {

	@Autowired
	private TourRepository repository;

	@Override
	public Page<Tour> getAllTours(Pageable pageable) {
		// TODO Auto-generated method stub
		return repository.findAll(pageable);
	}

	@Override
	public Tour getTourByID(short id) {
		return repository.findById(id).get();
	}

	@Override
	public String createTour(String nameTour, String timer,  String departureDay, String slotBlank,
			String money, 
			MultipartFile img1, MultipartFile img2,
			MultipartFile img3, MultipartFile img4,
			MultipartFile img5, String day1, String day2
			) throws IOException {
		
		String nameImg1 = StringUtils.cleanPath(img1.getOriginalFilename());
		String nameImg2 = StringUtils.cleanPath(img2.getOriginalFilename());
		String nameImg3 = StringUtils.cleanPath(img3.getOriginalFilename());
		String nameImg4 = StringUtils.cleanPath(img4.getOriginalFilename());
		String nameImg5 = StringUtils.cleanPath(img5.getOriginalFilename());
		
		Tour tour = new Tour();
		tour.setNameTour(nameTour);
		tour.setTimer(timer);
		tour.setDepartureDay(departureDay);
		tour.setSlotBlank(slotBlank);
		tour.setMoney(money);
		tour.setImg1(nameImg1);
		tour.setImg2(nameImg2);
		tour.setImg3(nameImg3);
		tour.setImg4(nameImg4);
		tour.setImg5(nameImg5);
		tour.setDay1(day1);
		tour.setDay2(day2);
		Tour saveTour = repository.save(tour);
		String uploadDir = "tour/" + saveTour.getTourId();
		
		FileUploadUtil.saveFile(uploadDir, nameImg1, img1);
		FileUploadUtil.saveFile(uploadDir, nameImg2, img2);
		FileUploadUtil.saveFile(uploadDir, nameImg3, img3);
		FileUploadUtil.saveFile(uploadDir, nameImg4, img4);
		FileUploadUtil.saveFile(uploadDir, nameImg5, img5);
		
		return tour.toString();
		
	}

	@Override
	public String updateTour(short tourId, String nameTour, String timer, String departureDay, String slotBlank,
			String money, MultipartFile img1, MultipartFile img2, MultipartFile img3, MultipartFile img4,
			MultipartFile img5, String day1, String day2) throws IOException {
		// TODO Auto-generated method stub
		String nameImg1 = StringUtils.cleanPath(img1.getOriginalFilename());
		String nameImg2 = StringUtils.cleanPath(img2.getOriginalFilename());
		String nameImg3 = StringUtils.cleanPath(img3.getOriginalFilename());
		String nameImg4 = StringUtils.cleanPath(img4.getOriginalFilename());
		String nameImg5 = StringUtils.cleanPath(img5.getOriginalFilename());
		
		Tour tour = repository.findById(tourId).get();
		tour.setNameTour(nameTour);
		tour.setTimer(timer);
		tour.setDepartureDay(departureDay);
		tour.setSlotBlank(slotBlank);
		tour.setMoney(money);
		tour.setImg1(nameImg1);
		tour.setImg2(nameImg2);
		tour.setImg3(nameImg3);
		tour.setImg4(nameImg4);
		tour.setImg5(nameImg5);
		tour.setDay1(day1);
		tour.setDay2(day2);
		Tour saveTour = repository.save(tour);
		String uploadDir = "tour/" + saveTour.getTourId();
		
		FileUploadUtil.saveFile(uploadDir, nameImg1, img1);
		FileUploadUtil.saveFile(uploadDir, nameImg2, img2);
		FileUploadUtil.saveFile(uploadDir, nameImg3, img3);
		FileUploadUtil.saveFile(uploadDir, nameImg4, img4);
		FileUploadUtil.saveFile(uploadDir, nameImg5, img5);
		
		return tour.toString();
	}

	@Override
	public void deleteTour(short tourId) {
		// TODO Auto-generated method stub
		repository.deleteById(tourId);
	}

//	@Override
//	public void createTour(Tour tour) {
//		// TODO Auto-generated method stub
//		repository.save(tour);
//	}

}
