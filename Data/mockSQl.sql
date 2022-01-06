-- Drop the database if it already exists
DROP DATABASE IF EXISTS TestingSystem1;
-- Create database
CREATE DATABASE IF NOT EXISTS TestingSystem1;
USE TestingSystem1;

-- Create table user
DROP TABLE IF EXISTS 	`User`;
CREATE TABLE IF NOT EXISTS `User` ( 	
	id 				SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`username`	 	CHAR(50) NOT NULL UNIQUE CHECK (LENGTH(`username`) >= 6 AND LENGTH(`username`) <= 50),
	`email` 		CHAR(50) NOT NULL UNIQUE CHECK (LENGTH(`email`) >= 6 AND LENGTH(`email`) <= 50),
	`password` 		VARCHAR(800) NOT NULL,
    `firstName` 	NVARCHAR(50) NOT NULL,
	`lastName` 		NVARCHAR(50) NOT NULL,
    `role` 			ENUM('Admin','User','Manager') DEFAULT 'User',
	`status`		TINYINT DEFAULT 0 -- 0: Not Active, 1: Active
    
);

DROP TABLE IF EXISTS 	`Tour`;
CREATE TABLE IF NOT EXISTS `Tour` ( 
	tourId			SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `nameTour`		VARCHAR(500) NOT NULL UNIQUE,
	`timer`			VARCHAR(500) NOT NULL,
    `departureDay`	VARCHAR(50),
    `slotBlank`		VARCHAR(50) NOT NULL,
    `money`			VARCHAR(50) NOT NULL,
	`img1`			VARCHAR(50),
    `img2`			VARCHAR(50),
    `img3`			VARCHAR(50),
    `img4`			VARCHAR(50),
	`img5`			VARCHAR(50),
	`day1`			NVARCHAR(1000),
    `day2`			NVARCHAR(1000),
    `vehicle`		ENUM('Car', 'Plane') DEFAULT 'Car'
);

DROP TABLE IF EXISTS 	`TourForeign`;
CREATE TABLE IF NOT EXISTS `TourForeign` ( 
	tourForeignId	SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `nameTour`		VARCHAR(500) NOT NULL UNIQUE,
	`timer`			VARCHAR(500) NOT NULL,
    `departureDay`	DATE NOT NULL,
    `slotBlank`		TINYINT NOT NULL,
    `money`			VARCHAR(50) NOT NULL,
    `img1`			VARCHAR(50),
    `img2`			VARCHAR(50),
    `img3`			VARCHAR(50),
    `img4`			VARCHAR(50),
	`img5`			VARCHAR(50),
	`day1`			NVARCHAR(1000),
    `day2`			NVARCHAR(1000),
    `vehicle`		ENUM('Car', 'Plane') DEFAULT 'Plane'
);

-- Create table Registration_User_Token
DROP TABLE IF EXISTS 	`Registration_User_Token`;
CREATE TABLE IF NOT EXISTS `Registration_User_Token` ( 	
	id 				INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`token`	 		CHAR(36) NOT NULL UNIQUE,
	`user_id` 		SMALLINT UNSIGNED NOT NULL,
	`expiryDate` 	DATETIME NOT NULL
);

-- Create table Reset_Password_Token
DROP TABLE IF EXISTS 	`Reset_Password_Token`;
CREATE TABLE IF NOT EXISTS `Reset_Password_Token` ( 	
	id 				INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`token`	 		CHAR(36) NOT NULL UNIQUE,
	`user_id` 		SMALLINT UNSIGNED NOT NULL,
	`expiryDate` 	DATETIME NOT NULL
);

-- Create Table Employee
DROP TABLE IF EXISTS  CUSTOMER;
CREATE TABLE 	CUSTOMER ( 
	CustomerID 			smallint 		 AUTO_INCREMENT PRIMARY KEY,
	CustomerName 		CHAR(50) 	 NOT NULL  CHECK (LENGTH(CustomerName) <= 20),
	`email` 			CHAR(50) 	 NOT NULL UNIQUE ,
    NgayKhoiHanh 		DATE NOT NULL,
	Phone 				CHAR(10) 	 NOT NULL CHECK(LENGTH(Phone) = 10),
	Address 			NVARCHAR(100) NOT NULL  CHECK (LENGTH(Address) <= 300),
    Note				NVARCHAR(100) NOT NULL CHECK (LENGTH(Note) <= 250)
);

