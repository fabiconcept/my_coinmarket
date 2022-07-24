import React from 'react'

const SideInfo = ({ name, symbol, image, high_24h, Low_24h, current_price, ath, atl, atl_change_percentage, ath_change_percentage, market_cap_rank, price_change_24h, market_cap, fully_diluted_valuation, total_supply, total_volume, circulating_supply, vol_market, max_supply }) => {
    function formatMoney(n) {
        return (n.toLocaleString());
    }
    return (
        <div className="sideInfo">
            <p className="h5">{(symbol).toUpperCase()} Price Statistics</p>
            <span className="little">{name} price today</span>
            <ul>
                <li>
                    <span className="tag">{name} price</span>
                    <span className="tagInfo">₦{formatMoney(current_price)}</span>
                </li>
                <li>
                    <span className="tag">24h Low / 24h High</span>
                    <span className="tagInfo">₦{formatMoney(high_24h)} / ₦{formatMoney(Low_24h)}</span>
                </li>
                <li>
                    <span className="tag">Trading Volume</span>
                    <span className="tagInfo">₦{formatMoney(total_volume)}</span>
                </li>
                <li>
                    <span className="tag">Market Cap Rank</span>
                    <span className="tagInfo">#{market_cap_rank}</span>
                </li>
                <li>
                    <span className="tag">Market Cap</span>
                    <span className="tagInfo">₦{formatMoney(market_cap)}</span>
                </li>
                <li>
                    <span className="tag">Volume / Market Cap</span>
                    <span className="tagInfo">{(vol_market).toFixed(2)}</span>
                </li>
                <li>
                    <span className="tag">All-Time High</span>
                    <span className="tagInfo">₦{formatMoney(ath)}</span>
                </li>
                <li>
                    <span className="tag">All-Time Low</span>
                    <span className="tagInfo">₦{formatMoney(atl)}</span>
                </li>
            </ul>
        </div>
    )
}

export default SideInfo;

// Bitcoin Price Today
// Bitcoin Price	$22,337.29
// 24h Low / 24h High	$22,223.00 / $23,665.85
// 7d Low / 7d High	$20,799.24 / $24,160.26
// Trading Volume	$38,494,185,703
// Market Cap Rank	#1
// Market Cap	$426,665,884,481
// Market Cap Dominance	39.995%
// Volume / Market Cap	0.09
// All-Time High	$69,044.77 -67.7%
// Nov 10, 2021 (9 months)
// All-Time Low	$67.81 32839.3%