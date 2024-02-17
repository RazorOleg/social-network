import { ADD_MESSAGE } from "../actions/actions";

let initialState = {
    dialogs: [{ id: 1, name: 'Oleg' }, { id: 2, name: 'Anton' }],
    messages: [{ id: 1, message: 'Hi' }, { id: 2, message: 'Hello' }]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, { id: state.messages.length + 1, message: newMessage }]
            }
        default:
            return state;
    }
};



export default dialogsReducer;