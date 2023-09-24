import React, { useContext, useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import BasicInput from './BasicInput';
import IconBtn from './IconBtn';
import {Link} from 'react-router-dom'
import logoImg from '../img/logo4.png'
import { SearchContext } from '../contexts/SearchContext';
import { NewSearchContext } from '../contexts/NewSearchContext';
import { AuthContext } from '../contexts/AuthContext';
import LoginModal from './LoginModal';

export default function Header() {
  const {user} = useContext(AuthContext)

  const [loginModalOpen, setLoginModalOpen] = useState(false)

  return (
    <>
    <LoginModal isActive={loginModalOpen} setActive = {setLoginModalOpen}/>
    <div className="header text-black sticky top-0 w-full shadow-xl p-3 ">
      <div className="wrapper">
        <div className='grid grid-cols-3 items-center'>
      
          <Link to={'/'}><img width={340} src={logoImg}/></Link>

          <div className='flex items-center search-block'>
            <BiSearch size={25} className='text-black'/>
            <BasicInput  type='text' placeholder='Hledej destinaci, hotel'/>
          </div>

          <div className='flex justify-end gap-4'>
            <div className='flex flex-col text-right'>
              <Link className='underline text-lg font-bold' to="contacts">Kontakty</Link>
              <a href='' className='underline text-lg font-bold'>Stát se partnerem</a>
            </div>

            <div className='flex items-center gap-2'>
              <IconBtn>
                <div className='flex justify-center items-center text-xs border border-white border-2 top-1 ml-6 text-white absolute rounded-full w-6 h-6 bg-orange-400'>0</div>
                <AiOutlineHeart size={25}/>
                </IconBtn>
              <Link to={user ? 'profile' : '#'}><IconBtn onclick={!user ? () => setLoginModalOpen(true) : console.log('opened')}><AiOutlineUser size={25}/></IconBtn></Link>
            </div>

          </div>

        </div>

      </div>

    </div>
    
    </>
  )
}
