import React from 'react'
import prahaImg from '../img/praha.jpg'
import useFetch from '../hooks/useFetch'
import HotelCard from './HotelCard';
import Loader from './Loader';
import { Link } from 'react-router-dom';

export default function Featured() {
     const api_url = "http://localhost:8800/api"

    const {data, loading, error, reFetch} = useFetch(`${api_url}/hotels?featured=true&limit=3`)

    //console.log(`${process.env.REACT_APP_API}/hotels/countByCity?cities=madrid,paris,Praha`)
    console.log(data)



  return (
    <div className='mt-10'>
      <h1 className='text-3xl'>Nejprodávanější pobyty</h1>
      {loading ? 
      <div className='flex justify-center gap-2 mt-5'>
        <Loader loading={loading}/>
      </div>
      
      :
      <>
      
      <div>
        
          <div className='grid grid-cols-3 gap-12 w-full'>
          {
          data.map(item => (
            <Link key={item._id}  to={`hotels/${item._id}`}>
            <HotelCard
             img = {item.photos[0]}
             
             price={item.cheapestPrice} 
             title={item.title} 
             name={item.name} 
             location={item.city}
             rating = {item.rating || "4/5"}
             id = {item._id}
             />
             </Link>

          ))
        }
          </div>
          
        </div>
        
    
        </>
      }
    </div>
  )
}
