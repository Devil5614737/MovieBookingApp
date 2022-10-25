import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IMAGE_LINK } from '../constants'
import { MoviesI } from '../Interfaces/MoviesI'



interface PropsI{
movie:MoviesI
}

export const MovieCard = ({movie}:PropsI) => {
  return (
<div className="group w-full hover:scale-[1.1] transition-all">
  <Link href={`/movies/${movie.id}`}>
  <div className="w-full transition-all hover:shadow-2xl cursor-pointer  hover:contrast-[1.1] ">
      {movie.backdrop_path?
        <Image
        className='rounded-md'
        src={IMAGE_LINK+movie.backdrop_path}
        width={0}
        height={0}
        objectFit='cover'
        layout='responsive'
        loading='lazy'
        alt='movie thumnail'
        placeholder='blur'
        blurDataURL={IMAGE_LINK+movie.backdrop_path}
        />:<p className='color-white'>preview unavailable</p>
      }
      
    </div>
  </Link>
    <p className='group-hover:text-white text-[#989898] text-center text-[1.4rem] mt-5'>{movie.title}</p>
</div>
  )
}
