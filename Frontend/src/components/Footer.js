import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import {
  faFacebook,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => (
  <footer className="footer">
    <Container fluid>
      <Row className="text-muted">
        <Col md="6" className="text-left">
          <p><b>CÔNG TY CỔ PHẦN TRUYỀN THÔNG DU LỊCH VIỆT</b></p>
          <p><b>Trụ sở chính:</b> 95B-97-99 Trần Hưng Đạo, Quận 1, TP. Hồ Chí Minh.</p>
          <p><b>Chi nhánh Hà Nội:</b> 66 Trần Hưng Đạo, Quận Hoàn Kiếm, Hà Nội</p>
          <p><b>Điện thoại:</b> 028 73056789 | Hotline: 1900 1177</p>
          <p><b>Website:</b> dulichviet.com.vn</p>
          <p><b>Email:</b> info@dulichviet.com.vn</p>
          <br></br>
          <p><b>GIẤY PHÉP KINH DOANH DỊCH VỤ LỮ HÀNH QUỐC TẾ</b></p>
          <p>Số GP/ No: 79-042/ 2019/ TCDL – GPLHQT</p>
          <p>Do Tổng Cục Du Lịch cấp ngày 11/9/2019</p>
          <p><b>Số ĐKKD: 030 5448 565 được cấp bởi sở kế hoạch và đầu tư TP. Hồ Chí Minh.</b></p>
          <p>Đăng ký lần đầu ngày 11/01/2008, Đăng ký thay đổi lần 05 ngày 26/10/2017</p>
        </Col>
        <Col md="4" >
          <p><b style={{ color: 'blue' }}>GÓC KHÁCH HÀNG</b></p>
          <p>Chính sách đặt tour</p>
          <p>Chính sách bảo mật</p>
          <p>Ý kiến khách hàng</p>
          <p>Phiếu góp ý</p>
          <br></br>
          <p><b style={{ color: 'blue' }}>KẾT NỐI VỚI CHÚNG TÔI</b></p>
          <span>
            <Button color="facebook" className="mr-1 mb-1">
              <FontAwesomeIcon icon={faFacebook} className="align-middle" />{" "}
              <a href="https://www.facebook.com/profile.php?id=100043982761112">Facebook</a>
            </Button>
            <Button color="youtube" className="mr-1 mb-1">
              <FontAwesomeIcon icon={faYoutube} className="align-middle" />
              <a href="https://www.youtube.com/channel/UCmdcZ7MdCvEmoABiv9fmBew">Youtube</a> 
            </Button>
            <Button color="instagram" className="mr-1 mb-1">
              <FontAwesomeIcon icon={faInstagram} className="align-middle" />{" "}
              <a href="https://www.instagram.com/thuongdkz75/">Instagram</a>
            </Button>
          </span>
        </Col>
        <Col md="2">
          <p><b style={{ color: 'blue' }}>CHỨNG NHẬN</b></p>
          <Button style={{backgroundColor: 'royalblue'}}>DMCA</Button><Button style={{backgroundColor: 'royalblue'}}>PROTECTED</Button>

        </Col>

      </Row>
    </Container>
  </footer>
);

export default Footer;
