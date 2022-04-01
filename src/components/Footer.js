import { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import UserContext from "../contexts/UserContext";

export default function Footer() {

    const navigator = useNavigate();
    const {userInfo} = useContext(UserContext);
    const {percentage} = userInfo;

    return (
        <Bottom>
            <button onClick={() => navigator("/habitos")}>Hábitos</button>
            <Link to="/hoje" style={{ width: 100, height: 140 }}>
                <CircularProgressbar background backgroundPadding={6} value={percentage} text={`Hoje`} styles={buildStyles({
          backgroundColor: "#52B6FF",
          textColor: "#FFFFFF",
          pathColor: "#fff",
          trailColor: "transparent"
        })}/>
            </Link>
            <button onClick={() => navigator("/historico")}>Histórico</button>
        </Bottom>
    )
}


const Bottom = styled.footer`
width: 100vw;
height: 70px;

display: flex;
justify-content: space-between;
align-items: center;
padding: 25px;

background: #FFFFFF;
position: fixed;
bottom: 0;

button {
    font-size: 20px;
    border: none;
    border-radius: 5px;
    color: #52B6FF;
    background: #FFFFFF;
    margin-bottom: 10px;
}
`