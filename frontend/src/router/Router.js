import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Header from '../components/header/Header'
import Signin from '../signin/Signin'
import UserHome from '../user_pages/home/Home'
import UserIntroduction from '../user_pages/introduction/Introduction'

export default function Router() {
    const path = useLocation().pathname
    return (
        <>
            {path !== '/login' && <Header />}
            <Routes>
                <Route path="/login" element={<Signin />} />
                <Route exact path="/" element={<UserHome />} />
                <Route path="/introduction" element={<UserIntroduction />} />
            </Routes>
        </>


    )
}
