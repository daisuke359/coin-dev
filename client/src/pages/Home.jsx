import React, {useContext} from 'react';
import CoinList from '../components/CoinList';
import Favorite from '../components/Favorite';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';

export default function Home() {

    const {user} = useContext(AuthContext);

    return (
        <div className="app">
            <Navbar/>
            {user && <Favorite user={user}/>}
            <CoinList/>
        </div>
    )
}
