import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserProfile, getUserStatus, updateUserStatus } from './../../redux/reducers/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


const ProfileContainer = (props) => {
    let { userId } = useParams();
    //const navigate = useNavigate();

    useEffect(() => {
        if (!userId) {
            userId = props.authorisedUserId;
            // if (!userId) {
            //     return navigate('/login');
            // }
        }
        
        props.getUserProfile(userId);
        props.getUserStatus(userId);
    }, [userId]);

    return (
        <Profile {...props} />
    );

}

const mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorisedUserId: state.auth.id
    });
}


export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
    withAuthRedirect
)(ProfileContainer);

