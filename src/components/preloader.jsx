import React from 'react'
import { useState } from 'react';

const Preloader = () => {
    const [cl, setCl] = useState("");
    const [clist, setClist] = useState("");

    setTimeout(() => {
        setCl('pre 1s linear');
        setTimeout(() => {
            setClist("leave");
        }, 900);
    }, 2000);
    return (
        <div id='pre' className={`preload ${clist}`} style={{animation: ` ${cl}`}}>
            <div className="pImg">
                <img src="img/preload.gif" alt="" />
            </div>
        </div>
    )
}

export default Preloader