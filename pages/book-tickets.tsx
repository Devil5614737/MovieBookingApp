import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "../components/Container";
import SeatCount from "../components/SeatCount";
import { MovieContext } from "../context/MovieContext";
import { ContextI } from "../Interfaces/Context";
import { toast, Toaster } from "react-hot-toast";
import {useSession} from 'next-auth/react'

export interface TimingsI {
  id: number;
  data: string;
  active?: boolean;
}

export interface SeatsI {
  id: number;
  occupied: boolean;
  selected?: boolean;
}

export default function BookTickets() {
  const router = useRouter();
  const {data:session}=useSession()
  const { numberOfSeats, selectedMovie,setNumberOfSeats,setSelectedMovie } = useContext<ContextI>(MovieContext);
  const [timings, setTimings] = useState<TimingsI[]>([
    {
      id: 1,
      data: "3:00 PM",
    },
    {
      id: 2,
      data: "6:00 PM",
    },
    {
      id: 3,
      data: "9:00 PM",
    },
  ]);
  const [seats, setSeats] = useState<SeatsI[]>([
    {
      id: 1,
      occupied: true,
    },
    {
      id: 2,
      occupied: false,
    },
    {
      id: 3,
      occupied: false,
    },
    {
      id: 4,
      occupied: false,
    },
    {
      id: 5,
      occupied: true,
    },
    {
      id: 6,
      occupied: false,
    },
    {
      id: 7,
      occupied: false,
    },
    {
      id: 8,
      occupied: true,
    },
    {
      id: 9,
      occupied: true,
    },
    {
      id: 10,
      occupied: false,
    },
    {
      id: 11,
      occupied: false,
    },
    {
      id: 12,
      occupied: false,
    },
    {
      id: 13,
      occupied: false,
    },
    {
      id: 14,
      occupied: false,
    },
  ]);
  const [selectedSeatCount, setSelectedSeatCount] = useState<number>(1);

  const handleTimings = (id: number) => {
    setTimings(
      timings.map((timing) =>
        timing.id === id
          ? { ...timing, active: true }
          : { ...timing, active: false }
      )
    );
  };

  const handleSeatBooking = (id: number) => {
    setSelectedSeatCount(selectedSeatCount + 1);
    if (selectedSeatCount > numberOfSeats) {
      toast.error(`only ${numberOfSeats} are allowed`);
    }
    setSeats(
      seats.map((seat) =>
        seat.id === id
          ? {
              ...seat,
              selected: selectedSeatCount <= numberOfSeats && !seat.selected,
            }
          : seat
      )
    );
  };




  return (
 session?  <>
 <nav className="bg-full bg-black py-4">
   <Container>
     <div className="p-3 flex items-center justify-between">
       <p
         onClick={() => router.back()}
         className="cursor-pointer flex items-center gap-3 text-white text-[1.7rem] font-medium"
       >
         <span>
           <ArrowLeftIcon className="w-[2rem] h-[2rem]" />
         </span>{" "}
         Back
       </p>
       <div className="flex items-center gap-7">
         <p className="text-white text-[1.7rem] font-medium">
           Number of seats({numberOfSeats})
         </p>
         <p className="text-white text-[1.7rem] font-medium">
           {" "}
           {selectedMovie?.title}
         </p>
       </div>
     </div>
   </Container>
 </nav>
 <div className=" mt-5">
   <Container>
     <div className="px-3">
       <h4 className="text-white font-semibold text-[1.8rem]">Timings</h4>
       <div className="mt-9 flex items-center gap-7">
         {timings.map((timing) => (
           <button
             style={{
               backgroundColor: timing.active ? "white" : "transparent",
               color: timing.active ? "black" : "white",
             }}
             onClick={() => handleTimings(timing.id)}
             key={timing.id}
             className="text-white w-fit border-2 border-white py-2 px-6 hover:bg-white hover:text-black text-[1.5rem] rounded-md shadow-2xl font-medium transition-all"
           >
             {timing.data}
           </button>
         ))}
       </div>
       <div className="container mt-[4rem] grid place-items-center">
         <div className="content">
           <div className="flex items-center gap-9 bg-slate-900 px-6 py-3 rounded-lg">
             <div className="flex items-center gap-2">
               <div className="w-8 h-8 bg-blue-300 rounded-t-full"></div>
               <p className="text-white text-2xl">selected</p>
             </div>
             <div className="flex items-center gap-2">
               <div className="w-8 h-8 bg-white rounded-t-full"></div>
               <p className="text-white text-2xl">occupied</p>
             </div>
             <div className="flex items-center gap-2">
               <div className="w-8 h-8 bg-slate-600 rounded-t-full"></div>
               <p className="text-white text-2xl">available</p>
             </div>
           </div>
           <div className="screen bg-white w-full  h-[6rem] mt-[2rem] -skew-x-[15deg] drop-shadow-lg"></div>
           <div className="mt-[4rem] grid grid-cols-4 gap-6">
             <>
               {seats.map((seat) => (
                 <button
                   onClick={() => handleSeatBooking(seat.id)}
                   key={seat.id}
                   disabled={
                     seat.occupied || selectedSeatCount > numberOfSeats
                   }
                   className={`w-8 h-8 bg-${
                     seat.occupied ? "white" : "slate-600"
                   } rounded-t-full `}
                   style={{
                     background: seat.selected && ("#93C5FD" as any),
                   }}
                 ></button>
               ))}
             </>
           </div>
           <a
             onClick={() =>
             {  toast.success(`SuccessFully Purchased:
${selectedMovie?.title} 
Price :${10 * numberOfSeats}`)
router.push('/movies')
setNumberOfSeats(0)


           }  }
             href="#_"
             className="mt-7 text-center w-full relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
           >
             <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
             <span className="w-full relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
               <span className="relative text-white text-[1.8rem] ">
                 Buy Now
               </span>
             </span>
           </a>
         </div>
       </div>
     </div>
   </Container>
 </div>
 <Toaster
   position="top-center"
   reverseOrder={false}
   toastOptions={{
     style: { fontSize: "1.5rem" },
     duration: 1500,
   }}
 />
 </> 
 : <>
 <p className="text-white font-bold text-[2rem]">Not authenticated</p>
 <p onClick={()=>router.push('/movies')} className="text-white font-bold cursor-pointer text-[1.5rem] hover:underline">redirect</p>
 </>
 
  );
}
