import React from 'react';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ViewCardTop = ({name, symbol,image, current_price, market_cap_rank, price_change_24h}) => {
    function formatMoney(n) {
        return (n.toLocaleString());
    }


    return (
        <div className="top mx-2">
            <div className="left">
                <section className='data'>
                    <img src={image} alt="" />
                    <span className='bold'>{name}</span>
                    <span>{symbol}</span>
                    {/* <div className="ico"><FontAwesomeIcon icon={faStar} /> </div> */}
                </section>
                <section>
                    <span>Rank #{market_cap_rank}</span>
                    <span>on 3,346,006 watchlist</span>
                </section>
            </div>
            <div className="right">
                <p>{name} price ({symbol.toUpperCase()})</p>
                <div className="data">
                    <p className="bold">₦{formatMoney(current_price)}</p>
                    <span className={`${price_change_24h > 0 ? 'infoUp' : 'infoDown'}`}>{price_change_24h > 0 ? <FontAwesomeIcon icon={faAngleUp} className='i' />: <FontAwesomeIcon icon={faAngleDown} className='i' />} {Math.abs(price_change_24h.toFixed(2))}%</span>
                </div>
            </div>
        </div>
    )
}

export default ViewCardTop