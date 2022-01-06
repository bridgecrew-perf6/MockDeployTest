import { Formik, Form, FastField } from "formik";
import React from "react";
import { ReactstrapInput } from "reactstrap-formik"
import * as Yup from 'yup';

import {
  Button,
  Card,
  CardBody,
  FormGroup
} from "reactstrap";
import UserApi from "../../api/UserApi";
import { useParams } from "react-router";
import { toastr } from "react-redux-toastr";

const NewPassword = (props) => {
  const { token } = useParams();

  if(!token){
    props.history.push("/auth/404");
  }

  const showNotification = (title, message) => {
    const options = {
      timeOut: 3000,
      showCloseButton: false,
      progressBar: false,
      position: 'top-left'
    };
    // show notification
    toastr.success(title, message, options);
  }

  const redirectToLogin = () => {
    props.history.push("/auth/sign-in");
  }

  return (
    <React.Fragment>
      <div className="text-center mt-4">
        <h1 className="h2">Reset password</h1>
        <p className="lead">Enter your new password.</p>
      </div>

      <Formik
        initialValues={
          {
            password: '',
            confirmPassword: ''
          }
        }
        validationSchema={
          Yup.object({
            password: Yup.string()
              .min(6, "Must be between 6-50 character or greater")
              .max(50, "Must be between 6-50 character or greater")
              .required('Required'),
            confirmPassword: Yup.string()
              .required('Required')
              .when('password', {
                is: value => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                  [Yup.ref("password")],
                  "Password need to match"
                )
              })
          })

        }
        onSubmit={
          async (values) => {
            try {
              // call api 
              await UserApi.resetPassword(token, values.password);
              //message
              showNotification('Reset Password', 'Reset Password Successfuly');

              // redirect to login
              redirectToLogin();
            } catch (error) {
              // redirect page error server 
              props.history.push("/auth/500");
            }
          }
        }
      >
        {({ isSubmitting }) => (
          <Card>
            <CardBody>
              <div className="m-sm-4">
                <Form>

                  <FormGroup>
                    <FastField
                      label='Password'
                      type='password'
                      bsSize="lg"
                      name="password"
                      placeholder="Enter new password"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <FormGroup>
                    <FastField
                      label='Confirm Password'
                      type='password'
                      bsSize="lg"
                      name="confirmPassword"
                      placeholder="Enter your confirm new password"
                      component={ReactstrapInput}
                    />
                  </FormGroup>

                  <div className="text-center mt-3">
                    <Button type='submit' color="primary" disabled={isSubmitting} size="lg">
                      Reset password
                    </Button>
                  </div>
                </Form>
              </div>
            </CardBody>
          </Card>
        )}
      </Formik>

    </React.Fragment>
  )
};

export default NewPassword;
