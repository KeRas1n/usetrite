import React from 'react'
import prahaImg from '../img/praha.jpg'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom';
import Loader from './Loader';

export default function Cities() {
     const api_url = "http://localhost:8800/api"

    const {data, loading, error, reFetch} = useFetch(`${api_url}/hotels/countByCity?cities=madrid,paris,Praha`)

    //console.log(`${process.env.REACT_APP_API}/hotels/countByCity?cities=madrid,paris,Praha`)
    console.log(data)



  return (
    <div className='flex justify-center gap-2 mt-16'>
      {loading ? 
      <Loader loading={loading}/>
      
      :
      <>
      <Link to={`/hotels?cities=madrid`}>
        <div className='relative rounded-lg w-64'>
        <div className='relative overflow-hidden rounded-lg'>
            <img src={prahaImg} className='hover-img rounded-lg muted-img'/>
          </div>
            <div className='absolute top-0 p-2 text-white font-bold text-3xl'>
                <h1>Madrid</h1>
                <h1>{data[0]} hotels</h1>
            </div>
        </div>
      </Link>

      <Link to={`/hotels?cities=paris`}>
        <div className='relative rounded-lg w-64'>
          <div className='relative overflow-hidden rounded-lg'>
            <img src={prahaImg} className='hover-img rounded-lg muted-img'/>
          </div>
            
            <div className='absolute top-0 p-2 text-white font-bold text-3xl'>
                <h1>Paris</h1>
                <h1>{data[1]} hotels</h1>
            </div>
        </div>
      </Link>

      <Link to={`/hotels?cities=Praha`}>
        <div className='relative rounded-lg w-64'>
        <div className='relative overflow-hidden rounded-lg'>
            <img src={prahaImg} className='hover-img rounded-lg muted-img'/>
          </div>
            <div className='absolute top-0 p-2 text-white font-bold text-3xl'>
                <h1>Praha</h1>
                <h1>{data[2]} hotels</h1>
            </div>
        </div>
      </Link>



        </>
      }
    </div>
  )
}
