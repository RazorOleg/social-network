import { createSelector } from "reselect";

const getUsers = (state) => {
    return state.usersPage.users;
}

export const getAllUsers = createSelector(
    [getUsers],
    (users) => {return users.filter(user => true)} //only for example
) 

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
    
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getSizePage = (state) => {
    return state.usersPage.sizePage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching    
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
