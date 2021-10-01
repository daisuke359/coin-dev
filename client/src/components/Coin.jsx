import React from 'react';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CoinImg = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    cursor: pointer;
`;

const CoinTr = styled.tr`
    @media only screen and (max-width: 768px) {
        .td-invisible {
            display: none;
        }
    }
`;


    

export default function Coin({currency}) {

    const StyledNumberFormat = styled(NumberFormat)`
        color: ${currency.price_change_percentage_24h >= 0 ? "#16C784" : "#EA3943"};

        &:before {
            content: ${currency.price_change_percentage_24h >= 0 ? "+" : ""};
        }
    `;
    
    return (
            <CoinTr>
                <td className="td-invisible">{currency.market_cap_rank}</td>
                <td><StyledLink to={"/detail/"+currency.id}><CoinImg src={currency.image} alt="" /><span>{currency.name}</span></StyledLink></td>
                <td><NumberFormat value={currency.current_price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                <td><StyledNumberFormat value={currency.price_change_percentage_24h} decimalScale={1} displayType={'text'} suffix={'%'} /></td>
                <td className="td-invisible"><NumberFormat value={currency.market_cap} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
            </CoinTr>
    )
}
