import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import {useParams, useHistory} from "react-router";
import styled from 'styled-components';
import ChartDetail from '../components/ChartDetail';
import ChartHistory from '../components/ChartHistory';
import Navbar from '../components/Navbar';
import { Container } from '../GlobalStyles';
import { AuthContext } from '../context/AuthContext';

const DetailContainer = styled(Container)`
    width: 75%;
    margin: 50px auto;
    padding: 30px 60px;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 5%) 0px 4px 10px 3px;

    @media (max-width: 920px) {
      width: 90%;
      padding: 20px 30px;
    }
`;


const ButtonsContainer = styled(Container)`
  width: 100%;
  margin: 50px auto 30px;
  display: flex;
  justify-content: space-between;

  .btn-action {
    cursor: pointer;
    color: white;
    text-decoration: none;
    padding: 12px 26px;
    border: 1px solid white;
    border-radius: 5px;
    transition: all 0.2s;
    background-color: #0049FF;

    &:hover {
        background-color: white;
        color: #0049FF;
        border: 1px solid #0049FF;
    }
  }


  .btn-back {
    cursor: pointer;
    text-decoration: none;
    padding: 12px 26px;
    border-radius: 5px;
    transition: all 0.2s;
    background-color: #eff2f5;
    color: black;
    border: 1px solid #808A9D;

    &:hover {
      background-color: #0049FF;
      color: white;
      background-color: #808A9D;
    }
  }

  @media (max-width: 768px) {
    .btn-action, .btn-back {
      font-size: 0.9rem;
      padding: 5px 10px;
    }
  }

  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;

export default function Detail() {

    
    const id = useParams().id;
    const {user, dispatch} = useContext(AuthContext);
    const [currencyData, setCurrencyData] = useState({});
    const history = useHistory();

    const formatData = (data) => {
        return data.map((el) => {
          return {
            x: el[0],
            y: el[1],
          };
        });
    };

    const handleClick = () => {
      console.log(user.watchList);
      if(!user.watchList.includes(currencyData.detail.id)) {
        //Add to the list
        try {
          axios.put(`/api/users/${user._id}/watchlist/add`, {currency: currencyData.detail.id});
          dispatch({type: "ADD_TO_LIST", payload: currencyData.detail.id});
        }catch(err) {
          console.log(err);
        }
      } else {
        //remove from the list
        try {
          axios.put(`/api/users/${user._id}/watchlist/remove`, {currency: currencyData.detail.id});
          dispatch({type:"REMOVE_FROM_LIST", payload: currencyData.detail.id});
        }catch(err) {
          console.log(err);
        }
      }
    }

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
            <Navbar/>
            {currencyData.detail && 
              <DetailContainer>
              <ChartDetail detail={currencyData.detail}/>
              <ChartHistory data={currencyData}/>
              <ButtonsContainer>
                <button onClick={() => history.goBack()} className="btn-back">Back</button>
                {user &&
                  <button onClick={handleClick} className="btn-action">
                    {!user.watchList.includes(currencyData.detail.id) ? "Add to Watchlist" : "Remove from Watchlist"}
                  </button>
                }
              </ButtonsContainer>
              </DetailContainer>
            }
            
        </>
    )
}
