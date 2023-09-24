import React from 'react'
import useFetch from '../hooks/useFetch'
import { api_url } from './Search'
import { Link, useLocation, useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import { AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { IoMdArrowBack } from 'react-icons/io';
import { BsCart2 } from 'react-icons/bs';
import testImg from '../img/testHotel.webp'
import IconBtn from '../components/IconBtn'

export default function Hotel() {
  const params = useParams()
  const {data, loading, error, reFetch} = useFetch(`${api_url}/hotel/${params.id}`)

  const location = useLocation()

  console.log(data)

  return (
  <>
  <div className='wrapper-product p-5 mt-10'>

  {loading ?
    <Loader/>
  :


    <div className='flex flex-col' id='photos'>
      <Link to=".." relative="path"><div className='text-[#E75354] text-3xl'><IoMdArrowBack/></div></Link>
      
      <div className='text-4xl font-bold mt-5'>{data.title}</div>
      <div className='text-xl'>{data.name}</div>
      <div className='mt-2 flex text-2xl items-center text-yellow-500'><AiOutlineStar />{data.rating || "4/5"}</div>

      <div className='flex items-center mt-5 gap-1 rounded-lg'>
        <div className='w-[935] '>
          <img width={935} className='rounded-l-lg' src={/*data.photos[0] ||*/ testImg}/>
        </div>

        <div className='grid grid-cols-2 w-[935] gap-1'>
          <img src={ testImg}/>
          <img src={ testImg} className='rounded-r-lg'/>
          <img src={ testImg} />
          <div className='relative'>
            <div className='absolute top-[50%]'>MORE PHOTOS</div>
            <img src={ testImg} className='rounded-r-lg'/>
          </div>
        </div>

      </div>
      <div className='rounded-t-lg p-5 bg-white shadow-xl text-lg border-b-2'>
        <div className='flex mt-5 justify-around '>
          <div className='flex items-center'> <AiOutlineStar size={35}/> Snídaně formou bufetu</div>
          <div className='flex items-center'> <AiOutlineStar size={35}/> Večeře formou bufetu</div>
          <div className='flex items-center'> <AiOutlineStar size={35}/> Vstup do bazénu neomezeně</div>
          <div className='flex items-center'> <AiOutlineStar size={35}/> Fitness centrum zdarma</div>
        </div>

        

      </div>
      <div className='sticky top-[90px] rounded-b-lg p-5 bg-white shadow-xl'>
        <div className='flex items-center justify-between'>
          <div className='flex gap-10 text-lg font-bold'>
            <a className='link' href='#photos'>Photo</a>
            <a className='link' href='#desc'>Description</a>
            <a className='link' href='#'>Comments</a>
            <a className='link' href='#'>Lokalita</a>

          </div>
          <div className='flex gap-2 items-center'>
            <div className='pr-5 text-2xl font-bold text-[#F25456]'>od {data.cheapestPrice}kč</div>
            <IconBtn><AiOutlineHeart size={30}/></IconBtn>
            <button className='text-xl primary-btn flex items-center gap-1'> <BsCart2 size={30}/>Vybrat variantu</button>
          </div>
          </div>
      </div>
    

    <div className='mt-10 p-5'>
      <h1 className='text-3xl font-bold'>Varianty</h1>


      <div className='mt-4'>
        <div className='cursor-pointer mt-1 w-full bg-white p-5 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl'>
          <div className='flex items-center justify-around text-xl'>
            <input type='radio'/>
            <h1>999 kc</h1>
            <h1>King size</h1>
            <h1>2 osoby</h1>
          </div>
        </div>

      </div>



    </div>



    <div className='p-5' id='desc'>
      <h1 className='text-3xl font-bold'>O ubytování</h1>

      <div className='text-lg'>
        {data.desc} Lorem, ipsum dolor sit amet consectetur adipisicing elit. At tempore odit vel dignissimos asperiores exercitationem quaerat perspiciatis laborum neque, quidem temporibus inventore, corrupti placeat voluptatibus delectus voluptas. Voluptates, ipsa doloremque.
        Velit porro eligendi eveniet in rerum dolore pariatur eaque. Laborum, impedit animi possimus, nemo quam eaque, temporibus nihil quaerat perferendis eius tempore ipsam molestiae vel eveniet nulla modi nesciunt exercitationem?
        Molestiae aut rem obcaecati repellendus sit dolorem provident esse repudiandae eius enim sint, consequuntur ea et adipisci tempora in suscipit voluptate corrupti consectetur eaque aspernatur deleniti. Hic porro excepturi labore?
        A illo aut quo incidunt ipsum officia neque ea dolorum debitis expedita, dignissimos sapiente nisi impedit odit, ducimus soluta amet ullam pariatur nemo esse porro quisquam eligendi. Vel, iste ipsa.
        Impedit unde quia amet corrupti? Inventore natus impedit maxime sapiente quia corrupti ipsum vel neque sed aspernatur corporis minima sequi vitae dolor, eius unde eum, autem nesciunt quo necessitatibus. Atque!
        Maxime, quod! Officiis, cumque eius! Aut molestias libero eum tenetur accusantium autem impedit distinctio cum minus sunt enim officia ut labore officiis, error soluta porro voluptas dolor corrupti veritatis. Temporibus.
        Deserunt temporibus perspiciatis a dolorem facilis excepturi corporis eius? Eveniet tenetur laboriosam nihil, aliquam earum praesentium ipsam non provident assumenda nemo, magni numquam rem alias ipsa. Quos aspernatur maxime iste.
        Harum, eligendi, eaque at, adipisci explicabo veniam rerum consequuntur esse quod sint obcaecati eius incidunt? Est odio praesentium mollitia, fugit voluptatem nihil autem repellendus optio dicta debitis quasi illo libero.
        Sequi accusamus, nisi sunt totam sit maxime odit, asperiores dolorum nesciunt quidem suscipit quaerat optio consequatur dolores reiciendis dolore! Voluptates, omnis! Quidem iure eaque facere, eum ullam rerum cumque veritatis?
        Ipsa ut aperiam suscipit autem odio et voluptas dicta magnam atque nam voluptatem id nemo modi labore culpa, delectus nulla repudiandae illum ex, voluptates molestias magni quas asperiores! Veritatis, ea.
      </div>

    </div>
    
    
    
    
    </div>
    
      
    
  



  }
  </div>
    </>
  )
}
