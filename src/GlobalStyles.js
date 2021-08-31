import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Inter, Verdana, Tahoma, sans-serif;
    }

    body {
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 1%, rgba(199,33,131,0.989233193277311) 100%, rgba(0,212,255,1) 100%);
    }
`;
export const Container = styled.div`
    z-index: 1;
    width: 100%;
    margin: 0 auto;
`;

export const H3 = styled.h3`
    text-align: center;
    margin: 0;
`;

export const Input = styled.input`
    background-color: #F5F5F5;
    height: 40px;
    margin: 0 auto;
    border: 1px solid white;
    padding: 5px;
    border-radius: 5px;

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #1D1F27;
    }
`;


export default GlobalStyle;


