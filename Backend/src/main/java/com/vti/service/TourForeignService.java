package com.vti.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.vti.entity.TourForeign;
import com.vti.repositoty.TourForeignRepository;
import com.vti.utils.FileUploadUtil;

@Service
public class TourForeignService implements ITourForeignService {

	@Autowired
	private TourForeignRepository repository;

	@Override
	public Page<TourForeign> getAllToursForeign(Pageable pageable) {
		// TODO Auto-generated method stub
		return repository.findAll(pageable);
	}

	@Override
	public TourForeign getTourForeignByID(short id) {
		// TODO Auto-generated method stub
		return repository.findById(id).get();
	}

	@Override
	public String createTourForeign(String nameTour, String timer, String departureDay, String slotBlank, String money,
			MultipartFile img1, MultipartFile img2, MultipartFile img3, MultipartFile img4, MultipartFile img5,
			String day1, String day2) throws IOException {
		// TODO Auto-generated method stub
		String nameImg1 = StringUtils.cleanPath(img1.getOriginalFilename());
		String nameImg2 = StringUtils.cleanPath(img2.getOriginalFilename());
		String nameImg3 = StringUtils.cleanPath(img3.getOriginalFilename());
		String nameImg4 = StringUtils.cleanPath(img4.getOriginalFilename());
		String nameImg5 = StringUtils.cleanPath(img5.getOriginalFilename());
		
		TourForeign tourForeign = new TourForeign();
		tourForeign.setNameTour(nameTour);
		tourForeign.setTimer(timer);
		tourForeign.setDepartureDay(departureDay);
		tourForeign.setSlotBlank(slotBlank);
		tourForeign.setMoney(money);
		tourForeign.setImg1(nameImg1);
		tourForeign.setImg2(nameImg2);
		tourForeign.setImg3(nameImg3);
		tourForeign.setImg4(nameImg4);
		tourForeign.setImg5(nameImg5);
		tourForeign.setDay1(day1);
		tourForeign.setDay2(day2);
		TourForeign saveTour = repository.save(tourForeign);
		String uploadDir = "tour/" + saveTour.getTourForeignId();
		
		FileUploadUtil.saveFile(uploadDir, nameImg1, img1);
		FileUploadUtil.saveFile(uploadDir, nameImg2, img2);
		FileUploadUtil.saveFile(uploadDir, nameImg3, img3);
		FileUploadUtil.saveFile(uploadDir, nameImg4, img4);
		FileUploadUtil.saveFile(uploadDir, nameImg5, img5);
		
		return tourForeign.toString();
	}

}