INSERT INTO `User` 	(`username`,			`email`,						`password`,															`firstName`,		`lastName`, 		`status`, 	`role`						)
VALUE				('thuongnguyen',		'thuongdkz75@gmail.com',		'$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',		'Nguyễn',			'Văn Thưởng',			1, 		'Admin' 					), 
					('leanhvu',				'letronganhvu1996@gmail.com',	'$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',		'Lê',				'Trọng Anh Vũ',			1, 		'User' 					), 
					('can.tuananh@vti',		'cananh.tuan12@vti.com',		'$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi',		'Cấn'	,			'Tuấn Anh',				0, 		'Manager' 					);

INSERT INTO `Tour` 	(`nameTour`											,`timer`		,	`departureDay`	,`slotBlank`,	`money`	, 	`img1`	, 	`img2`	,	`img3`	,	`img4`,		`img5`		,`day1`											,`day2`																		,	`vehicle`	)
VALUE				('Du lịch Đà Nẵng - Ngũ Hành Sơn - Bà Nà'			,'2 ngày 1 đêm'	,	'2021-11-21'	,	'10'	,	'1.000.000',	'dn1.jpg', 	'dn2.jpg',	'dn3.jpg',	'dn4.jpg',	'dn5.jpg'	,' TP.HCM – ĐÀ NẴNG – HỘI AN (ăn trưa, chiều)'	,'ĐÀ NẴNG – CAO NGUYÊN BÀ NÀ (ăn sáng, chiều) (ăn trưa tự túc) (Xem thêm)'	,	'Car'		),
					('Du lịch Đà Nẵng - Huế - Thánh Địa La Vang '		,'2 ngày 1 đêm',	'2021-11-21'	,	'3'		,	'1.500.000',	'hue1.jpg', 'dn1.jpg',	'hue2.jpg',	'hue3.jpg',	'hue4.jpg'	,' TP.HCM – ĐÀ NẴNG – HỘI AN (ăn trưa, chiều)'	,'ĐÀ NẴNG – CAO NGUYÊN BÀ NÀ (ăn sáng, chiều) (ăn trưa tự túc) (Xem thêm)'	,	'Car'		),
                    ('Du lịch Đà Lạt - QUÊ Garden - Đồi Chè Cầu Đất'	,'2 ngày 1 đêm'	,	'2021-11-21'	,	'7'		,	'1.200.000',	'dl1.jpg', 	'dl2.jpg',	'dl3.jpg',	'dl4.jpg',	'dl5.jpg'	,' TP.HCM – ĐÀ NẴNG – HỘI AN (ăn trưa, chiều)'	,'ĐÀ NẴNG – CAO NGUYÊN BÀ NÀ (ăn sáng, chiều) (ăn trưa tự túc) (Xem thêm)'	,	'Car'		),
                    ('Du lịch Phan Thiết - Cát Vàng - Mũi Né - Hòn Rơm'	,'2 ngày 1 đêm'	,	'2021-11-21'	,	'4'		,	'1.100.000',	'pt1.jpg', 	'pt2.jpg',	'pt3.jpg',	'pt4.jpg',	'pt5.jpg'	,' TP.HCM – ĐÀ NẴNG – HỘI AN (ăn trưa, chiều)'	,'ĐÀ NẴNG – CAO NGUYÊN BÀ NÀ (ăn sáng, chiều) (ăn trưa tự túc) (Xem thêm)'	,	'Car'		),
                    ('Du lịch Nha Trang - Du Ngoạn 4 Đảo'				,'2 ngày 1 đêm'	,	'2021-11-21'	,	'7'		,	'1.300.000',	'nt1.jpg', 	'nt2.jpg',	'nt3.jpg',	'nt4.jpg',	''			,' TP.HCM – ĐÀ NẴNG – HỘI AN (ăn trưa, chiều)'	,'ĐÀ NẴNG – CAO NGUYÊN BÀ NÀ (ăn sáng, chiều) (ăn trưa tự túc) (Xem thêm)'	,	'Car'		),
                    ('Du lịch Phú Quốc - Grand World'					,'2 ngày 1 đêm'	,	'2021-11-21'	,	'8'		,	'1.400.000',	'pq1.jpg', 	'pq2.jpg',	'pq3.jpg',	'pq4.jpg',	'pq5.jpg'	,' TP.HCM – ĐÀ NẴNG – HỘI AN (ăn trưa, chiều)'	,'ĐÀ NẴNG – CAO NGUYÊN BÀ NÀ (ăn sáng, chiều) (ăn trưa tự túc) (Xem thêm)'	,	'Car'		);

