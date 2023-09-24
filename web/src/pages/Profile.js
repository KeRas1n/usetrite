import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { api_url } from './Search'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import HotelCard from '../components/HotelCard'

export default function Profile() {
    const {user, dispatch} = useContext(AuthContext)

    const navigate = useNavigate()

    useEffect(() => {
        if(!user){
            navigate('/')
        }
    }, [])
    
    const handleLogout = async(e) => {
      e.preventDefault();
      dispatch({type:"LOGOUT"})
      try{
          /*const res = await axios.post(`${api_url}/auth/login`, credentials)
          dispatch({type:"LOGIN_SUCCESS", payload:res.data})*/
          localStorage.removeItem("user")
      }
      catch(err){
          dispatch({type:"LOGIN_FAILURE", payload:err.response.data})
      }
  }
    


    console.log(user)
  return (
    <div className='wrapper-product'>
      <div className='flex flex-col justify-center'>
        <div className='mt-10'>
            <h1 className='text-4xl font-bold'>Váš účet</h1>
            <div className='p-14 bg-white rounded-lg flex flex-col justify-start items-center'>
              <AiOutlineUser size={30}/>
              <div className='font-bold'>{user.username}</div>
              <div>{user.email}</div>
              <div>0 kreditu</div>
            </div>
          </div>

        <div className='mt-10'>
          <h1 className='text-xl'>Oblíbené nabídky</h1>
          <div className='p-14 bg-white rounded-lg'>
            
            {!user.liked 
            ?
            <h1>Zatím nemáte žádné oblíbené nabídky.</h1>
            :
            user.liked
            }

          </div>
        </div>
        <button onClick={handleLogout} className='mt-10 primary-btn'>Odhlásit se</button>

      </div>
      

      

    </div>
  )
}
