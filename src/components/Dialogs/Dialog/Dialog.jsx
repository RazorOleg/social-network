import React from 'react';
import s from './../Dialogs.module.css';
import Message from "../Message/Message";
import AddTextForm from '../../common/AddTextForm/AddTextForm';

const Dialog = (props) => {
    let messages = props.state.messages;

    let messagesElements = messages.map(m => <Message message={m.message} key={m.id} />);

    let onAddMessage = (values) => {
        props.addMessage(values.newText);
    }

    return (
        <div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddTextForm onSubmit={onAddMessage} maxlength={10}/>
        </div>
    );
};

export default Dialog;

