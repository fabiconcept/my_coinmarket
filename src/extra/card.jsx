import React from 'react'
import { Link } from 'react-router-dom';

const CardMain = ({ image, current_price, name }) => {
    function formatMoney(n) {
        return ((Math.round(n * 100) / 100).toLocaleString());
    }

    let money = formatMoney(current_price);
    return (
        <Link to={`/view/${name.toLowerCase()}`} className="spanCard">
            <img src={image} alt="" />
            <div className="text">
                <p className="h5 pt-3">{name}</p>
                <p style={{ marginTop: "-5px" }}>₦ {money}</p>
            </div>
        </Link>
    )
}

export default CardMain