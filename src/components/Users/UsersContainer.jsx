import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { requestUsers, onPageChanged, unFollow, follow } from './../../redux/reducers/users-reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getAllUsers, getCurrentPage, getFollowingInProgress, getIsFetching, getSizePage, getTotalUsersCount} from '../../redux/selectors/users-selectors';


class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, sizePage} = this.props;
        
        this.props.requestUsers(currentPage, sizePage);
    }

    render() {
        // console.log('RENDER');

        return <> {this.props.isFetching && <Preloader />}
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                usersCount={this.props.usersCount}
                sizePage={this.props.sizePage}
                followingInProgress={this.props.followingInProgress}
                followUser={this.props.follow}
                unFollowUser={this.props.unFollow}
                onPageChanged={this.props.onPageChanged}
            />
        </>

    }
}

const mapStateToProps = (state) => {
    // console.log('MAP_STATE_TO_PROPS');
    return ({
        users: getAllUsers(state),
        currentPage: getCurrentPage(state),
        usersCount: getTotalUsersCount(state),
        sizePage: getSizePage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    });
}

// const mapdispatchToProps = (dispatch) => {
//     return ({
//         followUser: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unFollowUser: (userId) => {
//             dispatch(unFollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setTotalUsersCount: (count) => {
//             dispatch(setTotalUsersCountAC(count));
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     });
// }

export default compose(
    connect(mapStateToProps,
        {
            follow,
            unFollow,
            onPageChanged,
            requestUsers
        }),
    withAuthRedirect    
)(UsersContainer);


