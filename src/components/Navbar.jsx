import React from 'react';
import styled from 'styled-components';
import { Container} from '../GlobalStyles';

const Nav = styled(Container)`
    position: sticky;
    top: 0;
    display: flex;
    color: white;
    background: linear-gradient(0deg,#0083FF .11%,#0049FF 127.33%);
    align-items: center;
    justify-content: space-between;
    padding: 30px 60px;

    .logo-container > a {
        color: white;
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: 700;
    }

    .nav-list {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        justify-content: space-between;

        .nav-item > a {
            color: white;
            text-decoration: none;
            padding: 12px 26px;
            border: 1px solid white;
            border-radius: 5px;
            margin-right: 10px;
            transition: all 0.2s;

            &:hover {
                background-color: white;
                color: #0049FF;
            }
        }
    }

    @media only screen and (max-width: 768px) {
        padding: 20px 40px;

        .nav-list > .nav-item > a {
            padding: 6px 10px;
        }
    }

    @media only screen and (max-width: 480px) {
        padding: 20px 20px;

        .nav-list > .nav-item > a {
            padding: 6px 10px;
        }
    }
`;

export default function Navbar() {
    return (
        <Nav>
           <div className="logo-container">
               <a href="/">COIN DEV</a>
            </div> 
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="/">Sign In</a>
                </li>
            </ul>
        </Nav>
    )
}
