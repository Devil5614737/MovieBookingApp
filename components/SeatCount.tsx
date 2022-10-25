import React, { useContext, useState } from "react";
import { ModalOverlay } from "./ModalOverlay";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { MoviesI } from "../Interfaces/MoviesI";
import { MovieContext } from "../context/MovieContext";
import { ContextI } from "../Interfaces/Context";
import { useRouter } from "next/router";

interface PropsI {
  close: (showSeatCountModal: boolean) => void;
  movie: MoviesI;
}

interface SeatsI {
  id: number;
  data: number;
  active?: boolean;
}

const SeatCount = ({ close, movie }: PropsI) => {
  const router = useRouter();
  const { setNumberOfSeats, setSelectedMovie ,numberOfSeats} =
    useContext<ContextI>(MovieContext);
  const [seats, setSeats] = useState<SeatsI[]>([
    {
      id: 1,
      data: 1,
    },
    {
      id: 2,
      data: 2,
    },
    {
      id: 3,
      data: 3,
    },
    {
      id: 4,
      data: 4,
    },
    {
      id: 5,
      data: 5,
    },
    {
      id: 6,
      data: 6,
    },
  ]);

  const handleSeat = (item: SeatsI) => {
    setNumberOfSeats(item.data);
  
    setSeats(
      seats.map((seat) =>
        seat.id === item.id
          ? { ...seat, active: true }
          : { ...seat, active: false }
      )
    );
  };

  const handleTicketBooking = () => {
    setSelectedMovie(movie);
    router.push("/book-tickets");
  };

  return (
    <ModalOverlay>
      <div className="relative bg-dark w-[30rem] h-fit p-6 rounded-md shadow-xl">
        <p className="text-white font-bold text-[2rem]">Select Seat</p>
        <div className="mt-6 flex items-center justify-between flex-wrap">
          {seats.map((item) => (
            <div
            key={item.id}
              style={{
                backgroundColor: item.active ? "white" : "unset",
              }}
              onClick={() => handleSeat(item)}
              className="border-2 border-white w-fit h-fit p-3 py-1 rounded-sm cursor-pointer transition-all"
            >
              <p
                style={{
                  color: item.active ? "black" : "white",
                }}
                className="text-white text-[1.5rem]"
                key={item.id}
              >
                {item.data}
              </p>
            </div>
          ))}
        </div>
        <p className="text-white text-[1.5rem] mt-5 font-medium: ">Price :$10 each</p>
        <p className="text-white text-[1.5rem] mt-5 font-medium: ">Total Price :${numberOfSeats*10}</p>
        <a
          onClick={handleTicketBooking}
          href="#_"
          className="mt-7 text-center w-full relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
        >
          <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
          <span className="w-full relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white text-[1.8rem] ">Proceed</span>
          </span>
        </a>
        <XCircleIcon
          onClick={() => close(false)}
          className="absolute w-[2.5rem] h-[2.5rem] cursor-pointer text-white top-4 right-5"
        />
      </div>
    </ModalOverlay>
  );
};

export default SeatCount;
