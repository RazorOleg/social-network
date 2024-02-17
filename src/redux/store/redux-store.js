import { applyMiddleware, combineReducers, compose, createStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profile-reducer";
import dialogsReducer from "../reducers/dialogs-reducer";
import usersReducer from "../reducers/users-reducer";
import authReducer from "../reducers/auth-reducer";
import { thunk } from "redux-thunk";
import appReducer from "../reducers/app-reducer";

let reducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

window.store = store;

export default store;