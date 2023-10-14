import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { Link } from 'react-router-dom';

const LoginPage = () => {

    const [requestResponse, setRequestResponse] = useState({
        textMessage: '',
        alertClass: ''
    })

    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = (values) => {
        axios.post('https://orca-app-jhg4l.ondigitalocean.app/api/auth/login', values)
        .then((response) => {
            setRequestResponse({
                textMessage: "login successfull, thank you",
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
        email: Yup.string().required('email is required').email('email should be valid'),
        password: Yup.string().required('password is required').min(6, 'password should be 6 character long')
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
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
                        <h2>Login</h2>
                        <hr />
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" value={formik.values.email}
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={formik.touched.email && formik.errors.email ? 'form-control is-invalid' : 'form-control'} />
                                {formik.touched.email && formik.errors.email ? <small className='text-danger'>{formik.errors.email}</small> : null}
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={formik.touched.password && formik.errors.password ? 'form-control is-invalid' : 'form-control'} />
                                {formik.touched.password && formik.errors.password ? <small className='text-danger'>{formik.errors.password}</small> : null}
                            </div>
                            <input type="submit" value="Login" disabled={!formik.isValid} className="btn btn-primary btn-block" />
                        </form>
                        <br />
                        <p className="text-center">
                            New Users? <Link to="/register">Click Here</Link>
                        </p>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}
export default LoginPage;