import React from 'react';
import WatchItem from './WatchItem';
import styled from 'styled-components';
import { Container } from '../GlobalStyles';

const FavoriteContainer = styled(Container)`
    width: 90%;

    h2 {
        margin: 40px 0;
    }

    h4 {
        margin-bottom: 20px;
    }
`;

const ItemsContainer = styled(Container)`
    display: flex;
    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;


export default function Favorite({user}) {

    console.log(user.watchList);
    return (
        <FavoriteContainer>
           <h2>Welcome back, {user.username}!</h2>
           <h4>Your favorite currencies</h4>
            <ItemsContainer>
                {user.watchList && (
                    user.watchList.map((coin, index) => (
                        <WatchItem key={index} coin={coin}/>
                    ))
                )} 
            </ItemsContainer>
        </FavoriteContainer>
    )
}
