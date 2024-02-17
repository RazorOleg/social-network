import dialogsReducer from "./reducers/dialogs-reducer";
import profileReducer from "./reducers/profile-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [{ id: 1, message: "What's up?", likesCount: 0 }, { id: 2, message: "I'm good", likesCount: 12 }],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [{ id: 1, name: 'Oleg' }, { id: 2, name: 'Anton' }],
            messages: [{ id: 1, message: 'Hi' }, { id: 2, message: 'Hello' }],
            newMessageText: ''
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;