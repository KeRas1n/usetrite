import React, { useContext, useEffect, useState } from 'react'
import HotelCard from '../components/HotelCard'
import SearchSideBar from '../components/SearchSideBar'
import useFetch from '../hooks/useFetch'
import Loader from '../components/Loader'
import { SearchContext } from '../contexts/SearchContext'
import { Link, useSearchParams } from 'react-router-dom'

export const api_url = "http://localhost:8800/api";

export default function Search() {
  
  
  const [searchParams, setSearchParams] = useSearchParams();

  const {cities, setCities, priceRange} = useContext(SearchContext)

  //const [url, setUrl] = useState(`${api_url}/hotels?limit=10&cities=${cities.join(',')}`)

  console.log("cities - " + cities)
  
  const {data, loading, error, reFetch} = useFetch(
    `${api_url}/hotels?limit=10&cities=${cities? cities.join(',') : ""}&min=${priceRange[0]}&max=${priceRange[1]}`
    )


useEffect(() => {
  searchParams.get('cities')
  ?
  setCities(searchParams.get('cities').split(','))
  :
  console.log('Refetching...')
  

  
  console.log(`${api_url}/hotels?limit=10&cities=${cities.join(',')}&min=${priceRange[0]}&max=${priceRange[1]}`)
  reFetch()
}, [])
  

  useEffect(() => {
    if(cities){
      setSearchParams({cities: cities.join(',')})
    }
    reFetch()
  }, [cities])
  




  return (
    <div className="wrapper flex flex-row gap-12">
      <SearchSideBar/>

      <div className='wrap'>
        

        <div className='flex justify-center mt-10'>
          <div className='grid grid-cols-3 gap-12 w-full'>

            {loading ?

            <div className='flex flex-row w-full justify-center'>
              <Loader loading={loading}/>
            </div>
          :
          data.map(item => {
            return (
            <Link key={item._id}  to={`${item._id}`}>
            <HotelCard
            img = {item.photos[0]}
            key={item._id} 
            price={item.cheapestPrice} 
            title={item.title} 
            name={item.name} 
            location={item.city}
            rating = {item.rating || "4/5"}
            id = {item._id}
            />
            </Link>
            )
          })
          
          }
            
          
 
          </div>
          
        </div>
      </div>
    </div>
  )
}
