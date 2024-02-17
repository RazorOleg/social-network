import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const mapStateToPropsForRedirect = (state) => {
    return ({
        isAuth: state.auth.isAuth
    });
}

export const withAuthRedirect = (Component) => {

    const WithAuthRedirect = (props) => {

        //const isAuth = useSelector((state) => state.auth.isAuth);

        if (!props.isAuth) {
            return <Navigate to='/login' />
        }

        return <Component {...props} />

    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(WithAuthRedirect);

    return ConnectedAuthRedirectComponent;
};