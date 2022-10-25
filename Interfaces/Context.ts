import { MoviesI } from "./MoviesI"

export interface ContextI{
    selectedMovie?:MoviesI;
    setSelectedMovie:(selectedMovie:MoviesI)=>void;
    numberOfSeats:number;
    setNumberOfSeats:(numberOfSeats:number)=>void
}