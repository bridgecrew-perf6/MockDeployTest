import React, { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardImg,
    CardTitle,
    Col,
    ListGroup,
    ListGroupItem,
    Button,
    Row,

} from "reactstrap";

// import { connect } from "react-redux";
import * as Icon from 'react-feather';
import TourApi from "../api/TourApi";

import { Link } from "react-router-dom";
import storage from "../Storage/Storage";

// import { getListTourAction } from "../redux/actions/TourAction";
// import { selectPage, selectSelectedRows, selectSize, selectTotalSize, selectTours } from "../redux/Selectors/TourSelectors";

const FormTour = () => {

    const Cards = () => {

        const [tours, setTour] = useState([]);
        const [, setTourInfo] = useState([]);


        useEffect(() => {
            const getTourList = async () => {
                const result = await TourApi.getListTours();
                const tour = result.content;
                const totalSize = result.totalElements;
                setTour(tour, 1, totalSize);


            }
            getTourList();

        }, []);

        const infoTour = async (tourId) => {
            const result = await TourApi.getById(tourId);
            setTourInfo(result);
            console.log(result);
            console.log(tourId);

        }



        return tours.map(e =>
            <Col md="3" lg="4" key={e.tourId}>
                <Card  >
                    <CardImg top width="100%" src={e.img1 ? `http://127.0.0.1:8887/img/${e.img1}` : "Ảnh sai"} alt="Card image cap" />
                    <CardHeader >
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
                    <Button name="tourId" color="primary" href="/private/tourInfo" onClick={() => infoTour(storage.setTourID(e.tourId))} >Xem Thông Tin</Button>
                </Card>

            </Col>
        )
    };



    return (
        <div>
            <h2><b><label>TOUR DU LỊCH TRONG NƯỚC </label></b></h2><br></br>
            <Row>
                <Cards />
                <Button className='button'><Link to="/private/formTourAll">Xem tất cả</Link></Button>
            </Row>

        </div>
    )
}

// const mapGlobalStateToProps = state => {
//     return {
//         groups: selectTours(state),
//         page: selectPage(state),
//         size: selectSize(state),
//         totalSize: selectTotalSize(state),
//         selectedRows: selectSelectedRows(state)
//     }
// };

// export default connect(mapGlobalStateToProps, { getListTourAction })(FormTour);
export default FormTour;