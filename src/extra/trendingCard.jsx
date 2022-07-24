import React from 'react'
import { Link } from 'react-router-dom';

const TrendingCard = ({name, price, symbol, score, logo, id}) => {

  let spl = name.split(" ");
  let word;
  switch (spl.length) {
    case 1:
      word = spl[0]
      break;
    default:
      word = spl[1]
      break;
  }
  return (
    <Link to={`/view/${id}`} className="trendingCard">
        <img src={`${logo}`} alt="" />
        <div className="text">
            <div className="status">
                <div className="rank"><span >{word}</span>: {symbol}</div>
                <div className="rank"><span>Rank</span>: {(score + 1)}</div>
                <div className="rank_price"><span>Price</span>: {(price).toFixed(10)}</div>
            </div>
        </div>
    </Link>
  )
}

export default TrendingCard