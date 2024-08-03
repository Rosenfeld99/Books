import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CreateBook from '../pages/CreateBook'
import UpdateBook from '../pages/UpdateBook'
import Navbar from '../components/Navbar'
import Test from '../test/Test'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add' element={<CreateBook />} />
                <Route path='/update/:bookID' element={<UpdateBook />} />
                <Route path='/test' element={<Test />} />
                <Route path='/*' element={<h2>Not found 404</h2>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes