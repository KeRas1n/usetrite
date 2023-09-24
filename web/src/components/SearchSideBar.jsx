import React, { useContext, useState } from 'react'
import LocationDropdown from './LocationDropdown'
import TypeDropdown from './TypeDropdown'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { SearchContext } from '../contexts/SearchContext';
import DatePicker from './DatePicker';

export default function SearchSideBar() {
    const api_url = "http://localhost:8800/api"

    //const {data, loading, error, reFetch} = useFetch(`${api_url}/hotels?featured=true&limit=3`)
    

    const {cities, setCities, cityOptions, priceRange, setPriceRange, minRange, maxRange} = useContext(SearchContext)

    const rangeSelector = (event, newValue) => {
        setPriceRange(newValue);
        console.log(newValue)
      };


      const changeCities = (selectedOption) => {
        let tempcity;
        let cityArray = []
      
        selectedOption.map((city) => {
          cityArray.push(city.value)
        })
  
        setCities(cityArray);
  
        console.log(cities)
      }

  return (
    <div className='flex flex-col p-5 rounded-lg bg-[#e65051] text-white text-xl mt-16 w-1/4'>
        <div>
        <h1 className='label'>Typ pobytu</h1>
            <div className='text-black'><TypeDropdown/></div>
        </div>

        <div>
        <h1 className='label'>Lokalita</h1>
            <div className='text-black'>
                <LocationDropdown
                handleChange={changeCities}
                options={cityOptions}
             />
             </div>
        </div>

        <div>
        <div className="p-2">
                <div className='relative'>
                <h1 className='label'>Date</h1>
                   <div className='text-black'><DatePicker/></div>
                </div>
                
            </div>
        </div>
        <div>
                    <Slider
                        value={priceRange}
                        onChange={rangeSelector}
                        valueLabelDisplay="auto"
                        min={minRange}
                        max={maxRange}
                    />
                    <div className='flex justify-around w-full'>
                        <div>{priceRange[0]} Kč</div>
                         <div>{priceRange[1]} Kč</div>
                         
                    </div>
                </div>
        
    </div>
  )
}
