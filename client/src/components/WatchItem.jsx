import React, {useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';

const CoinCard = styled.div`
    background-color: white;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 5%) 0px 4px 10px 3px;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    width: 25%;
    min-width: 260px;
    aspect-ratio: 5/3;

    a {
        color: black;
        height: 100%;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .coin-img {
        width: 30px;
        height: 30px;
    }

    .coin-name {
        font-size: 1.5rem;
    }

    .coin-symbol, .coin-percent {
        font-size: 0.8rem;
    }

    .coin-symbol {
        background-color: #eff2f5;
        padding: 4px 8px;
        border-radius: 8px;
    }

    .coin-price {
        font-size: 1.8rem;
    }

`;

const CoinTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


export default function WatchItem({coin}) {

    const [detail, setDetail] = useState();

    const CoinBottom = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        .coin-percent {
            color: white;
            border-radius: 5px;
            background-color: ${detail ? detail.market_data.price_change_percentage_24h >= 0 ? "#16C784" : "#EA3943" : "#eff2f5"};
            padding: 5px 12px;
            &:before {
                content: ${detail ? detail.market_data.price_change_percentage_24h >= 0 ? "+" : "" : ""};
            }
        }
        
    `;

    useEffect(() => {
        const getDetail = async () => {
            const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`);
            setDetail(res.data);
        }
        getDetail();
    }, []);

    return (
        <>
            {detail && 
                <CoinCard>
                    <Link to={`/detail/${detail.id}`}>
                        <img className="coin-img" src={detail.image.small} alt="" />
                        <CoinTop>
                            <span className="coin-name">{detail.name}</span>
                            <span className="coin-symbol">{detail.symbol.toUpperCase()}</span>
                        </CoinTop>
                        <CoinBottom>
                            <span className="coin-price"><NumberFormat value={detail.market_data.current_price.cad} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
                            <NumberFormat className="coin-percent" value={detail.market_data.price_change_percentage_24h} decimalScale={2} displayType={'text'} suffix={'%'} />
                        </CoinBottom>
                    </Link>
                </CoinCard>
            } 
        </> 
    )
}
