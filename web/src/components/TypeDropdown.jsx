import React, { useContext, useEffect, useRef, useState } from 'react'
import Select from 'react-select'
import { SearchContext } from '../contexts/SearchContext'
import { useSearchParams } from 'react-router-dom';


export default function LocationDropdown({type, handleChange, options}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const {cities, setCities, changeCities, citiesInput, setCitiesInput} = useContext(SearchContext)

  useEffect(() => {
    let array = []
    /*
    searchParams.get('cities').split(',').map((item) => {
      const newObject = {label:item, value:item}
      array.push(newObject)
    })
    setCitiesInput(array)*/
  }, [])


  return (
    <>
    <Select 
    closeMenuOnSelect={false} 
    onChange={changeCities} 
    options={options} 
    isMulti
    theme={(theme) => ({
      ...theme,
      borderRadius: 20,
      colors: {
        ...theme.colors,
        primary25: '#fcb9ba',
      },
    })}
    className="react-select-container"
    classNamePrefix="react-select"
    />
        

    </>
  )
}
