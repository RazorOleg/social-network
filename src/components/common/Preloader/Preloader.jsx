import React from 'react';
import preloader from '../../../assets/photos/preloader.svg';
import s from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className={s.container}>
            <img src={preloader} alt='' />
        </div>
    );
};

export default Preloader;