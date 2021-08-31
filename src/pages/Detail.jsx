import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useParams} from "react-router";
import styled from 'styled-components';
import ChartDetail from '../components/ChartDetail';
import ChartHistory from '../components/ChartHistory';
import { Container } from '../GlobalStyles';

const DetailContainer = styled(Container)`
    width: 70%;
    margin: 50px auto;
    padding: 30px 60px;
    background-color: white;
    border-radius: 5px;
`;

export default function Detail() {

    const id = useParams().id;

    const [currencyData, setCurrencyData] = useState({});

    const formatData = (data) => {
        return data.map((el) => {
          return {
            x: el[0],
            y: el[1],
          };
        });
      };

    useEffect(() => {
        const getData = async () => {
        const [day, month, year, detail] = await Promise.all([
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/`, {
              params: {
                vs_currency: "cad",
                days: "1",
              },
            }),
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/`, {
              params: {
                vs_currency: "cad",
                days: "30",
              },
            }),
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart/`, {
              params: {
                vs_currency: "cad",
                days: "365",
              },
            }),
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}`),
        ]);
    
        setCurrencyData({
            day: formatData(day.data.prices),
            month: formatData(month.data.prices),
            year: formatData(year.data.prices),
            detail: detail.data,
        });

        };
    
        getData();
      }, [id]);


    return (
        <>
            <DetailContainer>
                <ChartDetail detail={currencyData.detail}/>
                <ChartHistory data={currencyData}/>
            </DetailContainer>
        </>
    )
}
