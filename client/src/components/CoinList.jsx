import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table'
import { Container, Input} from '../GlobalStyles';
import Coin from './Coin';
import { useCurrencyContext } from '../context/CurrencyContext';
import Paginate from './Pagination';

const ListContainer = styled(Container)`
    width: 90%;

    .list-top {
        display: flex;
        margin-top: 60px;
        margin-bottom: 25px;
        justify-content: space-between;
    }

    @media only screen and (max-width: 768px) {
        .list-top {
            flex-direction: column-reverse;
            margin-bottom: 15px;

            h3 {
                font-size: 1.0rem;
            }
            input {
                width: 90%;
                margin: 0 auto 20px;
            }

        }
    }
`;

const SearchInput = styled(Input)`
    width: 20%;
`;

const StyledTable = styled(Table)`
    background-color: white;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    border: none;

    thead ,tr, th, td {
        border: none; 
    }

    thead {
        border-bottom: 1px solid #dee2e6;
    }

    tr {
        border-bottom: 1px solid #dee2e6;
        
        td {
            padding: 15px;
        }

        &:last-child {
            border: none;
        }

        &:hover {
            box-shadow: 0 4px 10px 2px rgb(0 0 0 / 5%);
        }
    }

    @media only screen and (max-width: 768px) {
        .th-invisible {
            display: none;
        }
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
        <ListContainer>
            <div className="list-top">
                <h3 className="list-title">Top 100 Cryptocurrency Prices</h3>
                <SearchInput ref={input} onChange={handleChange} placeholder="Search..."/>
            </div>
            <StyledTable responsive bordered hover>
                <thead>
                    <tr>
                        <th className="th-invisible">#</th>
                        <th>Coin</th>
                        <th>Price</th>
                        <th>24h</th>
                        <th className="th-invisible">Mkt Cap</th>
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
    )
}
