import React from 'react';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';
import { Container } from '../GlobalStyles';
import LinkIcon from '@material-ui/icons/Link';
import CodeIcon from '@material-ui/icons/Code';

const DetailContainer = styled(Container)`
    margin: 20px 0 50px;
    display: flex;
    justify-content: space-between;
`;

const DetailLeft = styled.div`
    h3 {
        margin: 0;
        font-size: 2em;
    }
`;

const DetailRight = styled.div`
    text-align: right;
    display: flex;
    flex-direction: column;
`;

const DetailLeftMain = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    img {
        width: 40px;
        margin-right: 10px;
    }

    span {
        background-color: #eff2f5;
        font-size: 0.8em;
        padding: 4px 8px;
        border-radius: 8px;
        margin-left: 10px
    }
`;

const DetailLeftLinks = styled.div`
    display: flex;
    margin-left: 50px;

    a {
        text-decoration: none;
        margin-right: 10px;
    }
`;

const DetailLink = styled.div`
    font-size: 0.8em;
    display: flex;
    margin-right: 5px;
    align-items: center;
    background-color: #eff2f5;
    padding: 4px 8px;
    border-radius: 8px;
    transition: all 0.2s;

    a {
        color: black;
        margin-left: 4px;
        margin-right: 4px;
    }

    &:hover {
        background-color: #808A9D;
        color: white;

        a {
            color: white;
        }
    }
`;

export default function ChartDetail({detail}) {

    const DetailRightCurrentPrice = styled.div`
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 10px;

        h3 {
            margin-bottom: 0;
            margin-right: 30px;
            font-size: 2em;
        }

        .current-percent {
            color: white;
            background-color: ${detail ? detail.market_data.price_change_percentage_24h >= 0 ? "#16C784" : "#EA3943" : "#eff2f5"};
            font-size: 0.8em;
            padding: 4px 10px;
            border-radius: 8px;

            &:before {
                content: ${detail ? detail.market_data.price_change_percentage_24h >= 0 ? "+" : "" : ""};
            }
        }
    `;

    const DetailMarketPrice = styled.div`
        font-size: 0.8em;
        display: flex;
        justify-content: space-between;

        span {
            color: #808A9D;
        }

        p {
            color: ${detail ? detail.market_data.market_cap_change_percentage_24h >= 0 ? "#16C784" : "#EA3943" : "#eff2f5"};

            &:before {
                content: ${detail ? detail.market_data.price_change_percentage_24h >= 0 ? "+" : "" : ""};
            }
        }
    `;
    return (
        <>
            {detail && 
            <DetailContainer>
                <DetailLeft>
                    <DetailLeftMain>
                        <img src={detail.image.small} alt="" />
                        <h3>{detail.name}</h3>
                        <span className="detail-symbol">{detail.symbol.toUpperCase()}</span>
                    </DetailLeftMain>
                    <DetailLeftLinks>
                        <DetailLink>
                            <LinkIcon></LinkIcon>
                            <a href={detail.links.homepage[0]}>Homepage</a>
                        </DetailLink>
                        <DetailLink>
                            <CodeIcon></CodeIcon>
                            <a href={detail.links.repos_url.github[0]}>Souce code</a>
                        </DetailLink>
                    </DetailLeftLinks>
                </DetailLeft>
                <DetailRight>
                    <DetailRightCurrentPrice>
                        <h3><NumberFormat value={detail.market_data.current_price.cad} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h3>
                        <NumberFormat className="current-percent" value={detail.market_data.price_change_percentage_24h} decimalScale={2} displayType={'text'} suffix={'%'} />
                    </DetailRightCurrentPrice>
                    <DetailMarketPrice>
                        <NumberFormat value={detail.market_data.market_cap.cad} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                        <p>{detail.market_data.market_cap_change_percentage_24h.toFixed(2)} %</p>
                    </DetailMarketPrice>
                </DetailRight>
            </DetailContainer>
            }
        </>
    )
}
