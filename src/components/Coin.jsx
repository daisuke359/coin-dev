import React from 'react';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';

const CoinImg = styled.img`
        width: 20px;
        height: 20px;
        margin-right: 5px;
    `;

    const StyledTr = styled.tr`
        cursor: pointer;
    `;

export default function Coin({currency}) {

    

    return (
        <StyledTr>
            <td>{currency.market_cap_rank}</td>
            <td><CoinImg src={currency.image} alt="" /><span>{currency.name}</span></td>
            <td><NumberFormat value={currency.current_price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
            <td><NumberFormat value={currency.price_change_percentage_24h} decimalScale={1} displayType={'text'} />%</td>
            <td><NumberFormat value={currency.market_cap} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
        </StyledTr>
    )
}
