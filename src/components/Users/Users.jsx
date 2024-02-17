import React from 'react';
import User from './User/User';
import Paginator from '../common/Paginator/Paginator';


const Users = ({ usersCount, sizePage, currentPage, onPageChanged, ...props }) => {
    let users = props.users.map(u => <User
        key={u.id} user={u} unFollowUser={props.unFollowUser}
        followUser={props.followUser} followingInProgress={props.followingInProgress}
    />);

    return (
        <div>
            <Paginator totalItemsCount={usersCount} sizePage={sizePage} currentPage={currentPage} onPageChanged={onPageChanged} />
            <div>{users}</div>
        </div>
    );
};

export default Users;