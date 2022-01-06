import { Formik, Form, FastField } from "formik";
import React, { useState } from "react";
import { ReactstrapInput } from "reactstrap-formik"
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import LoginApi from "../../api/LoginApi";
import { withRouter } from "react-router";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  CustomInput,

} from "reactstrap";

// import avatar from "../../assets/img/avatars/avatar.jpg";
import storage from "../../Storage/Storage";
import { toastr } from "react-redux-toastr";
import { setUserLoginInfo } from "../../redux/actions/UserLoginInfoActions";
import { connect } from "react-redux";
// import axios from "axios";

const showErrorNotification = (title, message) => {
  const options = {
    timeOut: 3000,
    showCloseButton: false,
    progressBar: false,
    position: 'top-left'
  };
  // show notification
  toastr.error(title, message, options);
}

const SignIn = (props) => {

  // remember me
  const [checkedRememberMe, setCheckedRememberMe] = useState(storage.isRememberMe());

  return (
    <React.Fragment>
      <div className="text-center mt-4">
        <h2>Welcome to VTI Academy</h2>
        <p className="lead">Sign in to your account to continue</p>
      </div>

      <Formik
        initialValues={
          {
            username: '',
            password: '',
          }
        }
        validationSchema={
          Yup.object({
            username: Yup.string()
              .min(6, "Must be between 6-50 character or greater")
              .max(50, "Must be between 6-50 character or greater")
              .required('Required'),
            password: Yup.string()
              .min(6, "Must be between 6-50 character or greater")
              .max(50, "Must be between 6-50 character or greater")
              .required('Required'),
          })

        }
        onSubmit={
          async (values) => {
            try {

              // call api 
              const result = await LoginApi.login(

                values.username,
                values.password


              );

              // set remember me
              storage.setRememberMe(checkedRememberMe)

              // save user info to storage
              storage.setRole(result.role);
              storage.setUserInfo(
                result.username,
                result.email,
                result.firstName,
                result.lastName,
                result.role
              );

              // redirect to home page
              props.history.push("/private/formTourAll");
              // }
            } catch (error) {
              console.log(error);
              if (error.status === 401) {
                // redirect page error server 
                showErrorNotification('Login Faill !', 'Wrong Username or Password !');
              } else {
                props.history.push("/auth/500");
              }
            }
          }
        }
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ isSubmitting }) => (
          <Card>
            <CardBody>
              <div className="m-sm-4">
                <Form>
                  <FormGroup>
                    <FastField
                      label='User Name'
                      type='text'
                      bsSize="lg"
                      name="username"
                      placeholder="Enter your user name"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      label='Password'
                      type='password'
                      bsSize="lg"
                      name="password"
                      placeholder="Enter your password"
                      component={ReactstrapInput}
                    />


                  </FormGroup>

                  <div>
                    <CustomInput
                      type="checkbox"
                      id="rememberMe"
                      label="Remember me next time"
                      defaultChecked={checkedRememberMe}
                      onChange={() => setCheckedRememberMe(!checkedRememberMe)}
                    />
                  </div>
                  <div className="text-center mt-3">
                    <Button type='submit' disabled={isSubmitting} color="primary" size="lg">
                      Sign in
                    </Button>
                  </div>
                  <div style={{ textAlign: 'center', marginTop: '30px' }}>

                    <Link to="/auth/sign-up">Or Sign Up Using</Link>

                  </div>

                </Form>
              </div>
            </CardBody>
          </Card>
        )}
      </Formik>

    </React.Fragment >
  )
};


export default connect(null, { setUserLoginInfo })(withRouter(SignIn));
