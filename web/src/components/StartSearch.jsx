import React, { useContext, useState } from 'react'
import BasicInput from './BasicInput'
import DatePicker from './DatePicker';
import LocationDropdown from './LocationDropdown';
import TypeDropdown from './TypeDropdown';
import { NewSearchContext } from '../contexts/NewSearchContext';
import { Link, Navigate } from 'react-router-dom';

export default function StartSearch() {

    //const {dispatch} = useContext(NewSearchContext)
    const [openDate, setOpenDate]= useState(false)
/*
    function handleSearch(){
        dispatch({type:"NEW_SEARCH", payload:{city, date, options}})
        Navigate("/hotels", {state: {city, date, options}})
    }
*/
  return (
    <div className="startSearch">
        <div className="grid grid-cols-4 items-center gap-4 grid-flow-col">
            <div className='p-2'>
            
                <div>
                <h1 className='text-lg'>Typ pobytu</h1>
                <TypeDropdown/>
                </div>
                
            </div>

            <div className='flex justify-center items-center p-2'>
                <div className=" shrink basis-full">
                <h1 className='text-lg'>Lokalita</h1>
                <LocationDropdown/>
                </div>
            
            </div>

            <div className="flex flex-col justify-around items-center p-2">
            <div className=" shrink basis-full">
                <h1 className='text-lg'>Date</h1>
                <DatePicker/>
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <Link to={'hotels'}><button className='primary-btn'>Zobrazit nabídky pobytů</button></Link>
            </div>

        </div>
        
    </div>
  )
}
