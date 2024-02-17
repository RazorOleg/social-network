import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [{ id: 1, message: "What's up?", likesCount: 0 }, { id: 2, message: "I'm good", likesCount: 12 }],
        newPostText: ''
    },
    reducers: {
        addPostText: (state) => {
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
        },
        updateNewPostText: (state, action) => {
            state.newPostText = action.payload;
        }
    }
});

export const { addPostText, updateNewPostText } = postsSlice.actions;

export default postsSlice.reducer;