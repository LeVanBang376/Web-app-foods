import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Signin from '../signin/Signin'
import Signup from '../signup/Signup'
import UserHome from '../user_pages/home/Home'
import UserIntroduction from '../user_pages/introduction/Introduction'
import UserTerms from '../user_pages/terms/Terms'
import UserFoods from '../user_pages/foods/Foods'
import UserFood_detail from '../user_pages/food_detail/Food_detail'
import Setting from '../user_pages/setting/Setting'
export default function Router() {
    const path = useLocation().pathname
    return (
        <>
            {(path !== '/signin' && path !== '/signup' && path !== '/terms' && path !== '/setting') && <Header />}
            <Routes>
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route exact path="/" element={<UserHome />} />
                <Route path="/introduction" element={<UserIntroduction />} />
                <Route path="/terms" element={<UserTerms />} />
                <Route path="/foods" element={<UserFoods />} />
                <Route path="/foods/:id" element={<UserFood_detail />} />
                <Route path="/setting" element={<Setting />} />
            </Routes>
            {(path !== '/signin' && path !== '/signup' && path !== '/terms' && path !== '/setting') && <Footer />}
        </>


    )
}
