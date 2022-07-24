import React from 'react';
import TrendingCard from '../extra/trendingCard';
import { useSelector } from "react-redux";
import ScrollContainer from 'react-indiana-drag-scroll';

const Trending = () => {
  const data = useSelector(state => state.trendList.trendList.coins);
  return (
    <div className="ted pb-3">
      <p className="h6 px-3">Trending</p>
      <ScrollContainer className="trending">
        {data && data.map(item => (
          <TrendingCard
            key={item.item.coin_id}
            id={item.item.id}
            logo={item.item.large}
            name={item.item.name}
            symbol={item.item.symbol}
            score={item.item.score}
            price={item.item.price_btc}
          />
        ))}
      </ScrollContainer>
    </div>
  )
}

export default Trending