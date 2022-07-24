import React from 'react';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ViewCardMarket = ({ market_cap_rank, market_cap_change_percentage_24h, price_change_24h, symbol, market_cap, fully_diluted_valuation, total_supply, total_volume, circulating_supply, vol_market, max_supply }) => {
  function formatMoney(n) {
    return (n.toLocaleString());
  }
  return (
    <div className="market">
      <div className="cap">
        <p className="h-nom">Market Cap</p>
        <p className="h-nom">₦{formatMoney(market_cap)}</p>
        {market_cap_change_percentage_24h > 0 ? <p className="h-nom mt-2 up" style={{ fontSize: ".8rem" }}><FontAwesomeIcon icon={faAngleUp} /> {(market_cap_change_percentage_24h).toFixed(2)}%</p> : <p className="h-nom mt-2 t-down" style={{ fontSize: ".8rem" }}><FontAwesomeIcon icon={faAngleDown} /> {(market_cap_change_percentage_24h).toFixed(2)}%</p>}
      </div>
      <div className="cap">
        <p className="h-nom">Fully Diluted Market Cap</p>
        <p className="h-nom">₦{fully_diluted_valuation > 0 ? formatMoney(fully_diluted_valuation) : " (Null)"}</p>
      </div>
      <div className="cap">
        <section>
          <p className="h-nom">Volume (24h)</p>
          <p className="h-nom">₦{formatMoney(total_volume)}</p>
        </section>
        <section>
          <p className="h-nom">Volume / Market Cap</p>
          <p className="h-nom">{vol_market.toFixed(4)}</p>
        </section>
      </div>
      <div className="cap">
        <section>
          <p className="h-nom">Circulating Supply</p>
          <p className="h-nom">{formatMoney(circulating_supply)} {symbol.toUpperCase()}</p>
          <br />
        </section>
        <section>
          <p className="h-nom"></p>
          <p className="h-nom">Max supply: {max_supply > 0 ?formatMoney(max_supply): " (Null)"}</p>
          <p className="h-nom">Total supply: {total_supply > 0 ? formatMoney(total_supply): " (Null)"}</p>
        </section>
      </div>
    </div>
  )
}

export default ViewCardMarket