import { createContext, ReactNode, useState } from "react";
import { MoviesI } from "../Interfaces/MoviesI";
import { ContextI } from "../Interfaces/Context";

export const MovieContext = createContext({} as ContextI);

export interface MovieContextPropsI {
  children: ReactNode;
}

export const MovieContextProvider = ({ children }: MovieContextPropsI) => {
  const [selectedMovie, setSelectedMovie] = useState<MoviesI>();
  const [numberOfSeats, setNumberOfSeats] = useState<number>(0);
  return (
    <MovieContext.Provider
      value={{
        selectedMovie,
        setSelectedMovie,
        numberOfSeats,
        setNumberOfSeats,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
