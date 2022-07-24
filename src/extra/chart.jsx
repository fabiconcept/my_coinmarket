import React from 'react';
import { Line} from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";

const Chart = ({data}) => {
    return (
        <section className="chart">
            <Line data={data} />
        </section>
    )
}

export default Chart;