import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import * as dayjs from 'dayjs'
import * as weekday from "dayjs/plugin/weekday"
import * as isLeapYear from 'dayjs/plugin/isLeapYear'
import "dayjs/locale/pt-br"

import Header from "./Header";
import Footer from "./Footer";
import UserContext from "./../contexts/UserContext"

export default function Today() {
    const GetHabitsURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    dayjs.extend(isLeapYear);
    dayjs.locale('pt-br');
    dayjs.extend(weekday);
    const data = dayjs().format('DD/MM');
    const day = dayjs().weekday()
    const days = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
    ]

    const { userInfo, setUserInfo } = useContext(UserContext);
    const { token } = userInfo;

    const userConfig = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const [refresh, setRefresh] = useState(0);
    const [hasHabits, setHasHabits] = useState(false);
    const [todayHabits, setTodayHabits] = useState([]);
    const [percentageDone, setPercentageDone] = useState(0);

    const filtered = todayHabits.filter(isDone)
    const percentage = Math.round(100 / todayHabits.length * filtered.length);

    useEffect(() => {
        const promise = axios.get(GetHabitsURL, userConfig);

        promise.catch(err => {
            alert("Algo deu errado! Tente novamente mais tarde.");
        })

        promise.then(response => {
            setTodayHabits(response.data)
            if (response.data.length > 0 ) {
                setHasHabits(true)
                setPercentageDone(percentage);
            }
        })
    }, [refresh])

    useEffect(() => {
        setUserInfo({...userInfo, percentage: percentage})
    }, [percentageDone])

    function markDone(id) {
        const DONE_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;

        const promise = axios.post(DONE_URL, {}, userConfig);

        promise.catch(err => {
            alert("Algo deu errado! Tente novamente mais tarde.");
        })

        promise.then(response => {
            setRefresh(refresh + 1);
        })
    }

    function removeDone(id) {
        const REMOVE_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
        
        const promise = axios.post(REMOVE_URL, {}, userConfig);

        promise.catch(err => {
            alert("Algo deu errado! Tente novamente mais tarde.");
        })

        promise.then(response => {
            setRefresh(refresh + 1);
        })
    }

    function isDone(obj) {
        if (obj.done) {
            return (obj)
        }
    }

    return (
        <>
        <Header />

        <Date>
            <h3>{days[day]}, {data}</h3>
            
            {hasHabits ? (filtered.length > 0 ? <p style={{color: "#8FC549"}}>{percentage}% dos hábitos concluídos.</p> : <p>Nenhum hábito concluído ainda</p>) : <p>Você não tem hábitos para hoje.</p>}
            
            {hasHabits ? todayHabits.map((habit, keyid) => {
                return (
                    <Habit key={keyid}>
                        <Info>
                            <h4>{habit.name}</h4>
                            <span>Sequência atual:</span> <span style={habit.done ? {color: "#8FC549"} : {}}>{habit.currentSequence} dias</span><br/>
                            <span>Seu recorde:</span> <span style={habit.currentSequence >= habit.highestSequence && habit.done ? {color: "#8FC549"} : {}}>{habit.highestSequence} dias</span>
                        </Info>
                        <label>
                            <input type="checkbox" checked={habit.done ? "checked" : ""} onChange={habit.done ? () => {
                                removeDone(habit.id)
                            }
                             : () => {
                                markDone(habit.id)
                            }}></input>
                            <span></span>
                        </label>
                    </Habit>
                )
            }) : ""}
            
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

span {
    margin: 0;
    font-weight: 400;
    font-size: 13px;
    color: #666666;
}
`