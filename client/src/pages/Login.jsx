import React, { useRef, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import styled from "styled-components";
import { Container } from '../GlobalStyles';
import { Link } from 'react-router-dom';
import { loginCall } from "../context/AuthActions";

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

    @media (max-width: 1200px) {
        width: 65%;
    }

    @media (max-width: 1023px) {
        width: 75%;
    }

    @media (max-width: 768px) {
        width: 85%;
        font-size: 0.8rem;
    }

    @media (max-width: 560px) {
        flex-direction: column;
    }
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

    @media (max-width: 560px) {
        width: 100%;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 0;
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

    @media (max-width: 560px) {
        width: 80%;
        padding-bottom: 20px;
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

    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        loginCall(
            {email: email.current.value, password: password.current.value},
            dispatch
        ); 
    }

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
                <LoginRight onSubmit={handleSubmit}>
                    <h4>Login</h4>
                    <InputWrapper>
                        <input ref={email} required placeholder="email" type="email" />
                    </InputWrapper>
                    <InputWrapper>
                        <input ref={password} required minLength="6" placeholder="passsword" type="password" />
                    </InputWrapper>
                    <LoginBtn type="submit" disabled={isFetching}>
                        {isFetching ? (
                            "logging in..."
                        ) : (
                            "LOGIN"
                        )}
                        </LoginBtn>
                </LoginRight>
            </LoginContainer>
        </LoginWrapper>
    )
}
