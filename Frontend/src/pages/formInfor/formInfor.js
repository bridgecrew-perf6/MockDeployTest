import React, { useState } from "react";
import {
    Button,
    Card,
    Col,
    CardBody,
    FormGroup,
    CardTitle,
    CardHeader,
    CustomInput,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
  
} from "reactstrap";
import { FastField, Form, Formik } from "formik";
import { ReactstrapInput } from "reactstrap-formik";
import * as Yup from 'yup';
import CustomerApi from "../../api/CustomerApi";
import { withRouter } from "react-router-dom";
import anh2 from "../../assets/img/anh2.jpg";
import anh1 from "../../assets/img/anh1.jpg";
import * as Icon from 'react-feather';
const LeftForm = () => (
    <div style={{ backgroundColor: 'white' ,float:'left'}}>
        <p style={{ textAlign: 'center', fontSize: '20px', color: '#ed0080' }}>Du lịch Mộc Châu - Tam Đảo - Ba Vì - Hạ Long</p>

        <p style={{ fontSize: '30px', textAlign: 'center' }}>Du lịch trong nước</p>
        <div style={{ lineHeight: '10px', textAlign: 'center' }}>
            <Icon.Mail className="align-middle mr-2" size={10} display='inline-block' />
            <p style={{ fontSize: '15px', display: 'inline-block', lineHeight: '10px' }}>dulichviet@gmail.com</p>
            <br />
            <Icon.Phone className="align-middle mr-2" size={10} display='inline-block' />
            <p style={{ fontSize: '15px', display: 'inline-block', lineHeight: '10px' }}>fax: 113</p>
            <br /><br />
        </div>
        <div style={{ textAlign: 'center' }}>
            <Icon.Smartphone className="align-middle mr-2" style={{ size: '24px', display: 'inline-block', lineHeight: '30px' }} />
            <p style={{ display: 'inline-block', lineHeight: '30px', fontSize: '30px' }}>0123.456.789<br />0989.999.999</p>
        </div>
        <div>
            <img src={anh2} style={{ width: '500px', height: '499px' }} />
        </div>
    </div>
);

const SignUp3 = (props) => {

    const [isOpenModal, setOpenModal] = useState(false);

    return (
        <>
           

            <Col className=".col-md-4"  >
                <LeftForm />
            </Col>
            <Col className=".col-md-4" >
                <Formik
                    initialValues={
                        {
                            customerName: '',
                            email: '',
                            date: '',
                            phone: '',
                            address: '',
                            note: ''
                        }
                    }
                    validationSchema={
                        Yup.object({
                            customerName: Yup.string()
                                .max(20, 'Must be less than 50 characters')
                                .required('Required'),

                            email: Yup.string()
                                .email('Invalid email address')
                                .required('Required'),

                            phone: Yup.string()
                                .min(10, '10 số bạn ơi')
                                .max(10, '10 số bạn ơi')
                                .required('Required'),

                            address: Yup.string()
                                .max(300, 'Must be less than 300 characters')
                                .required('Required'),

                            note: Yup.string()
                                .required('Required'),

                            date: Yup.string()
                                .required('Required')
                        })
                    }

                    onSubmit={
                        async (values) => {
                            try {
                                // call api
                                await CustomerApi.create(
                                    values.customerName,
                                    values.email,
                                    values.date,
                                    values.phone,
                                    values.address,
                                    values.note,

                                );
                                setOpenModal(true);

                            } catch (error) {
                                // redirect page error server
                                props.history.push("/auth/500");
                            }
                        }
                    }
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                    {({ isSubmitting }) => (
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h5">Form thông tin khách hàng</CardTitle>
                                <h6 className="card-subtitle text-muted">
                                    Đừng bỏ trống <sub style={{ color: 'red', display: 'inline' }}>*</sub>
                                </h6>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <FastField
                                            label="Name"
                                            bsSize="lg"
                                            type="text"
                                            name="customerName"
                                            placeholder="Name Customer"
                                            component={ReactstrapInput}
                                        />
                                    </FormGroup>
                                    {/* email */}
                                    <FormGroup>
                                        <FastField
                                            label="Email"
                                            bsSize="lg"
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            component={ReactstrapInput}
                                        />
                                    </FormGroup>

                                    {/* email */}
                                    <FormGroup>
                                        <FastField
                                            label="Date"
                                            bsSize="lg"
                                            type="date"
                                            name="date"
                                            placeholder="Enter your date"
                                            component={ReactstrapInput}
                                        />
                                    </FormGroup>
                                    {/* email */}
                                    <FormGroup>
                                        <FastField
                                            label="Phone"
                                            bsSize="lg"
                                            type="tell"
                                            name="phone"
                                            placeholder="Enter your phone"
                                            component={ReactstrapInput}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <FastField
                                            label="Địa chỉ"
                                            bsSize="lg"
                                            type="textarea"
                                            name="address"
                                            placeholder="Enter your đại chỉ"
                                            component={ReactstrapInput}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <FastField
                                            label="Note"
                                            bsSize="lg"
                                            type="textarea"
                                            name="note"
                                            placeholder="Enter your note"
                                            component={ReactstrapInput}
                                        />
                                    </FormGroup>
                                    <FormGroup style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <CustomInput display='inline' type="checkbox" id="checkbox" label="Check me out" style={{ margin: '20px' }} />
                                        <Button color="primary" type="submit" disabled={isSubmitting} style={{ margin: '20px' }}>Hoàn tất</Button>
                                    </FormGroup>
                                    {/*  */}

                                </Form>
                            </CardBody>
                        </Card>
                    )}
                </Formik>

            </Col>

            {/* </Container> */}

            <Modal isOpen={isOpenModal}>

                {/* header */}
                <ModalHeader>Gửi thông tin thành công</ModalHeader>


                <ModalBody className="m-3" style={{ fontSize: '30px', textAlign: 'center' }}><b>Cảm ơn bạn !<br /> Chúng tôi sẽ liên hệ lại sớm nhất</b><br />
                    <img src={anh1} style={{ width: '500px', height: '300px' }} />
                </ModalBody>
                {/* footer */}
                <ModalFooter>
                    <Button color="primary" onClick={() => setOpenModal(false)}>
                        OK
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
};

export default withRouter(SignUp3);
