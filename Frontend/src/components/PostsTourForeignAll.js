import React, { useState } from 'react';
import {
    Button,
  Card,
  CardHeader,
  CardImg,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  

} from "reactstrap";
import * as Icon from 'react-feather';
import TourForeignApi from "../api/TourForeignApi";
import storage from '../Storage/Storage';

const Posts = ({ posts, loading }) => {

    const [ ,setTourInfo] = useState([]);
    const infoTour = async (tourForeignId) => {
      const result = await TourForeignApi.getById(tourForeignId);                
           setTourInfo(result);
           console.log(result);
           console.log(tourForeignId);
          
          
  
       }
  return (
    <>
      {posts.map(e => (
        <Col md="3" lg="4" key={e.tourForeignId}>
            
        <Card  >
            <CardImg top width="100%" src={e.img1 ? `http://127.0.0.1:8887/img/${e.img1}` : "Ảnh sai"} alt="Card image cap" />
            <CardHeader >
                <Icon.Trash size={20} style={{ float: 'right' }} /><Icon.Edit size={20} style={{ float: 'right', marginRight: '5px' }} />
                <CardTitle tag="h5" className="mb-0">
                    {e.nameTour}
                </CardTitle>
            </CardHeader>
            <ListGroup flush>
                <ListGroupItem><Icon.Clock size={12} /> Lịch trình: {e.timer}</ListGroupItem>
                <ListGroupItem><Icon.Calendar size={12} /> Khởi hành: {e.departureDay}</ListGroupItem>
                <ListGroupItem><Icon.User size={12} /> Số chỗ trống: {e.slotBlank}</ListGroupItem>
                <ListGroupItem><Icon.DollarSign size={12} />    <b color={'red'}>{e.money}{" "}VND</b></ListGroupItem>
            </ListGroup>
            <Button name="tourId" color="primary" href="tourForeignInfo" onClick={() => infoTour(storage.setTourForeignID(e.tourForeignId))}>Xem Thông Tin</Button>
        </Card>
        
    </Col>
      ))}
    </>
  );
};

export default Posts;