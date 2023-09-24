import React, { useContext } from 'react'
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { BsGeoAlt } from 'react-icons/bs';
import IconBtn from './IconBtn';

import imgHotelTest from '../img/testHotel.webp'
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import { api_url } from '../pages/Search';




export default function HotelCard({price, title, location, name, rating, img, id}) {

    const {user} = useContext(AuthContext)


    const addToLiked = async(id) => {
        try{
            const result = await axios.put(`${api_url}/user/${user._id}`, {liked:id})
            console.log("my result - " + result.response.data);
        }
        catch(err){
            console.log(err.response.data)
        }
        
    }


  return (
    <div className='relative h-[470px] shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-lg  cursor-pointer mt-7'>
        <div>
            <div className=' overflow-hidden rounded-t-lg '>
                <img className=' hover-img rounded-t-lg' src={img || imgHotelTest}/>
            </div>
            <div className=' flex justify-between w-full h-[52px] mt-[-52px]'>
                <div className=' z-[990] p-3 font-bold rounded-t-xl text-xl ml-5 bg-[#e65051] text-white'>
                    {price} Kč
                </div>

                <div className='mr-5 z-[990]'><IconBtn onclick={() => addToLiked(id)}><AiOutlineHeart size={25}/></IconBtn></div>
            </div>
        </div>
        <div className='p-3 text-lg'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <div className='mt-2'>
                <h2>{name}</h2>
                <div className='flex items-center'><BsGeoAlt/> <h1>{location}</h1></div>
                <div className='flex items-center'><AiOutlineStar/> <h1>{rating}</h1></div>
            </div>
        </div>
        
        <div className='absolute bottom-0'>
            <div className='flex gap-4 p-3 text-sm'>
                <h1>Pro 2 osoby</h1>
                <h1>Polopenze</h1>
                <h1>Až 12 procedur</h1>
            </div>
        </div>
        

    </div>
  )
}
