import React from "react";
import {
    Button,
    Row,
    Col,
    InputGroupAddon
} from "reactstrap";
import { selectSearch } from "../../redux/Selectors/GroupSelectors";
import { connect } from "react-redux";
import { Formik, Form, FastField } from "formik";
import { ReactstrapInput } from "reactstrap-formik"


const CustomSearch = (props) => {

    return (
        <Formik
            enableReinitialize
            initialValues={
                {
                    search: props.search ? props.search : '',
                }
            }

            onSubmit={
                values => {
                    props.onSearch(values.search);
                }
            }
        >

            <Form>
                <Row style={{ alignItems: 'center' }}>
                    <Col lg='8'>
                        <FastField
                            type='text'
                            bsSize="lg"
                            name="search"
                            placeholder="Search for..."
                            component={ReactstrapInput}
                        />
                    </Col>
                    <Col xs='auto'>
                        <InputGroupAddon addonType="append" color="primary">
                            <Button type='submit'>Search</Button>
                        </InputGroupAddon>
                    </Col>
                </Row>
            </Form>

        </Formik>

    );
}

const mapGlobalStateToProps = state => {
    return {
        search: selectSearch(state),
    }
};

export default connect(mapGlobalStateToProps)(CustomSearch);