import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from '../pages/Home'
import Search from '../pages/Search'
import Hotel from '../pages/Hotel'
import Contacts from '../pages/Contacts'
import Profile from '../pages/Profile'
import { AuthContext } from '../contexts/AuthContext'

export default function Router() {
    const {user} = useContext(AuthContext)
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route index path='*' element={<Home />}/>
            <Route path="hotels" element={<Search />}/>
            <Route path="hotels/:id" element={<Hotel />}/>
            <Route path="contacts" element={<Contacts />}/>
            {!user ?
            ' '
            :
            <Route 
            path="profile" 
            element={<Profile />}            
            />
            }
            
        </Routes>

      </BrowserRouter>
  )
}
