package com.vti.utils;

import java.io.File;
import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

public class FileManager {

	public boolean isFileOrFolderExist(String path) throws IOException {
		return new File(path).exists();
	}

	public boolean isTypeFileImage(MultipartFile file) {
		return file.getContentType().toLowerCase().contains("image");
	}

	public void createNewMultiPartFile(String path1, MultipartFile multipartFile1)throws IllegalStateException, IOException {
		// write file
		File file1 = new File(path1);
		multipartFile1.transferTo(file1);
		
	}

	public String getFormatFile(String input) {
		String[] results = input.split("\\.");
		return results[results.length - 1];
	}
}
