import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

export default function Today() {
    return (
        <>
        <Header />

        <Date>
            <h3>Segunda, 17/05</h3>
            <p>Nenhum hábito concluído ainda</p>

            <Habit>
                <Info>
                    <h4>Ler 1 capítulo de livro</h4>
                    <p>Sequência atual: 3 dias</p>
                    <p>Seu recorde: 5 dias</p>
                </Info>
                <label>
                    <input type="checkbox"></input>
                    <span></span>
                </label>
            </Habit>

            <Habit>
                <Info>
                    <h4>Ler 1 capítulo de livro</h4>
                    <p>Sequência atual: 3 dias</p>
                    <p>Seu recorde: 5 dias</p>
                </Info>
                <label>
                    <input type="checkbox"></input>
                    <span></span>
                </label>
            </Habit>
        </Date>

        <Footer />
        </>
    )
}


const Date = styled.main`
width: 100vw;
height: calc(100vh - 145px);
background: #F2F2F2;

margin-top: 55px;
margin-bottom: 90px;
padding: 20px;

h3 {
    margin: 0 0 3px;
    color: #126BA5;
    font-size: 22px;
}

p {
    color: #BABABA;
    font-weight: 400;
    font-size: 17px;
    margin: 0 0 30px;
}
`

const Habit = styled.section`
position: relative;
width: 340px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 10px;


label {
    user-select: none;
    cursor: pointer;

    input {
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    
    span {
        position: absolute;
        top: 13px;
        right: 15px;
        height: 69px;
        width: 69px;
        background: #EBEBEB;
        border: 1px solid #E7E7E7;
        box-sizing: border-box;
        border-radius: 5px;
    }

    span:after {
        content: "";
        position: absolute;
        display: none;
    }
    
    input:checked ~ span {
        background-color: #8FC549;
    }

    span:after {
        display: block;
        left: 24px;
        top: 10px;
        width: 13px;
        height: 30px;
        border: solid white;
        border-width: 0 5px 5px 0;
        transform: rotate(45deg);
    }
}

`

const Info = styled.div`
padding: 15px;

h4 {
    margin: 0 0 10px;
    color: #666666;
    font-weight: 400;
    font-size: 20px;
}

p {
    margin: 0;
    font-weight: 400;
    font-size: 13px;
    color: #666666;
}
`