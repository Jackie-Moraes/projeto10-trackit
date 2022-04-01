import React from "react";
import styled from "styled-components";
import Image from "../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Register() {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");
    
    const [disabled, setDisabled] = useState(false);

    const navigator = useNavigate();

    function blockAndLoad(e) {
        e.preventDefault();
        setDisabled(true);
        validateData();
    }

    function validateData() {
        const promise = axios.post(URL, {
            email,
            name,
            image,
            password
        });

        promise.catch(error => {
            alert("Algo deu errado! Tente novamente mais tarde.");
            setDisabled(false)
        });

        promise.then(data => {
            alert("Sucesso ao criar a conta!")
            setDisabled(false)
            navigator("/");
        })
    }

    return (
        <InfoScreen>
            <img src={Image}/>
            <h1>TrackIt</h1>

            <form onSubmit={blockAndLoad} style={disabled ? {opacity: '0.5'} : {}} disabled={disabled ? "disabled" : ""}>
                <input required placeholder="email" type="email" onChange={e => setEmail(e.target.value)}></input>
                <input required placeholder="senha" type="password" onChange={e => setPassword(e.target.value)}></input>
                <input required placeholder="nome" type="text" onChange={e => setName(e.target.value)}></input>
                <input required placeholder="foto" type="url" onChange={e => setImage(e.target.value)}></input>
                <button type="submit">{disabled ? <Loader type="Hearts" color="white" height={35} width={150} /> : "Registrar"}</button>
            </form>

            <h6 onClick={() => navigator("/")}>Já tem uma conta? Faça login!</h6>
        </InfoScreen>
    )
}


const InfoScreen = styled.main`
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