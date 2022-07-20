import React from 'react'
import { useSelector } from 'react-redux'
import SingleCard from '../extra/singleCard'

const MainList = () => {

    const data = useSelector(state => state.listing.list)
    let i = 1;

    return (
        <div className="MainList">
            <table>
                <thead>
                    <tr style={{ borderBottom: "1px solid rgba(184, 189, 206, 0.459)", borderTop: "1px solid rgba(184, 189, 206, 0.459)" }}>
                        <td style={{ fontWeight: "600" }}></td>
                        <td style={{ fontWeight: "600" }}>#</td>
                        <td style={{ fontWeight: "600", textAlign: "left" }}>Name</td>
                        <td style={{ fontWeight: "600" }}>Price</td>
                        <td className='dsk' style={{ fontWeight: "600" }}>High (24h)</td>
                        <td className='dsk' style={{ fontWeight: "600" }}>Low (24h)</td>
                        <td className='' style={{ fontWeight: "600" }}>(24h) %</td>
                        <td className='dsk' style={{ fontWeight: "600" }}>Market cap</td>
                        <td className='dsk' style={{ fontWeight: "600" }}>Volume(24h)</td>
                        <td className='dsk' style={{ fontWeight: "600" }}>Circulating supply</td>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(item=>(
                        <SingleCard
                            key={item.id}
                            name={item.name}
                            image={item.image}
                            symbol={item.symbol}
                            sn = {i++}
                            current_price={item.current_price}
                            market_cap={item.market_cap}
                            circulating_supply={item.circulating_supply}
                            total_volume={item.total_volume}
                            price_change_percentage_24h={item.price_change_percentage_24h}
                            high_24h={item.high_24h}
                            low_24h={item.low_24h}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MainList