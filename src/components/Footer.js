import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (
        <Bottom>
            <button>Hábitos</button>
            <button>Histórico</button>
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
    margin-bottom: 22px;
}
`