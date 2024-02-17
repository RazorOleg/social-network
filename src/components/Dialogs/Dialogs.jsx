import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { useSelector } from 'react-redux';


const Dialogs = (props) => {
    let dialogs = useSelector((state) => state.dialogsPage.dialogs);

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/>  );
   
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
        </div>
    );
};

const DialogsWithAuthRedirect = withAuthRedirect(Dialogs);

export default DialogsWithAuthRedirect;