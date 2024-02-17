import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import s from './Login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/reducers/auth-reducer';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth);
    const [loginError, setError] = useState(null);

    const initialValues = {
        email: '',
        password: '',
        rememberMe: false,
        captcha: ''
    };

    const validate = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Required';
        }

        return errors;
    };


    const onSubmit = (data) => {
        setError(null);

        dispatch(login(data, (errorMessage) => setError(errorMessage)));
        // console.log('Form values submitted:', data);
    };
    

    if (isAuth) {
        return <Navigate to='/profile' />
    }

    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form className={s.loginForm}>
                        <div className={s.loginFormContainer}>
                            <div className={s.inputContainer}>
                                <label>Email:</label>
                                <Field type="email" name="email" className={`${s.inputField} ${errors.email && touched.email ? s.errorBorder : ''}`} />
                                <ErrorMessage name="email" component="div" className={s.error} />
                            </div>
                            <div className={s.inputContainer}>
                                <label>Password:</label>
                                <Field type="password" name="password" className={`${s.inputField} ${errors.password && touched.password ? s.errorBorder : ''}`} />
                                <ErrorMessage name="password" component="div" className={s.error} />
                            </div>
                            <div className={s.checkBoxContainer}>
                                <label>Remember me</label>
                                <Field type="checkbox" name="rememberMe" className={s.checkbox} />
                            </div>
                            <div>
                                {loginError && <div className={s.serverError}>{loginError}</div>}
                            </div>
                            <button type="submit" className={s.button}>Login</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;