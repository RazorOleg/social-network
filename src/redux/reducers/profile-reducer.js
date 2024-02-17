import { profileAPI } from "../../api/api";
import { ADD_POST, DELETE_POST, SET_USER_PROFILE, SET_USER_STATUS, setUserProfile, setUserStatus } from "../actions/actions";

let initialState = {
    posts: [{ id: 1, message: "What's up?", likesCount: 0 }, { id: 2, message: "I'm good", likesCount: 12 }],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newText = action.newPostText;
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    message: newText,
                    likesCount: 0
                }]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
};


export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfileByUserId(userId);
        dispatch(setUserProfile(data));
    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let status = await profileAPI.getStatusByUserId(userId);
        dispatch(setUserStatus(status));
    }
}

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateUserStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    }
}


export default profileReducer;