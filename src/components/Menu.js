import React from "react";
import styled from "styled-components";
import Image from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Menu() {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigator = useNavigate();

    function validateLogin() {
        navigator("/cadastro")
    }

    return (
        <Login>
            <img src={Image}/>
            <h1>TrackIt</h1>

            <forms onSubmit={validateLogin}>
                <input required placeholder="email"></input>
                <input required placeholder="senha"></input>
                <button type="submit" onClick={() => navigator("/habitos")}>Entrar</button>
            </forms>

            <h6 onClick={() => navigator("/cadastro")}>Não tem uma conta? Cadastre-se!</h6>
        </Login>
    )
}

const Login = styled.main`
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