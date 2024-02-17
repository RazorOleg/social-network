import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuthUserData } from './../../redux/reducers/auth-reducer';

const HeaderContainer = (props) => {
    useEffect(() => {
        props.getAuthData();
    }, []);

    return (
        <Header {...props} />
    );
}

const mapStateToProps = (state) => {
    return ({
        auth: state.auth
    });
}

export default connect(mapStateToProps, { getAuthData: getAuthUserData })(HeaderContainer);

