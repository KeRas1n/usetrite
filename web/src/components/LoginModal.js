import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { api_url } from '../pages/Search'

export default function LoginModal({isActive, setActive, children}) {

    const [credentials, setCredentials] = useState({
        username:undefined,
        password:undefined,
    })

    const {loading, error, dispatch} = useContext(AuthContext)

    const navigate = useNavigate()

    const [loginPage, setLoginPage] = useState(true)


    function handleChange(e){
        setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
    }

    const handleLogin = async(e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post(`${api_url}/auth/login`, credentials)
            dispatch({type:"LOGIN_SUCCESS", payload:res.data})
            setActive(false)
        }
        catch(err){
            dispatch({type:"LOGIN_FAILURE", payload:err.response.data})
        }
    }

    const handleRegister = async(e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try{
            const res = await axios.post(`${api_url}/auth/register`, credentials)
            dispatch({type:"LOGIN_SUCCESS", payload:res.data})
            setActive(false)
        }
        catch(err){
            dispatch({type:"LOGIN_FAILURE", payload:err.response.data})
        }
    }


  return (
    <div className={isActive ? 'modal active': 'modal'} onClick={() => setActive(false)}>
        <div className='modal_content flex flex-col gap-1' onClick={(e) => e.stopPropagation()}>
            <div className='w-full flex justify-center items-center'>
                <button onClick={() => setLoginPage(true)} className={`${loginPage? 'activeTab' : ''} tab w-full`}>Přihlásit se</button>
                <button onClick={() => setLoginPage(false)} className={`${!loginPage? 'activeTab' : ''} tab  w-full`}>Registrovat se</button>
            </div>

            <div className='mt-14'>
            {
                loginPage
                ?
                <div className='flex flex-col justify-center items-center gap-1'>
                <h1 className='text-4xl'>Chci se přihlásit</h1>
                <input className='mt-10 select' type='text' placeholder='Username' id='username' onChange={handleChange}/>
                <input className='select' type='password' placeholder='Password' id='password' onChange={handleChange}/>
                <button disabled={loading} onClick={handleLogin} className='mt-5 w-full primary-btn'>Login</button>
                <a href='#' className='link'>Zapomněli jste heslo?</a>
                {error && <span className='err'>{error.message}</span>}
            </div>

            :
            <div className='flex flex-col justify-center items-center gap-1'>
                <h1 className='text-4xl'>Chci se registrovat</h1>
                <input className='mt-10 select' type='text' placeholder='Username' id='username' onChange={handleChange}/>
                <input className='select' type='email' placeholder='Email' id='email' onChange={handleChange}/>
                <input className='select' type='password' placeholder='Password' id='password' onChange={handleChange}/>
                <button disabled={loading} onClick={handleRegister} className='mt-5 w-full primary-btn'>Register</button>
                {error && <span className='err'>{error.message}</span>}
            </div>

            }
            </div>
            
        </div>
    </div>
  )
}
