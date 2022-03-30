import React from "react";
import styled from "styled-components";
import Image from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const navigator = useNavigate();

    return (
        <InfoScreen>
            <img src={Image}/>
            <h1>TrackIt</h1>

            <forms onSubmit="">
                <input required placeholder="email"></input>
                <input required placeholder="senha"></input>
                <input required placeholder="nome"></input>
                <input required placeholder="foto"></input>
                <button type="submit">Registrar</button>
            </forms>

            <h6 onClick={() => navigator("/")}>Já tem uma conta? Faça login!</h6>
        </InfoScreen>
    )
}


const InfoScreen = styled.main`
width: 100vw;
height: 100vh;

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

forms {
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