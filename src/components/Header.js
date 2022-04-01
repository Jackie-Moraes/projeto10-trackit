import React from "react";
import styled from "styled-components";
import { useContext } from "react";

import UserContext from "./../contexts/UserContext"

export default function Header() {
    const {userInfo} = useContext(UserContext);
    const {name, image, email, token} = userInfo;

    return (
        <Top>
            <h2>TrackIt</h2>
            <img src={image} />
        </Top>
    )
}


const Top = styled.header`
width: 100vw;
height: 55px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

z-index: 1;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
padding: 10px;

top: 0;

h2 {
    font-family: 'Playball', cursive;
    color: #FFFFFF;
    font-size: 30px;
    font-weight: 400;
}

img {
    max-width: 40px;
    max-height: 40px;
    border-radius: 50%;
    object-fit: cover;
}
`