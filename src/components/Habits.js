import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";

export default function Habits() {

    const [hasHabits, setHasHabits] = React.useState(false);
    const [creatingHabits, setCreatingHabits] = React.useState(false);

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
                    <input required placeholder="nome do hábito"></input>
                    <Weekdays>
                        <button>D</button>
                        <button>S</button>
                        <button>T</button>
                        <button>Q</button>
                        <button>Q</button>
                        <button>S</button>
                        <button>S</button>
                    </Weekdays>

                    <End>
                        <Cancelar onClick={() => setCreatingHabits(false)}>Cancelar</Cancelar>
                        <Salvar onClick={() => setCreatingHabits(false)}>Salvar</Salvar>
                    </End>
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
button {
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