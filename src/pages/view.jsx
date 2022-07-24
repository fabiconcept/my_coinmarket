import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Converter from '../components/converter';
import InfoCard from '../components/infoCard';
import SideInfo from '../components/sideInfo';
import Chart from '../extra/chart';
import { userData as chartData } from '../extra/data';
import { fetchChartData, fetchViewMain } from '../store/thunk/fetchList';

const View = () => {
    const dispatch = useDispatch();
    const date = new Date().getDay();
    const { id } = useParams();

    const [userData, setUserData] = useState({
        labels: chartData.map(item => item.year),
        datasets: [
            {
                label: "Gains",
                data: chartData.map(item => item.userGain),
                backgroundColor: ["rgb(238, 71, 20)"]
            },
            {
                label: "Users Lost",
                data: chartData.map(item => (item.userLoss)),
                backgroundColor: ["rgb(20, 238, 20)"]
            }
        ]
    });

    useEffect(() => {
        dispatch(fetchViewMain(id));
        dispatch(fetchChartData(id));
    }, [dispatch, id])

    const viewData = useSelector(state => state.view.mainData);
    const cDataPrice = useSelector(state => state.chart.data.prices)

    const [vData, setVData] = useState(viewData);
    const [chartInfo, setChartInfo] = useState([]);

    const createChartDetail = (arr) => {
        let i = 0;
        // let Now = ;
        let min = new Date().getMinutes();
        let hr = new Date().getHours();
        let chartDay;
        let fullChartInfo= [];
        arr.forEach(element => {
            i++
            min++
            
            if(min > 9 & hr > 9){
                chartDay = `${hr}:${min}`
            }else if(min > 9){
                chartDay = `0${hr}:${min}`
            }else if(hr > 9){
                chartDay = `${hr}:0${min}`
            }

            if (min === 60) {
                min = 0;
                hr++
            }
            if(hr === 24){
                hr = 0
            }
            fullChartInfo.push({id: i, day:chartDay, high: element[0], low: element[1]})
        });
        return fullChartInfo;
    }

    setTimeout(() => {
        setVData(viewData);
        setChartInfo(cDataPrice);
        const chartMain = createChartDetail(chartInfo);
        setUserData({
            labels: chartMain
                            .slice(0)
                            .reverse()
                            .map(item => item.day),
            datasets: [
                {
                    label: "₦",
                    data: chartMain.map(item => item.low),
                    borderColor: ["#0abfbc"]
                }
            ]
        })

    }, 20);

    
    return (
        <div className="view">
            {vData && vData.map(item => (
                <InfoCard
                    key={item.id}
                    name={item.name}
                    symbol={item.symbol}
                    image={item.image}
                    current_price={item.current_price}
                    price_change_24h={item.price_change_percentage_24h}
                    market_cap_rank={item.market_cap_rank}
                    market_cap={item.market_cap}
                    fully_diluted_valuation={item.fully_diluted_valuation}
                    total_volume={item.total_volume}
                    circulating_supply={item.circulating_supply}
                    max_supply={item.max_supply}
                    total_supply={item.total_supply}
                    market_cap_change_percentage_24h={item.market_cap_change_percentage_24h}
                    vol_market={(item.total_volume / item.market_cap)}
                />
            ))}
            {!vData && <p>Loading Data...</p>}
            <div className="chart-con">
                <section className="mainSec">
                    {vData && vData.map(item => (
                        <Converter
                            symbol={item.symbol}
                            name={item.name}
                            image={item.image}
                            current_price={item.current_price}
                        />))}
                    <Chart
                        data={userData}
                    />
                </section>
                <div className="side">
                    {vData && vData.map(item => (
                        <SideInfo
                            key={item.id}
                            name={item.name}
                            symbol={item.symbol}
                            image={item.image}
                            current_price={item.current_price}
                            price_change_24h={item.price_change_percentage_24h}
                            market_cap_rank={item.market_cap_rank}
                            market_cap={item.market_cap}
                            fully_diluted_valuation={item.fully_diluted_valuation}
                            total_volume={item.total_volume}
                            circulating_supply={item.circulating_supply}
                            max_supply={item.max_supply}
                            total_supply={item.total_supply}
                            high_24h={item.high_24h}
                            Low_24h={item.low_24h}
                            ath={item.ath}
                            ath_change_percentage={item.ath_change_percentage}
                            atl={item.atl}
                            atl_change_percentage={item.atl_change_percentage}
                            vol_market={(item.total_volume / item.market_cap)}
                        />
                ))}
                </div>
            </div>
        </div>
    )
}

export default View