INSERT INTO `TourForeign` 	(`nameTour`											,`timer`		,	`departureDay`	,`slotBlank`,	`money`	, 	`img1`		, 	`img2`		,	`img3`		,	`img4`		,	`img5`		,`day1`									,	`day2`									,	`vehicle`	)
VALUE						('Du lịch Châu Âu - Pháp - Luxembourg - Bỉ - Hà Lan','2 ngày 1 đêm'	,	'2021-11-21'	,	'10'	,	'10.000.000',	'halan1.jpg', 	'halan2.jpg',	'halan3.jpg',	'halan4.jpg',	'halan5.jpg','TP.HCM - RIGA (Ăn uống trên máy bay)'	,	' RIGA (Ăn trưa, ăn tối) (Xem thêm)'	,	'Plane'		),
							('Du lịch Châu Âu - Pháp - Thụy Sĩ  '				,'2 ngày 1 đêm',	'2021-11-21'	,	'3'		,	'15.000.000',	'p1.jpg'	, 	'p2.jpg'	,	'p3.jpg'	,	'p4.jpg'	,	'p5.jpg'	,'TP.HCM - RIGA (Ăn uống trên máy bay)'	,	' RIGA (Ăn trưa, ăn tối) (Xem thêm)'	,	'Plane'		),
							('Du lịch Anh mùa Xuân'								,'2 ngày 1 đêm'	,	'2021-11-21'	,	'7'		,	'12.000.000',	'a1.jpg'	, 	'a2.jpg'	,	'a3.jpg'	,	'a4.jpg'	,	'a5.jpg'	,'TP.HCM - RIGA (Ăn uống trên máy bay)'	,	' RIGA (Ăn trưa, ăn tối) (Xem thêm)'	,	'Plane'		),
							('Du lịch Nga - Moscow '							,'2 ngày 1 đêm'	,	'2021-11-21'	,	'4'		,	'11.000.000',	'nga1.jpg'	, 	'nga2.jpg'	,	'nga3.jpg'	,	'nga4.jpg'	,	'nga5.jpg'	,'TP.HCM - RIGA (Ăn uống trên máy bay)'	,	' RIGA (Ăn trưa, ăn tối) (Xem thêm)'	,	'Plane'		),
							('Du lịch Bắc Âu - Đan Mạch - Na Uy'				,'2 ngày 1 đêm'	,	'2021-11-21'	,	'7'		,	'13.000.000',	'nauy1.jpg'	, 	'nauy2.jpg'	,	'nauy3.jpg'	,	'nauy4.jpg'	,	'nauy5'		,'TP.HCM - RIGA (Ăn uống trên máy bay)'	,	' RIGA (Ăn trưa, ăn tối) (Xem thêm)'	,	'Plane'		),
							('Du lịch Bắc Âu săn cực quang và đón giao thừa'	,'2 ngày 1 đêm'	,	'2021-11-21'	,	'8'		,	'14.000.000',	'ba1.jpg'	, 	'ba2.jpg'	,	'ba3.jpg'	,	'ba4.jpg'	,	'ba5.jpg'	,'TP.HCM - RIGA (Ăn uống trên máy bay)'	,	' RIGA (Ăn trưa, ăn tối) (Xem thêm)'	,	'Plane'		);

INSERT INTO CUSTOMER	(CustomerName, 	`email`,						NgayKhoiHanh,			Phone,			Address , 		Note)
VALUE					('hanhbb',			'hanhhanoi21999@gmail.com',		'2021-10-5',		'0123456789',		'123abc',		'Manager' 	), 
						('thanhhung',		'hung2122112@gmail.com',		'2021-2-5',			'0123456789',		'123abc',		'Manager' 	), 
						('canbbb',			'cananh2.tuan12@vti.com',		'2021-4-7',			'0123456789'	,	'123abc',		'Manager' 	);		