package com.vti.service;

import java.io.IOException;
import java.util.Date;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.vti.utils.FileManager;

@Service
public class FileService implements IFileService {

	private FileManager fileManager = new FileManager();
	private String linkFolder = "C:\\Mockprojec\\img";

	@Override
	public String uploadImage(MultipartFile img1) throws IOException {


		String nameImg1 = new Date().getTime() + "." + fileManager.getFormatFile(img1.getOriginalFilename());

		String path1 = linkFolder + "\\" + nameImg1;

		fileManager.createNewMultiPartFile(path1, img1);

		// TODO save link file to database

		// return link uploaded file
		return nameImg1;
	}
}
