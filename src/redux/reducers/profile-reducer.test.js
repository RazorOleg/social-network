import profileReducer from './profile-reducer';
import { addPost, deletePost } from '../actions/actions';


let state = {
    posts: [{ id: 1, message: "What's up?", likesCount: 0 }, { id: 2, message: "I'm good", likesCount: 12 }, { id: 3, message: "I'm good", likesCount: 12 }],
    profile: null,
    status: ''
}

it('length of posts should be incremented', () => {
    // 1. test data
    let newPostText = 'test';
    let action = addPost(newPostText);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expect
    expect(newState.posts.length).toBe(4);
});


it('message of new post should be correct', () => {
    // 1. test data
    let newPostText = 'test';
    let action = addPost(newPostText);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expect
    expect(newState.posts[3].message).toBe('test');
});


it('after deleting length of posts should be decrement', () => {
    // 1. test data
    let postId = 2;
    let action = deletePost(postId);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expect
    expect(newState.posts.length).toBe(2);
});