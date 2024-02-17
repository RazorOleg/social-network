import { configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "../slice/dialogsSlice";
import postsReducer from "../slice/postsSlice";

const store = configureStore({
    reducer: {
        dialogs: dialogsReducer,
        posts: postsReducer
    }
});

export default store;