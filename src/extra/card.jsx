import React from 'react'

const CardMain = ({ image, current_price, name }) => {
    function formatMoney(n) {
        return ((Math.round(n * 100) / 100).toLocaleString());
    }

    let money = formatMoney(current_price);
    return (
        <div className="spanCard">
            <img src={image} alt="" />
            <div className="text">
                <p className="h5 pt-3">{name}</p>
                <p style={{ marginTop: "-5px" }}>₦ {money}</p>
            </div>
        </div>
    )
}

export default CardMain