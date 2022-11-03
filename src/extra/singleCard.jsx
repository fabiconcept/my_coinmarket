import React from 'react';
import { Link } from 'react-router-dom';



const SingleCard = ({id, current_price, sn, symbol, name, image, market_cap, circulating_supply, total_volume, price_change_percentage_24h, low_24h, high_24h }) => {
  

  function formatMoney(n) {
    return ((Math.round(n * 100) / 100).toLocaleString());
  }

  let money = formatMoney(current_price);
  let money_market_cap = formatMoney(market_cap);
  let money_circulating_supply = formatMoney(circulating_supply);
  let money_total_volume = formatMoney(total_volume);
  let money_high_24h = formatMoney(high_24h);
  let money_Low_24h = formatMoney(low_24h);

  
  return (
    <tr className="singleCard" style={{ borderBottom: "1px solid rgba(184, 189, 206, 0.159)" }}>
      {/* <td className={`icon ${symbol === "btc" | symbol === "eth" | symbol === "bnb" | symbol === "trx" ? "watch" : ""}`}><FontAwesomeIcon icon={faStar} /></td> */}
      <td>{sn}</td>
      <td className="">
        <Link to={`/view/${id}`} className='coinInfoMini'>
          <img src={image} alt="" />
          <div className="text">
            <span style={{ fontWeight: "600" }}>{name}</span>
            <span style={{ textTransform: "uppercase" }}>({symbol})</span>
          </div>
        </Link>
      </td>
      <td className="value">₦ {money}</td>
      <td className="hr dsk">₦ {money_high_24h}</td>
      <td className="hr dsk">₦ {money_Low_24h}</td>
      <td className={`${price_change_percentage_24h > 0 ? "up" : "loss"}`}>{(price_change_percentage_24h).toFixed(2)}%</td>
      <td className="value dsk">₦ {money_market_cap}</td>
      <td className="value dsk">₦ {money_total_volume}</td>
      <td className="value dsk">{money_circulating_supply} {symbol.toUpperCase()}</td>
    </tr>
  )
}

export default SingleCard;