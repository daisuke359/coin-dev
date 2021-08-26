import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
    }
`;

export const Container = styled.div`
    padding: 40px 50px;
    z-index: 1;
    width: 100%;
    margin: 0 auto;
`;

export const H3 = styled.h3`
    text-align: center;
    margin: 0;
`;

export const Input = styled.input`
    height: 40px;
    margin: 0 auto;
    border: 1px solid white;
    padding: 5px;

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #1D1F27;
    }
`;


export default GlobalStyle;


