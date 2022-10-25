import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { request } from '../../api/request'
import { Container } from '../../components/Container'
import { Navbar } from '../../components/Navbar'
import SeatCount from '../../components/SeatCount'
import { FETCH_IN_THEATRES, IMAGE_LINK } from '../../constants'
import { MoviesI, MoviesInfoI } from '../../Interfaces/MoviesI'
import { useSession } from "next-auth/react";
import { toast,Toaster } from 'react-hot-toast'

export interface PropsI{
  data:MoviesInfoI
}


export default function Movie({data}:PropsI) {
  const { data: session } = useSession()
const[showSeatCountModal,setShowSeatCountModal]=useState<boolean>(false);
  return (
  <>
  <Navbar/>
  
  <Container>
  <div className=" py-[5rem] px-3">
  <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="image w-full">
      <Image
        className='rounded-md'
        src={data&&IMAGE_LINK+data.backdrop_path}
        width={0}
        height={0}
        objectFit='cover'
        layout='responsive'
        loading='lazy'
        alt='movie thumbnail'
        placeholder='blur'
        blurDataURL='/loginBg.jpg'
        />
      </div>
      <div className="md:col-span-2">
        <p className='text-white text-[2rem]     font-bold'>{data?.title}</p>
      <div className="flex gap-7 mt-4 mb-5 md:mt-2">
      {data?.genres.map(genre=>
          <p key={genre.id} className='text-white text-[1.3rem]      bg-[#0d0d41] w-fit  py-2 px-4 rounded-md'>{genre.name}</p>)}
      </div>
      <p className='text-white text-[1.6rem]   md:mt-5 md:mb-0 mb-5'>Release Date: {data?.release_date}</p>
      <a
      onClick={()=>{session?setShowSeatCountModal(true):toast.error('Login required')}}
              href="#_"
              className="md:mt-5 text-center relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="w-full relative px-6 py-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white text-[1.4rem] ">
                  Book Tickets
                </span>
              </span>
            </a>
      </div>
    </div>
  <div className="mt-8">
<h4 className='text-white text-[2rem] font-bold'>Overview</h4>
       <p className='text-white text-[1.5rem] mt-3'>{data?.overview}</p>
  </div>
  </div>
  </Container>
  {showSeatCountModal&&
  <SeatCount close={setShowSeatCountModal} movie={data}/>
  }
  <Toaster
  position="top-center"
  reverseOrder={false}
  toastOptions={{
    duration:1500,
    style:{fontSize:'1.5rem',fontWeight:500,color:'black'}
  }}
/>
  </>
  )
}






export const getStaticPaths = async () => {
  const { data } = await request.get(FETCH_IN_THEATRES);

  const paths = data.results.map((movie:MoviesI) => {
    return {
      params: { movieId: movie.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context:any) => {
  const id = context.params.movieId;
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);

  return {
    props: {
      data,
    },
  };
}
