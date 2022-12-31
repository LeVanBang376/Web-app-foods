import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Header from '../components/header/Header'
import Signin from '../signin/Signin'
import Signup from '../signup/Signup'
import UserHome from '../user_pages/home/Home'
import UserIntroduction from '../user_pages/introduction/Introduction'
import UserTerms from '../user_pages/terms/Terms'
export default function Router() {
    const path = useLocation().pathname
    return (
        <>
            {(path !== '/signin' && path !== '/signup' && path !== '/terms') && <Header />}
            <Routes>
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route exact path="/" element={<UserHome />} />
                <Route path="/introduction" element={<UserIntroduction />} />
                <Route path="/terms" element={<UserTerms />} />
            </Routes>
        </>


    )
}
