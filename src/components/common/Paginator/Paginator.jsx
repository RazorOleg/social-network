import React from 'react';
import s from './Paginator.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Paginator = ({ totalItemsCount, sizePage, currentPage, onPageChanged, portionSize = 10 }) => {
    const [portionNumber, setPortionNumber] = useState(1);
    
    const pagesCount = Math.ceil(totalItemsCount / sizePage);

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const leftPortionBorder = (portionNumber - 1) * portionSize + 1;
    const rigthPortionBorder = portionNumber * portionSize;

    useEffect( () => {
        setPortionNumber(Math.ceil(currentPage / portionSize));
    }, [currentPage, portionSize]);

    return (
        <div>
            {
                portionNumber > 1 && <button onClick={ ()=> {setPortionNumber(portionNumber - 1)}}>Prev</button>
            }
            {pages
            .filter(p => p >= leftPortionBorder && p <= rigthPortionBorder)
            .map((p, i) => {
                return <span key={i} className={currentPage === p ? s.selected : s.notSelected}
                    onClick={() => { onPageChanged(p, sizePage) }}> {p} </span>
            })}
            {
                portionCount > portionNumber && <button onClick={ ()=> {setPortionNumber(portionNumber + 1)}}>Next</button>
            }
        </div>
    );
};

export default Paginator;