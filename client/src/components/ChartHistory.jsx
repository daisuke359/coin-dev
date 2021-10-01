import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Chart, ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip } from 'chart.js';
import { historyOptions } from '../config/chartConfig';
import 'chartjs-adapter-moment';
const ChartCanvas = styled.canvas`
`;

Chart.register( ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController,PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip);

export default function ChartHistory({data}) {

    const chartRef = useRef();
    const {day, month, year, detail} = data;
    const [dateFormat, setDateFormat] = useState("1 Day");
    const [chart, setChart] = useState();

    const getDateFormat = () => {
        switch (dateFormat) {
            case "1 Day":
              return day;
            case "1 Month":
              return month;
            case "1 Year":
              return year;
            default:
              return day;
        }
    }

    useEffect(() => {
        if(detail) {
    
            if(chart) {
                chart.destroy();
            }
    
            const newChart = new Chart(chartRef.current, {
                type: "line",
                data: {
                    datasets: [
                        {
                            label: ` ${dateFormat} Price Change`,
                            data: getDateFormat(),
                            fill: true,
                            backgroundColor: "rgba(111, 139, 250, 0.7)",
                            borderColor: "rgba(111, 139, 250, 0.8)",
                            pointRadius: 0,
                            borderWidth:2,
                        }
                    ]
                }, 
                options: {
                    ...historyOptions,
                }
            });
            setChart(newChart);
        }

    }, [dateFormat, data]);

    const DateTabs = styled.ul`
        display: flex;
        list-style-type: none;
        padding: 4px 5px;
        margin: 0 0 20px auto;
        background-color: #eff2f5;
        border-radius: 5px;
        width: fit-content;
        text-align: right;

        li {
            font-size: 0.8em;
            padding: 3px 5px;
            margin-right: 3px;
            margin-left: 3px;
            background-color: white;
            border-radius: 3px;
            cursor: pointer;

            &:hover {
                background-color: #808A9D;
                color: white;
            }
        }

        .list-day {
            background-color: ${dateFormat === "1 Day" ? "#808A9D" : "white"};
            color: ${dateFormat === "1 Day" ? "white" : "black"};
        }

        .list-month {
            background-color: ${dateFormat === "1 Month" ? "#808A9D" : "white"};
            color: ${dateFormat === "1 Month" ? "white" : "black"};
        }

        .list-year {
            background-color: ${dateFormat === "1 Year" ? "#808A9D" : "white"};
            color: ${dateFormat === "1 Year" ? "white" : "black"};
        }

    `;


    return (
        <div>
        {detail &&
            <>
                <DateTabs>
                    <li className="list-day" onClick={() => setDateFormat("1 Day")}>1D</li>
                    <li className="list-month" onClick={() =>setDateFormat("1 Month")}>1M</li>
                    <li className="list-year" onClick={() =>setDateFormat("1 Year")}>1Y</li>
                </DateTabs>
                <ChartCanvas ref={chartRef}></ChartCanvas>
            </>
        }
        </div>
        
    )

}
