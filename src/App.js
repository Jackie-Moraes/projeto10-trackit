import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./components/Normalize"

import Menu from "./components/Menu"
import Register from "./components/Register"

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/cadastro" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}