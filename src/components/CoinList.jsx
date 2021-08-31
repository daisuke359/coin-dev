import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table'
import { Container, H3, Input} from '../GlobalStyles';
import Coin from './Coin';
import { useCurrencyContext } from '../context/CurrencyContext';
import Paginate from './Pagination';

const ListContainer = styled(Container)`
    width: 80%;

    @media (max-width: 920px) {
        width: 90%;
    }
`;

const StyledTable = styled(Table)`
    background-color: white;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    border: none;

    thead {
        background-color: #1D1F27;
        color: white;
    }

    thead ,tr, th, td {
        border: none; 
    }

    tr {
        border-bottom: 1px solid #dee2e6;

        &:last-child {
            border: none;
        }
    }
`;


const SeacrhContainer = styled(Container)`
    width: 60%;
    padding: 30px 50px;
    margin-top: 30px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;

    @media (max-width: 920px) {
        width: 80%;
    }
`;

const SearchText = styled(H3)`
    padding-bottom: 30px;
    color: white;
    ${H3}
`;

const SearchInput = styled(Input)`
    width: 70%;

    @media (max-width: 920px) {
        width: 90%;
    }

`;

export default function CoinList() {

    const input = useRef();

    const [search, setSearch] = useState("");

    const {
        currencies,
        setCurrencies,
        currentPage,
        setCurrentPage,
        postsPerPage
    } = useCurrencyContext();

    //get current posts
    const indexOfLastItem = currentPage * postsPerPage;
    const indexOfFirstItem = indexOfLastItem - postsPerPage;

    useEffect(() => {
        const getCurrencies = async () => {
            const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false", 
            {headers: {"Access-Control-Allow-Origin": "*"}});
            setCurrencies(res.data);
        };
        getCurrencies();
    }, [])

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleChange = (e) => {
        setSearch(e.target.value);   
    }
    const filteredCurrencies = currencies.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

    const currentItems = filteredCurrencies.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <SeacrhContainer>
                <SearchText>Search Currency</SearchText>
                <SearchInput ref={input} onChange={handleChange} placeholder="type name of currencey"/>
            </SeacrhContainer>
            <ListContainer>
            <StyledTable responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Coin</th>
                        <th>Price</th>
                        <th>24h</th>
                        <th>Mkt Cap</th>
                    </tr>
                </thead>
                <tbody>
                {currencies && currentItems.map((c) => (
                    <Coin key={c.id} currency={c}/>
                ))}
                
                </tbody>
            </StyledTable>
            {!currencies && <h4>No currency found</h4>}
            <Paginate currentPage={currentPage} postsPerPage={postsPerPage} totalPosts={filteredCurrencies.length} paginate={paginate} />
            </ListContainer>
        </>
    )
}
