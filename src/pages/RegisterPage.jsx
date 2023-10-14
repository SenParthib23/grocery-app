import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';

const RegisterPage = () => {

    const [requestResponse, setRequestResponse] = useState({
        textMessage: '',
        alertClass: ''
    })

    const initialValues = {
        firstName: '',
        email: '',
        mobile: '',
        password: ''
    }

    const onSubmit = (values) => {
        axios.post('https://orca-app-jhg4l.ondigitalocean.app/api/auth/register', values)
            .then((response) => {
                setRequestResponse({
                    textMessage: response.data.message,
                    alertClass: 'alert alert-success'
                })
            }, (error) => {
                setRequestResponse({
                    textMessage: error.response.data.message,
                    alertClass: 'alert alert-danger'
                })
            })
            .catch((error) => console.log(error))
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('first name is required'),
        email: Yup.string().required('email is required').email('email should be valid'),
        mobile: Yup.string().required('mobile is required'),
        password: Yup.string().required('password is required').min(6, "password must be 6 character long")
    })

    // on validation
    // const validate = (values) => {
    //     let errors = {};
    //     if(!values.firstName){
    //         errors.firstName = 'first name is required'
    //     }
    //     if(!values.email){
    //         errors.email = 'email is required'
    //     }else if(
    //         !/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    //     ){
    //         errors.email = 'email is not valid'
    //     }
    //     if(!values.mobile){
    //         errors.mobile = 'mobile is required'
    //     }
    //     if(!values.password){
    //         errors.password = 'password is required'
    //     }
    //     return errors;
    // }

    const formik = useFormik({
        initialValues,
        onSubmit,
        //validate,
        validationSchema,
        validateOnMount: true
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="wrapper">
                        <div class={requestResponse.alertClass} role="alert">
                            {requestResponse.textMessage}
                        </div>
                        <h2>Register</h2>
                        <hr />
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" name="firstName"
                                    className={formik.touched.firstName && formik.errors.firstName ? 'form-control is-invalid' : 'form-control'}
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} />
                                {formik.errors.firstName && formik.touched.firstName ? (
                                    <small className='text-danger'>{formik.errors.firstName}</small>
                                ) : null}
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" name='email'
                                    className={formik.touched.email && formik.errors.email ? 'form-control is-invalid' : 'form-control'}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} />
                                {formik.errors.email && formik.touched.email ? (
                                    <small className='text-danger'>{formik.errors.email}</small>
                                ) : null}
                            </div>

                            <div className="form-group">
                                <label>Mobile</label>
                                <input type="text" name='mobile'
                                    className={formik.touched.mobile && formik.errors.mobile ? 'form-control is-invalid' : 'form-control'}
                                    value={formik.values.mobile}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} />
                                {formik.errors.mobile && formik.touched.mobile ? (
                                    <small className='text-danger'>{formik.errors.mobile}</small>
                                ) : null}
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name='password'
                                    className={formik.touched.password && formik.errors.password ? 'form-control is-invalid' : 'form-control'}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} />
                                {formik.errors.password && formik.touched.password ? (
                                    <small className='text-danger'>{formik.errors.password}</small>
                                ) : null}
                            </div>

                            <input type="submit" value="Register" disabled={!formik.isValid} className="btn btn-primary btn-block" />
                        </form>
                        <br />
                        <p className="text-center">
                            Already Registerd? <Link to="/login">Click Here</Link>
                        </p>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}
export default RegisterPage;