import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import CreateBook from '../pages/CreateBook'
import UpdateBook from '../pages/UpdateBook'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add' element={<CreateBook />} />
                <Route path='/update' element={<UpdateBook />} />
                <Route path='/*' element={<h2>Not found 404</h2>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes