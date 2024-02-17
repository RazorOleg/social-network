export const ADD_POST = 'ADD-POST';
export const DELETE_POST = 'DELETE-POST';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_USER_STATUS = 'SET_USER_STATUS';
export const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
export const TOGGLE_FOLLOWING_IN_PROGERSS = 'TOGGLE_FOLLOWING_IN_PROGERSS';
export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })

export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const addMessage = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText })

export const followUser = (userId) =>
    ({ type: FOLLOW, userId })

export const unFollowUser = (userId) =>
    ({ type: UNFOLLOW, userId })

export const setUsers = (users) =>
    ({ type: SET_USERS, users })

export const setCurrentPage = (currentPage) =>
    ({ type: SET_CURRENT_PAGE, currentPage })

export const setTotalUsersCount = (usersCount) =>
    ({ type: SET_TOTAL_USERS_COUNT, usersCount })

export const toggleIsFetching = (isFetching) =>
    ({ type: TOGGLE_IS_FETCHING, isFetching })

export const setUserProfile = (profile) =>
    ({ type: SET_USER_PROFILE, profile })

export const setUserStatus = (status) =>
    ({ type: SET_USER_STATUS, status })

export const setAuthUserData = (data, isAuth) =>
    ({ type: SET_AUTH_USER_DATA, data, isAuth })

export const toggleFollowingInProgress = (isFollowing, userId) =>
    ({ type: TOGGLE_FOLLOWING_IN_PROGERSS, isFollowing, userId })


export const initializedSuccess = () =>
    ({ type: INITIALIZED_SUCCESS })