import React from 'react';
import s from '../Profile.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/photos/user.png';
import { useSelector } from 'react-redux';

const ProfileInfo = ({ profile, status, updateUserStatus }) => {
    //const status = useSelector((state) => state.profilePage.status);

    if (!profile) {
        return <Preloader />
    }

    return (
        <div className={s.container}>
            <img src='https://www.topgear.com/sites/default/files/2022/07/13.jpg' alt='' />
            <img className={s.photoLarge} src={profile.photos.large ? profile.photos.large : userPhoto} alt='' />
            <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
            <h2>
                {profile.fullName}
            </h2>
            <h3>
                {profile.aboutMe}
            </h3>
        </div>
    );
}

export default ProfileInfo;