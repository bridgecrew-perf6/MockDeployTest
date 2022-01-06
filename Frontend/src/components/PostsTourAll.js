import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardImg,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
  FormGroup,
  ModalBody,
  ModalFooter,
  ModalHeader,

} from "reactstrap";
import * as Icon from 'react-feather';
import storage from '../Storage/Storage';
import TourApi from "../api/TourApi";
import { FastField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { toastr } from 'react-redux-toastr';
import { ReactstrapInput } from 'reactstrap-formik';

// import avatar1 from "../assets/img/avatars/avatar.jpg";

const Posts = ({ posts, loading }, props) => {


  const [, setTourInfo] = useState([]);
  const infoTour = async (tourId) => {
    const result = await TourApi.getById(tourId);
    setTourInfo(result);
    console.log(result);
    console.log(tourId);
  }

  //update
  const [isOpenModalUpdate, setOpenModalUpdate] = useState(false);

  const [tourUpdateInfo, setTourUpdateInfo] = useState({});

  const updateTour = async (tourId) => {
    setOpenModalUpdate(true);
    const tourInfo = await TourApi.getById(storage.getTourID(tourId));
    setTourUpdateInfo(tourInfo);
  }

  // notification
  const showNotification = (title, message) => {
    const options = {
      timeOut: 3000,
      showCloseButton: false,
      progressBar: false,
      position: 'top-right'
    };
    // show notification
    toastr.success(title, message, options);
  }

  const refreshForm = () => {
    window.location.reload();
  }

  const [, setTourNameInfo] = useState({});

  const deleteTour = async (tourId) => {
    // get id để lấy được tên để binding vào confirm
    const result = await TourApi.getById(storage.getTourID(tourId))
    setTourNameInfo(result);
    console.log(result);
    console.log(result.nameTour);
    // binding vào confirm
    const confirmBox = window.confirm(`Bạn có muốn xóa tour " ${result.nameTour} " không`);
    if (confirmBox === true) {
      await TourApi.deleteTour(storage.getTourID(tourId));

      showNotification(
        'Delete Group',
        'Delete Group Successfully !'
      )
      refreshForm();
    }
  }

  // const [previewImg1Url, setPreviewImg1Url] = useState();
  // const [previewImg2Url, setPreviewImg2Url] = useState();
  // const [previewImg3Url, setPreviewImg3Url] = useState();
  // const [previewImg4Url, setPreviewImg4Url] = useState();
  // const [previewImg5Url, setPreviewImg5Url] = useState();

  return (
    <>
      {posts.map(e => (
        <Col md="3" lg="4" key={e.tourId}>

          <Card  >
            <CardImg top width="100%" src={e.img1 ? `http://127.0.0.1:8887/img/${e.img1}` : "Ảnh sai"} alt="Card image cap" />
            <CardHeader >
              {storage.getRole() === "Admin" || storage.getRole() === "Manager" ?
                <Icon.Trash size={20} style={{ float: 'right', display: 'block' }}
                  onClick={() => deleteTour(storage.setTourID(e.tourId))}

                /> : <Icon.Trash size={20} style={{ float: 'right', display: 'none' }}
                  onClick={() => deleteTour(storage.setTourID(e.tourId))}

                />}

              {storage.getRole() === "Admin" || storage.getRole() === "Manager" ?
                <Icon.Edit size={20} style={{ float: 'right', marginRight: '5px', display: 'block' }}
                  onClick={() => updateTour(storage.setTourID(e.tourId))} /> : <Icon.Edit size={20}
                    style={{ float: 'right', marginRight: '5px', display: 'none' }}
                    onClick={() => updateTour(storage.setTourID(e.tourId))} />}

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
            <Button name="tourId" color="primary" href="tourInfo" onClick={() => infoTour(storage.setTourID(e.tourId))}>Xem Thông Tin</Button>

          </Card>

        </Col>
      ))}

      {/* Modal Update */}
      <Modal isOpen={isOpenModalUpdate} >

        <Formik
          enableReinitialize
          initialValues={
            {
              nameTour: tourUpdateInfo && tourUpdateInfo.nameTour ? tourUpdateInfo.nameTour : '',
              timer: tourUpdateInfo && tourUpdateInfo.timer ? tourUpdateInfo.timer : '',
              departureDay: tourUpdateInfo && tourUpdateInfo.departureDay ? tourUpdateInfo.departureDay : '',
              slotBlank: tourUpdateInfo && tourUpdateInfo.slotBlank ? tourUpdateInfo.slotBlank : '',
              money: tourUpdateInfo && tourUpdateInfo.money ? tourUpdateInfo.money : '',
              img1: tourUpdateInfo && tourUpdateInfo.img1 ? tourUpdateInfo.img1 : '',
              img2: tourUpdateInfo && tourUpdateInfo.img2 ? tourUpdateInfo.img2 : '',
              img3: tourUpdateInfo && tourUpdateInfo.img3 ? tourUpdateInfo.img3 : '',
              img4: tourUpdateInfo && tourUpdateInfo.img4 ? tourUpdateInfo.img4 : '',
              img5: tourUpdateInfo && tourUpdateInfo.img5 ? tourUpdateInfo.img5 : '',
              day1: tourUpdateInfo && tourUpdateInfo.day1 ? tourUpdateInfo.day1 : '',
              day2: tourUpdateInfo && tourUpdateInfo.day2 ? tourUpdateInfo.day2 : '',
            }
          }
          validationSchema={
            Yup.object({
              nameTour: Yup.string()
                .max(500, "Must be max 500 character or greater")
                .required('Required'),
              timer: Yup.string()
                .max(500, "Must be max 500 character or greater")
                .required('Required'),
              departureDay: Yup.string()
                .required('Required'),
              slotBlank: Yup.string()
                .required('Required'),
              money: Yup.string()
                .max(50, "Must be max 50 character or greater")
                .required('Required'),
              day1: Yup.string()
                .max(1000, "Must be max 1000 character or greater")
                .required('Required'),
              day2: Yup.string()
                .max(1000, "Must be max 1000 character or greater")
                .required('Required')

            })

          }

          onSubmit={
            async (values) => {

              console.log(storage.getRole());
              try {

                await TourApi.updateTour(
                  tourUpdateInfo.tourId,
                  values.nameTour,
                  values.timer,
                  values.departureDay,
                  values.slotBlank,
                  values.money,
                  values.img1 === null && values.img1 === undefined ? tourUpdateInfo.img1 : values.img1,
                  values.img2 === null && values.img2 === undefined ? tourUpdateInfo.img2 : values.img2,
                  values.img3 === null && values.img3 === undefined ? tourUpdateInfo.img3 : values.img3,
                  values.img4 === null && values.img4 === undefined ? tourUpdateInfo.img4 : values.img4,
                  values.img5 === null && values.img5 === undefined ? tourUpdateInfo.img5 : values.img5,
                  values.day1,
                  values.day2
                );
                // show notification
                showNotification('Update Tour', 'Update Tour Successfully!');
                //close modal
                setOpenModalUpdate(false);
                // Refresh form
                refreshForm();
              } catch (error) {
                setOpenModalUpdate(false);
                // redirect page error server 
                props.history.push("/auth/500");
              }
            }
          }
          validateOnChange={true}
          validateOnBlur={true}
        >
          {({ isSubmitting, setFieldValue }) => (

            <Form method="PUT" encType="multipart/form-data" action="/">
              <ModalHeader>Create Tour</ModalHeader>

              <ModalBody className=" m-3">
                <FormGroup>
                  <FastField
                    label="Name Tour"
                    bsSize="lg"
                    type="text"
                    name="nameTour"
                    placeholder="Name Customer"
                    component={ReactstrapInput}
                  />
                </FormGroup>
                <FormGroup>

                  <FastField
                    label="Thời Gian"
                    bsSize="lg"
                    type="text"
                    name="timer"
                    placeholder="Thời gian"
                    component={ReactstrapInput}
                  />
                </FormGroup>
                <FormGroup>

                  <FastField
                    label="Ngày Khởi Hành"
                    bsSize="lg"
                    type="date"
                    name="departureDay"
                    placeholder="Ngày khởi hành"
                    component={ReactstrapInput}
                  />
                </FormGroup>
                <FormGroup>

                  <FastField
                    label="Số chỗ trống"
                    bsSize="lg"
                    type="number"
                    name="slotBlank"
                    placeholder="Số chỗ trống"
                    component={ReactstrapInput}
                  />
                </FormGroup>
                <FormGroup>

                  <FastField
                    label="Giá"
                    bsSize="lg"
                    type="text"
                    name="money"
                    placeholder="Giá"
                    component={ReactstrapInput}
                  />
                </FormGroup>
                <FormGroup>

                  <FastField
                    label="Day 1"
                    bsSize="lg"
                    type="textarea"
                    name="day1"
                    placeholder="Lịch trình ngày 1"
                    rows="3"
                    component={ReactstrapInput}
                  />
                </FormGroup>
                <FormGroup>

                  <FastField
                    label="Day 2"
                    bsSize="lg"
                    type="textarea"
                    name="day2"
                    placeholder="Lịch trình ngày 2"
                    component={ReactstrapInput}
                  />
                </FormGroup>
                <label>Chọn ảnh</label><br></br>
                {/* img1 */}
                {/* <img
                  alt="Chris Wood"
                  src={previewImg1Url ? previewImg1Url :
                    (tourUpdateInfo.img1 ? `http://127.0.0.1:8887/img/${tourUpdateInfo.img1}` : avatar1)}
                  width="150"
                  height="100"
                /> */}
                <input type='file'
                  name='img1'
                  id='img1'
                  style={{ display: 'block' }}
                  onChange={(event) => { setFieldValue("img1", event.currentTarget.files[0]) }}

                /><br></br>

                {/* img2 */}
                {/* <img
                  alt="Chris Wood"
                  src={previewImg2Url ? previewImg2Url :
                    (tourUpdateInfo.img2 ? `http://127.0.0.1:8887/img/${tourUpdateInfo.img2}` : avatar1)}
                  width="150"
                  height="100"
                /> */}
                <input type='file'
                  name='img2'
                  id='img2'

                  onChange={(event) => { setFieldValue("img2", event.currentTarget.files[0]) }}
                  style={{ display: 'block' }}
                /><br></br>

                {/* img3 */}
                {/* <img
                  alt="Chris Wood"
                  src={previewImg3Url ? previewImg3Url :
                    (tourUpdateInfo.img3 ? `http://127.0.0.1:8887/img/${tourUpdateInfo.img3}` : avatar1)}
                  width="150"
                  height="100"
                /> */}
                <input type='file'
                  name='img3'
                  id='img3'

                  onChange={(event) => { setFieldValue("img3", event.currentTarget.files[0]) }}
                  style={{ display: 'block' }}
                /><br></br>

                {/* img4 */}
                {/* <img
                  alt="Chris Wood"
                  src={previewImg4Url ? previewImg4Url :
                    (tourUpdateInfo.img4 ? `http://127.0.0.1:8887/img/${tourUpdateInfo.img4}` : avatar1)}
                  width="150"
                  height="100"
                /> */}
                <input type='file'
                  name='img4'
                  id='img4'

                  onChange={(event) => { setFieldValue("img4", event.currentTarget.files[0]) }}
                  style={{ display: 'block' }}
                /><br></br>

                {/* img5 */}
                {/* <img
                  alt="Chris Wood"
                  src={previewImg5Url ? previewImg5Url :
                    (tourUpdateInfo.img5 ? `http://127.0.0.1:8887/img/${tourUpdateInfo.img5}` : avatar1)}
                  width="150"
                  height="100"
                /> */}
                <input type='file'
                  name='img5'
                  id='img5'

                  onChange={(event) => { setFieldValue("img5", event.currentTarget.files[0]) }}
                  style={{ display: 'block' }}
                />

              </ModalBody>

              <ModalFooter>

                <Button color="primary" type="submit" disabled={isSubmitting} >
                  Save
                </Button>{" "}

                <Button color='primary' onClick={() => setOpenModalUpdate(false)}>
                  Canle
                </Button>

              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>

    </>
  );
};

export default Posts;