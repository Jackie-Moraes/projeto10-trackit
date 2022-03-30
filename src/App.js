import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./components/Normalize"

import Menu from "./components/Menu"
import Register from "./components/Register"
import Habits from "./components/Habits"

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/habitos" element={<Habits />} />
            </Routes>
        </BrowserRouter>
    )
}