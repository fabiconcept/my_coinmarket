import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <div className="navArea">
            <div className="logo"><img src="img/coinmarketcap_1.svg" alt="" /></div>
            <FontAwesomeIcon icon={faMoon}/>
            <div className="searcgBar"><input type="text" name="" id="" placeholder='Search cryptocurrency' className="textBox" /></div>
        </div>
    )
}

export default NavBar