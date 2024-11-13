import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from '../components/List'
import Management from '../components/Management'
import Nav from '../components/Nav'

const MyRouter = () => {
  return (
    <>
    <Nav/>
    <Routes>
        <Route path='/' element={<List/>}/>
        <Route path='/canditates' element={<List/>}/>
        <Route path='/management' element={<Management/>}/>
        <Route path='*' element={<List/>}/>
    </Routes>
    </>
  )
}

export default MyRouter
