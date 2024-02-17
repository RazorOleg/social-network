import React from 'react';
import s from './User.module.css';
import userPhoto from '../../../assets/photos/user.png';
import { NavLink } from 'react-router-dom';

const User = ({user, ...props}) => {
    return (
        <div className={s.container}>
            <div className={s.photo}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='' />
                </NavLink>
                <div>
                    {user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.unFollowUser(user.id);
                        }}>Unfollow</button>
                        : <button  disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.followUser(user.id);
                        }}>Follow</button>}
                </div>
            </div>
            <div className={s.infoContainer}>
                <div className={s.info}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div className={s.info}>
                    <div>City</div>
                    <div>Country</div>
                    {/* <div>{props.location.cityName}</div> */}
                    {/* <div>{props.location.countryName}</div> */}
                </div>
            </div>
        </div>
    );
};

export default User;