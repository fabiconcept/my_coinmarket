import React from 'react';
import ViewCardMarket from '../extra/viewCardMarket';
import ViewCardTop from '../extra/viewCardTop';

const InfoCard = ({name, symbol,image, market_cap_change_percentage_24h, current_price, market_cap_rank, price_change_24h, market_cap, fully_diluted_valuation, total_supply, total_volume, circulating_supply, vol_market, max_supply}) => {
  return (
    <div className="infoCard">
      <ViewCardTop
        name = {name}
        symbol = {symbol}
        image = {image}
        current_price = {current_price}
        market_cap_rank = {market_cap_rank}
        price_change_24h = {price_change_24h}
      />
      <ViewCardMarket
        market_cap = {market_cap}
        fully_diluted_valuation = {fully_diluted_valuation}
        total_volume = {total_volume}
        symbol = {symbol}
        market_cap_change_percentage_24h={market_cap_change_percentage_24h}
        price_change_24h = {price_change_24h}
        circulating_supply = {circulating_supply}
        max_supply = {max_supply}
        total_supply = {total_supply}
        vol_market = {(total_volume/market_cap)}
      />
    </div>
  )
}

export default InfoCard;