import React from 'react';
import CoinList from '../components/CoinList';
import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <div className="app">
            <Navbar/>
            <CoinList/>
        </div>
    )
}
