import React from "react";
import styled from "styled-components";
import Image from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";

import UserContext from "../contexts/UserContext";

export default function Menu() {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {userInfo, setUserInfo} = useContext(UserContext);

    const navigator = useNavigate();

    function validateLogin(e) {
        e.preventDefault();

        const promise = axios.post(URL, {
            email,
            password
        });

        promise.catch(error => {
            alert(error.response.data.message);
        });

        promise.then(response => {
            const {name, image, email, token} = response.data;
            setUserInfo({...userInfo, name: name, image: image, email: email, token: token})
            navigator("/hoje");
        })
    }

    return (
        <Login>
            <img src={Image}/>
            <h1>TrackIt</h1>

            <form onSubmit={validateLogin}>
                <input required placeholder="email" type="email" onChange={e => setEmail(e.target.value)}></input>
                <input required placeholder="senha" type="password" onChange={e => setPassword(e.target.value)}></input>
                <button type="submit">Entrar</button>
            </form>

            <h6 onClick={() => navigator("/cadastro")}>Não tem uma conta? Cadastre-se!</h6>
        </Login>
    )
}

const Login = styled.main`
width: 100vw;
height: 100vh;

background: #FFFFFF;
display: flex;
align-items: center;
flex-direction: column;


h1 {
    font-family: 'Playball', cursive;
    color: #126BA5;
    font-size: 70px;
    font-weight: 400;
}

h6 {
    color: #52B6FF;
    text-decoration: underline;
}

form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

input {
    margin-bottom: 10px;
    width: 300px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding: 10px;
}

input::placeholder {
    color: #DBDBDB;
}

button {
    width: 300px;
    height: 45px;
    border: none;
    background: #52B6FF;
    border-radius: 5px;
    padding: 5px;

    color: #FFFFFF;
}

img {
    margin-top: 40px;
    max-width: 200px;
    max-height: 100px;
}
`;