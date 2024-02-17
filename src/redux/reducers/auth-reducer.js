import { authAPI } from "../../api/api";
import { SET_AUTH_USER_DATA, setAuthUserData } from "../actions/actions";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }
        default:
            return state;
    }
};


export const getAuthUserData = () => {
    return async (dispatch) => {
        let data = await authAPI.getAuthData();

        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data, true));
        }
    }
}


export const login = (data, setError) => {
    return async (dispatch) => {
        let response = await authAPI.login(data);

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            const errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Something went wrong.';
            setError(errorMessage);
        }

    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout();
        
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData({
                email: null,
                id: null,
                login: null
            }, false));
        }
    }
}


export default authReducer;