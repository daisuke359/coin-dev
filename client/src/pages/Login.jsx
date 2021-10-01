import React from 'react';
import styled from "styled-components";
import { Container } from '../GlobalStyles';
import { Link } from 'react-router-dom';

const LoginWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginContainer = styled(Container)`
    background-color: white;
    width: 50%;
    height: 50%;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 5%) 0px 4px 10px 3px;
    display: flex;
    align-items: center;
`;

const LoginLeft = styled.div`
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    flex: 0.4;
    text-align: center;
    background: linear-gradient(0deg,#0083FF .11%,#0049FF 127.33%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    div {
        width: 90%;
        margin: 0 auto;

        p {
            font-size: 0.9rem;
        }

        a {
            color: white;
            text-decoration: none;
            padding: 5px 15px;
            border-radius: 5px;
            border: 1px solid white;
            transition: all 0.2s;

            &:hover {
                background: white;
                color: #0049FF;
            }
        }
    }
`;

const LoginRight = styled.form`
    padding-top: 20px;
    flex: 0.6;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;

    h4 {
        font-size: 1.6rem;
    }
`;

const InputWrapper = styled.div`
    width: 80%;
    padding: 10px 15px;
    border-radius: 5px;
    margin: 0 auto;
    background-color: rgb(239, 242, 245);
    border: 1px solid rgb(239, 242, 245);
    input {
        border: none;
        width: 100%;
        height: 100%;
        background-color: rgb(239, 242, 245);
        &:focus {
            outline: none;
        }
    }
`;

const LoginBtn = styled.button`
    width: 30%;
    margin: 0 auto;
    border: 1px solid white;
    border-radius: 5px;
    background-color:  #0049FF;
    padding: 5px 15px;
    color: white;
    transition: all 0.2s;

    &:hover {
        color: #0049FF;
        background-color: white;
        border-color: #0049FF;
    }
`;

export default function Login() {
    return (
        <LoginWrapper>
            <LoginContainer>
                <LoginLeft>
                    <div>
                        <h4>Welcome Back!</h4>
                        <p>You don't have an account?</p>
                        <Link to="/register">Sign Up</Link>
                    </div>
                </LoginLeft>
                <LoginRight>
                    <h4>Login</h4>
                    {/* <InputWrapper>
                        <input placeholder="name" type="text" />
                    </InputWrapper> */}
                    <InputWrapper>
                        <input placeholder="email" type="email" />
                    </InputWrapper>
                    <InputWrapper>
                        <input placeholder="passsword" type="password" />
                    </InputWrapper>
                    <LoginBtn>LOGIN</LoginBtn>
                </LoginRight>
            </LoginContainer>
        </LoginWrapper>
    )
}
