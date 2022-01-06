import { Formik, Form, FastField } from "formik";
import React from "react";
import { ReactstrapInput } from "reactstrap-formik"
import * as Yup from 'yup';
import {
    Button,
    Row,
    Col,
    InputGroupAddon
} from "reactstrap";
import { selectMaxTotalMember, selectMinTotalMember } from "../../redux/Selectors/GroupSelectors";
import { connect } from "react-redux";

const CustomFilter = (props) => {

    return (
        <Formik
            enableReinitialize
            initialValues={
                {
                    minTotalMember: props.minTotalMember ? props.minTotalMember : '',
                    maxTotalMember: props.maxTotalMember ? props.maxTotalMember : ''
                }
            }
            validationSchema={
                Yup.object({
                    minTotalMember: Yup.number()
                        .positive("Must be greater than 0 and integer")
                        .integer("Must be greater than 0 and integer"),
                    maxTotalMember: Yup.number()
                        .positive("Must be greater than 0 and integer")
                        .integer("Must be greater than 0 and integer"),
                })

            }
            onSubmit={
                values => {
                    // this.props.onFilter(this.getValue());
                    props.handleChangeFilter(
                        values.minTotalMember,
                        values.maxTotalMember);

                }
            }
            validateOnChange={true}
            validateOnBlur={true}
        >

            <Form>
                <fieldset className='filter-border'>
                    <legend className='filter-border'>Filter</legend>
                    <div className='control-group'>
                        <Row style={{ alignItems: 'center' }}>
                            <Col lg='auto'>
                                <label style={{ marginTop: '10px' }}>Totol Member: </label>
                            </Col>
                            <Col lg='2'>
                                <FastField
                                    type='number'
                                    bsSize="lg"
                                    name="minTotalMember"
                                    placeholder="Min"
                                    component={ReactstrapInput}
                                />
                            </Col>
                            {" - "}
                            <Col lg='2'>
                                <FastField
                                    type='number'
                                    bsSize="lg"
                                    name="maxTotalMember"
                                    placeholder="Max"
                                    component={ReactstrapInput}
                                />
                            </Col>
                            <Col lg='2'>
                                <InputGroupAddon addonType="append" color="primary">
                                    <Button type='submit'>Filter</Button>
                                </InputGroupAddon>
                            </Col>
                        </Row>
                    </div>
                </fieldset>
            </Form>

        </Formik>
    );
}

const mapGlobalStateToProps = state => {
    return {
        minTotalMember: selectMinTotalMember(state),
        maxTotalMember: selectMaxTotalMember(state)
    }
};

export default connect(mapGlobalStateToProps)(CustomFilter);