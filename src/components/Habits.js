import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";

export default function Habits() {

    const CreateHabitsURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const [hasHabits, setHasHabits] = useState(false);
    const [creatingHabits, setCreatingHabits] = useState(false);

    const [habitName, setHabitName] = useState("");

    const days = [
        "D",
        "S",
        "T",
        "Q",
        "Q",
        "S",
        "S"
    ]

    const [selectedDays, setSelectedDays] = useState([]);

    function sendHabits(e) {
        e.preventDefault();

        const promise = axios.post(CreateHabitsURL, {
         name: habitName,
         days: selectedDays   
        })

        promise.catch(err => {
            console.log(habitName)
            console.log(selectedDays)
            console.log(err)
            alert("Deu pau")
            setSelectedDays([])
        })

        promise.then(data => {
            console.log(data)
            setCreatingHabits(false)
            setSelectedDays([])
        })
    }

    return (
        <>
            <Header />

            <MyHabits >
                <CreateHabits>
                    <h3>Meus hábitos</h3>
                    <button onClick={() => setCreatingHabits(true)}>+</button>
                </CreateHabits>

                {creatingHabits ?
                    <HabitMenu >
                        <form onSubmit={sendHabits}>
                            <input required placeholder="nome do hábito" onChange={e => setHabitName(e.target.value)}></input>
                            <Weekdays>
                                {days.map((day, id) => {
                                    return (
                                        <div key={id} onClick={() => {
                                            setSelectedDays([...selectedDays, id])
                                        }} style={selectedDays.includes(id) ? {backgroundColor: "#CFCFCF", color: "#FFFFFF"} : {}}>{day}</div>
                                    )
                                })}
                            </Weekdays>
                            <End>
                                <Cancelar onClick={() => setCreatingHabits(false)}>Cancelar</Cancelar>
                                <Salvar type="submit">Salvar</Salvar>
                            </End>
                        </form>
                    </HabitMenu> : ""}
                {hasHabits ? "" : <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>}
            </MyHabits >

            <Footer />
        </>
    )
}

const MyHabits = styled.main`
width: 100vw;
height: calc(100vh - 145px);
background: #F2F2F2;

margin-top: 55px;
margin-bottom: 90px;
padding: 20px;

span {
    color: #666666;
    font-weight: 400;
    font-size: 17px;
}
`

const CreateHabits = styled.section`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 30px;

h3 {
    margin: 0;
    color: #126BA5;
    font-size: 22px;1
}

button {
    width: 40px;
    height: 33px;
    border: none;
    background: #52B6FF;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 22px;
    padding: 0px;
    text-align: center;
}`

const HabitMenu = styled.section`
position: relative;

width: 340px;
height: 150px;
background: #FFFFFF;
border-radius: 5px;
margin-bottom: 20px;
padding: 10px 20px;

input {
    width: 100%;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding: 10px;
}

input::placeholder {
    color: #DBDBDB;
}
`

const Weekdays = styled.div`
display: flex;
text-align: center;

div {
    width: 25px;
    margin: 5px 3px 0 0;
    color: #DBDBDB;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
}
`

const End = styled.div`
position: absolute;
right: 10px;
bottom: 10px;

button {
    border: none;
    margin-left: 15px;
}
`

const Cancelar = styled.button`
    width: 84px;
    height: 35px;
    background: #FFFFFF;
    border-radius: 5px;
    color: #52B6FF;
`

const Salvar = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    color: #FFFFFF;
`