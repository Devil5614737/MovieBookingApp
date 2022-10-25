import React from 'react'
import { request } from '../../api/request'
import { Container } from '../../components/Container'
import { MovieCard } from '../../components/MovieCard'
import { Navbar } from '../../components/Navbar'
import { FETCH_IN_THEATRES } from '../../constants'
import { MoviesI } from '../../Interfaces/MoviesI'


interface PropsI{
  movies:MoviesI[];
}

export default function Home({movies}:PropsI) {



  return (
   <>
   <Navbar/>
   <div className="mt-9">
    <Container>
      <div className="grid px-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3rem]">
        {movies?.map(movie=>
    <MovieCard key={movie.id}
    movie={movie}
    />
          )}
      </div>
    </Container>
   </div>
   </>
  )
}



export const getServerSideProps=async()=>{
const {data}=await request.get(FETCH_IN_THEATRES)
const movies=data.results
return {
  props:{movies}
}
}