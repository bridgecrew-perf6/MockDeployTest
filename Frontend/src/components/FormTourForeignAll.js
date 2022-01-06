import React, { useEffect, useState } from "react";
import {
    Button,
    FormGroup,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row,

} from "reactstrap";

// import { connect } from "react-redux";
import * as Icon from 'react-feather';
import TourForeignApi from "../api/TourForeignApi";

import Pagination from "./Pagination";
import Posts from "./PostsTourForeignAll";

import { FastField, Form, Formik } from "formik";
import * as Yup from 'yup';
import { toastr } from "react-redux-toastr";
import { ReactstrapInput } from "reactstrap-formik";
// import { getListTourAction } from "../redux/actions/TourAction";
// import { selectPage, selectSelectedRows, selectSize, selectTotalSize, selectTours } from "../redux/Selectors/TourSelectors";

const FormTourForeignAll = (props) => {

    const Cards = () => {

        const [posts, setPosts] = useState([]);
        const [loading, setLoading] = useState(false);
        const [currentPage, setCurrentPage] = useState(1);
        const [postsPerPage] = useState(3);

        useEffect(() => {
            const getTourForeignList = async () => {
                setLoading(true);
                const result = await TourForeignApi.getListToursForeignAll();
                const tour = result.content;
                const totalSize = result.totalElements;
                console.log(result);
                setPosts(tour, 1, totalSize);
                console.log(tour);
                setLoading(false);
            }
            getTourForeignList();
        }, []);
        // Get current posts
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

        // Change page
        const paginate = pageNumber => setCurrentPage(pageNumber);
        return (
            <>
                <Posts posts={currentPosts} loading={loading} />
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                />
            </>
        )
    };

    //open modal create tours
    const [isOpenModalCreate, setOpenModalCreate] = useState(false);


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

    return (
        <div>
            <h2><b><label>TOUR DU LỊCH NƯỚC NGOÀI <Icon.PlusCircle size={32} onClick={() => setOpenModalCreate(true)} /></label></b></h2><br></br>
            <Row>
                <Cards />

            </Row>

            {/* Modal Create */}
            <Modal isOpen={isOpenModalCreate} >

                <Formik
                    initialValues={
                        {
                            nameTour: '',
                            timer: '',
                            departureDay: '',
                            slotBlank: '',
                            money: '',
                            img1: '',
                            img2: '',
                            img3: '',
                            img4: '',
                            img5: '',
                            day1: '',
                            day2: '',
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
                        // (values) => {
                        //     alert(
                        //         JSON.stringify(
                        //             {
                        //                 fileName: `${values.img1.name}`,
                        //                 type: `${values.img1.type}`,
                        //                 size: `${values.img1.size} bytes`
                        //             },
                        //         )
                        //     );
                        // }
                        async (values) => {

                            console.log('tourrr:' + values);
                            try {
                                await TourForeignApi.createTourForeign(
                                    values.nameTour,
                                    values.timer,
                                    values.departureDay,
                                    values.slotBlank,
                                    values.money,
                                    values.img1,
                                    values.img2,
                                    values.img3,
                                    values.img4,
                                    values.img5,
                                    values.day1,
                                    values.day2
                                );


                                // show notification
                                showNotification('Create Tour Foreign', 'Create Tour Foreign Successfully!');
                                //close modal
                                setOpenModalCreate(false);
                                // Refresh form
                                // refreshForm();
                            } catch (error) {
                                setOpenModalCreate(false);
                                // redirect page error server 
                                props.history.push("/auth/500");
                            }
                        }
                    }
                    validateOnChange={true}
                    validateOnBlur={true}
                >
                    {({ isSubmitting, setFieldValue }) => (

                        <Form method="POST" encType="multipart/form-data" action="/">
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
                                <input type='file'
                                    name='img1'
                                    id='img1'
                                    onChange={(event) => { setFieldValue("img1", event.currentTarget.files[0]) }}
                                    // style={{ display: 'none' }}
                                /><br></br>

                                {/* img2 */}
                                <input type='file'
                                    name='img2'
                                    id='img2'
                                    onChange={(event) => { setFieldValue("img2", event.currentTarget.files[0]) }}
                                /><br></br>

                                {/* img3 */}
                                <input type='file'
                                    name='img3'
                                    id='img3'
                                    onChange={(event) => { setFieldValue("img3", event.currentTarget.files[0]) }}
                                /><br></br>

                                {/* img4 */}
                                <input type='file'
                                    name='img4'
                                    id='img4'
                                    onChange={(event) => { setFieldValue("img4", event.currentTarget.files[0]) }}
                                /><br></br>

                                {/* img5 */}
                                <input type='file'
                                    name='img5'
                                    id='img5'
                                    onChange={(event) => { setFieldValue("img5", event.currentTarget.files[0]) }}
                                />
                            </ModalBody>

                            <ModalFooter>

                                <Button color="primary" type="submit" disabled={isSubmitting} >
                                    Save
                                </Button>{" "}

                                <Button color='primary' onClick={() => setOpenModalCreate(false)}>
                                    Canle
                                </Button>

                            </ModalFooter>
                        </Form>
                    )}
                </Formik>
            </Modal>

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
export default FormTourForeignAll;