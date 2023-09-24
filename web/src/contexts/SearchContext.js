import React, { createContext, useState } from 'react'
//import { useSearchParams } from 'react-router-dom'

export const SearchContext = createContext(null);

export const SearchContextProvider = (props) => {
    const [cities, setCities] = useState([]);
    const [citiesInput, setCitiesInput] = useState([]);
    const [dateState, setDateState] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    ]);

    const minRange = 0
    const maxRange = 100000
    const [priceRange, setPriceRange] = useState([minRange,maxRange])

    const [options, setOptions] = useState([]);
    const [dates, setDates] = useState([]);
    
    const cityOptions = [
      { value: 'Praha', label: 'Praha', className: 'option'}, 
      { value: 'madrid', label: 'Madrid', className: 'option' }, 
      { value: 'paris', label: 'Paris', className: 'option' },
    ]

    const changeCities = (selectedOption) => {
      let cityArray = []
      let cityInputArray = []
    
      selectedOption.map((city) => {
        cityArray.push(city.value)
        cityInputArray.push({label:city.label, value:city.value})
      })

      setCities(cityArray);
      setCitiesInput(cityInputArray)

      console.log("cities - " + cities)
      console.log(citiesInput)
    }
    
    const contextValue = { 
      cities, setCities, cityOptions,changeCities,citiesInput, setCitiesInput,
      priceRange, setPriceRange,
      minRange, maxRange, dateState, setDateState
    
    }


  return (
    <SearchContext.Provider value={contextValue}>

        {props.children}

    </SearchContext.Provider>
  )
}
