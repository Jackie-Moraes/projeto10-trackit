import React from "react";
import styled from "styled-components";

export default function Header() {
    return (
        <Top>
            <h2>TrackIt</h2>
            <img src="https://yt3.ggpht.com/ytc/AKedOLT2y4hkt_FsZMoIkho6Vn8jFfGacOYxi2XkvuXL=s900-c-k-c0x00ffffff-no-rj" />
        </Top>
    )
}


const Top = styled.header`
width: 100vw;
height: 55px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
padding: 10px;

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