
import React, { useEffect, useState } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    Container,
    Row,
    UncontrolledCarousel
} from "reactstrap";
import * as Icon from "react-feather";
import Button from "reactstrap/lib/Button";
import TourForeignApi from "../api/TourForeignApi";
import storage from "../Storage/Storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";






const TourDetails = () => {
    const [tourInfo, setTourInfo] = useState({});

    useEffect(() => {
        const infoTour = async (tourId) => {
            const result = await TourForeignApi.getById(storage.getTourID(tourId));


            setTourInfo(result);



        }
        infoTour();

    }, []);
    // const [isOpenInfo, setOpenInfo] = useState(false);


    const slides = [
        {
            src: `http://127.0.0.1:8887/img/${tourInfo.img1}`,
            key: "1"
        },
        {
            src: `http://127.0.0.1:8887/img/${tourInfo.img2}`,
            key: "2"
        },
        {
            src: `http://127.0.0.1:8887/img/${tourInfo.img3}`,
            key: "3"
        },
        {
            src: `http://127.0.0.1:8887/img/${tourInfo.img4}`,
            key: "4"
        },
        {
            src: `http://127.0.0.1:8887/img/${tourInfo.img5}`,
            key: "5"
        }
    ];
    return (
        <Card >
            <CardHeader >

                <Row>
                    <Col md='4'>
                        <h3><FontAwesomeIcon icon={faMoneyBill}  size={30}/>
                            {tourInfo.money}đ</h3>
                    </Col>
                    <Col>
                        <h3><Icon.Clock size={20} />Thời gian : {tourInfo.timer}</h3>
                        <h3><Icon.Calendar size={20} /> Khởi hành: {tourInfo.departureDay}</h3>
                    </Col>
                    <Col md='3'>
                        <Button style={mystyle1}> Đặt ngay!</Button>

                    </Col>
                </Row>
            </CardHeader>
            <CardBody style={mystyle} >
                <UncontrolledCarousel
                    items={slides}
                    indicators={true}
                    controls={true}
                />
            </CardBody>

        </Card>
    );

}

const Thongtintour = () => {
    const [tourInfo, setTourInfo] = useState({});

    useEffect(() => {

        const infoTour = async (tourId) => {
            const result = await TourForeignApi.getById(storage.getTourID(tourId));
            setTourInfo(result);
        }
        infoTour();

    }, []);
    return (
        <Card style={mystyle}>
            <Row >
                <CardHeader >
                    <span style={{ fontSize: 'x-large' }}> <Icon.Film size={30} />
                        Thông tin tour
                    </span>
                </CardHeader>
            </Row>
            <CardBody className="pt-0">

                <CardTitle >{tourInfo.nameTour}</CardTitle>
                <CardTitle >Mã tour: BTTDLA00HCM27102112P</CardTitle>
                <CardTitle >Số chỗ còn: {tourInfo.slotBlank} chỗ</CardTitle>
                <CardTitle >Phương tiện: {tourInfo.vehicle} </CardTitle>

            </CardBody>
            <CardBody style={mystyle2} >

                <h2><Icon.Phone size={40} />1900</h2>

            </CardBody>
        </Card>
    );
};
const Tuorists = () => {
    return (
        <Card style={mystyle}>
            <Row >
                <CardHeader >
                    <span style={{ fontSize: 'x-large' }}> <Icon.Film size={30} />
                        Tour Liên quan
                    </span>
                </CardHeader>
            </Row>
            <img src="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?cs=srgb&dl=pexels-pierre-blach%C3%A9-2901209.jpg&fm=jpg" alt="Ảnh sai" />
            <CardBody className="pt-0">

                <CardTitle >Du Lịch Miền Tây: Long An - Bỏ Phố Về Làng</CardTitle>
                <CardTitle >Mã tour: BTTDLA00HCM27102112P</CardTitle>
                <CardTitle >Số chỗ còn: 15 chỗ</CardTitle>
                <CardTitle >Khởi hành tại: Hồ Chí Minh</CardTitle>

            </CardBody>
        </Card>
    );
};
const mystyle = {
    color: "Green",
    backgroundColor: "lightBlue",
    padding: "10px",
    fontFamily: "Arial"
};
const mystyle1 = {
    color: "Black",
    backgroundColor: "Red",
    fontSize: "25px",
    fontFamily: "Arial",
};
const mystyle2 = {
    textAlign: "center",
    backgroundColor: "yellow",
    fontSize: "25px",
    fontFamily: "Arial",

};
const SlidesOnly1 = () => {
    const [tourInfo, setTourInfo] = useState({});

    useEffect(() => {
        const infoTour = async (tourId) => {
            const result = await TourForeignApi.getById(storage.getTourForeignID(tourId));
            setTourInfo(result);
        }
        infoTour();

    }, []);
    return (
        <Card>
            <Row style={mystyle}>
                <CardHeader >
                    <span style={{ fontSize: 'x-large' }}> <Icon.Film size={30} />
                        Chương trình tour
                    </span>
                </CardHeader>
            </Row>
            <p>
                Ngày 1: {tourInfo.day1}
            </p>
            <p>
                Ngày 2: {tourInfo.day2}
            </p>
        </Card>
    );
};

const TourInfo = () => (
    <Container fluid className="p-0">

        <Row>
            <Col lg="8">
                <TourDetails />
            </Col>
            <Col lg="4">
                <Thongtintour />
            </Col>
        </Row>
        <Row>
            <Col lg="8">
                <SlidesOnly1 />
            </Col>
            <Col lg="4">
                <Tuorists />
            </Col>
        </Row>
    </Container>
);

export default TourInfo;