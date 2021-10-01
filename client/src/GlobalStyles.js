import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Inter, Verdana, Tahoma, sans-serif;
    }

    body {
        background-color: rgb(248, 249, 251);
        color: black;
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
    background-color: white;
    height: 40px;
    border: 1px solid #dee2e6;
    padding: 5px;
    border-radius: 5px;

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #1D1F27;
    }
`;


export default GlobalStyle;


