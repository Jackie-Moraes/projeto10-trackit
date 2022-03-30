import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

export default function History() {
    return (
        <>
        <Header />

        <MyHistory >
            <h3>Histórico</h3>
            <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
        </MyHistory>

        <Footer />
        </>
    )
}

const MyHistory = styled.main`
width: 100vw;
height: calc(100vh - 145px);
background: #F2F2F2;

margin-top: 55px;
margin-bottom: 90px;
padding: 20px;

h3 {
    margin: 0 0 20px;
    color: #126BA5;
    font-size: 22px;1
}

span {
    color: #666666;
    font-weight: 400;
    font-size: 17px;
}
`