import { INITIALIZED_SUCCESS, initializedSuccess } from "../actions/actions";
import { getAuthUserData } from "./auth-reducer";

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
};


export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData());

        promise.then(() => {
            dispatch(initializedSuccess());
        })
    }
}


export default appReducer;