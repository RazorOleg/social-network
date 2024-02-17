import { usersAPI } from "../../api/api";
import { updateObjectInArray } from "../../utils/object-helpers";
import { FOLLOW, SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, SET_USERS, TOGGLE_FOLLOWING_IN_PROGERSS, TOGGLE_IS_FETCHING, UNFOLLOW, followUser, setCurrentPage, setTotalUsersCount, setUsers, toggleFollowingInProgress, toggleIsFetching, unFollowUser } from "../actions/actions";


let initialState = {
    users: [],
    sizePage: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    fake: 10
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FAKE': {
            return { ...state, fake: state.fake + 1 }
        }
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true} )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false} )
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IN_PROGERSS:
            return {
                ...state,
                followingInProgress: action.isFollowing ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
};

export const requestUsers = (currentPage, sizePage) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        let data = await usersAPI.getUsers(currentPage, sizePage);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}


export const onPageChanged = (page, sizePage) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, sizePage);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));

    }
}

const followUnFollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, userId));
    let data = await apiMethod;

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId));
}

export const unFollow = (userId) => {
    return async (dispatch) => {
        followUnFollowFlow(dispatch, userId, usersAPI.unFollowUser(userId), unFollowUser);
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnFollowFlow(dispatch, userId, usersAPI.followUser(userId), followUser);
    }
}


export default usersReducer;