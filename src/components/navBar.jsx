import React from 'react';
import Suggestion from '../extra/suggestion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

/* A function that returns a div with the class name of navArea. */
const NavBar = () => {
    const [find, setFind]= useState("")
    return (
        /* Returning a div with the class name of navArea. */
        <div className="navArea">
            <div className="stay">
            <Link to="/"><div className="logo"><img src="https://static.coingecko.com/s/coingecko-logo-63f24b60e1d2d526c141fee733ad2a39fbce7dabedd187a0dba95220396ce9a0.png" alt="" /></div></Link>
            {/* <FontAwesomeIcon icon={faMoon}/> */}
            <div className="searcgBar"><input type="text" value={find} onChange={(e)=>setFind(e.target.value)} placeholder='Search cryptocurrency' className="textBox" /></div>
            </div>
            <Suggestion
                find = {find}
                setFind ={setFind}
            />
        </div>
    )
}

export default NavBar