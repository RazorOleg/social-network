import { createSlice } from '@reduxjs/toolkit';

const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState: {
        dialogs: [{ id: 1, name: 'Oleg' }, { id: 2, name: 'Anton' }],
        messages: [{ id: 1, message: 'Hi' }, { id: 2, message: 'Hello' }],
        newMessageText: ''
    },
    reducers: {
        addMessageText: (state) => {
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
        },
        updateNewMessageText: (state, action) => {
            state.newMessageText = action.payload;
        }
    }
});

export const { addMessageText, updateNewMessageText } = dialogsSlice.actions;

export default dialogsSlice.reducer;