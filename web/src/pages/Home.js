import React from 'react'
import forestImg from '../img/forest.webp'
import { BsFillPeopleFill, BsFillPatchCheckFill } from 'react-icons/bs';
import { FaHandsHelping } from 'react-icons/fa';
import StartSearch from '../components/StartSearch';
import HotelCard from '../components/HotelCard';
import Cities from '../components/Cities';
import Featured from '../components/Featured';


export default function Home() {
  
  return (
    <>
    <div className="home-pic">
        <h1 className="font-bold text-4xl ml-auto mr-auto text-center w-1/2">Vyberte si jedinečný pobyt a užijte si dovolenou se vším všudy za dobrou cenu</h1>
      
        <div className='flex items-center justify-center gap-10 text-xl mt-10'>

        <div className='flex items-center'>
        <BsFillPatchCheckFill size={20}/>
        Pobyty osobně ověřujeme
        </div>
        

        <div className='flex items-center'>
        <BsFillPeopleFill size={20}/>
        Více než 900 tisíc spokojených zákazníků
        </div>

        <div className='flex items-center'>
        <FaHandsHelping size={20}/>
        Jsme vám k dispozici a rádi pomůžeme
        </div>

        </div>
      
      </div>
    <div className="wrapper">

      <div className='wrap'>
      <StartSearch/>
      <Cities/>
      <Featured/>
        


        <div className='flex justify-center mt-10'>
          <div className='grid grid-cols-3 gap-12 w-full'>
          <HotelCard price={5000} title="Polské lázně ve 4* hotelu s 12 procedurami" location={"Praha"}/>
          <HotelCard price={5000} title="Polské lázně ve 4* hotelu s 12 procedurami" location={"Praha"}/>
          <HotelCard price={5000} title="Polské lázně ve 4* hotelu s 12 procedurami" location={"Praha"}/>
          <HotelCard price={5000} title="Polské lázně ve 4* hotelu s 12 procedurami" location={"Praha"}/>
          <HotelCard price={5000} title="Polské lázně ve 4* hotelu s 12 procedurami" location={"Praha"}/>
          <HotelCard price={5000} title="Polské lázně ve 4* hotelu s 12 procedurami" location={"Praha"}/>
          <HotelCard price={5000} title="Polské lázně ve 4* hotelu s 12 procedurami" location={"Praha"}/>
 
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}
