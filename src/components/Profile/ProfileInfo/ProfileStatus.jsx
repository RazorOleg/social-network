import React, { useEffect } from 'react';
import { useState } from 'react';

const ProfileStatus = (props) => {
    const [isEditMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);


    useEffect(() => {
        // Оновлення локального стану, коли props.status змінюється
        setStatus(props.status);
    }, [props.status]);

    const toggleEditMode = () => {
        setEditMode(!isEditMode);

        if (isEditMode) {
            // Передавання оновленого статусу при виході з режиму редагування
            props.updateUserStatus(status);
        }
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {
                !isEditMode &&
                <div>
                    <span onDoubleClick={() => { toggleEditMode() }}>{props.status}</span>
                </div>
            }
            {
                isEditMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={() => { toggleEditMode() }} value={status}/>
                </div>
            }
        </div>
    );
};

export default ProfileStatus;