import React, { useState } from "react";
import {useForm} from 'react-hook-form'


export default function AvailableRoom(props) {

    const [showroom, setShow] = useState(1);

    
    return (<>
        <div className="grid grid-cols-5 col-span-5 col-start-1 row-span-5 row-start-1 ml-2 auto-rows-auto">

        {showroom==2?
            <div className="col-span-4 col-start-2 row-span-4 row-start-1 ml-4">
                <h1>hello</h1>
            </div>
            :null}
       
            
        <section className="p-2 overflow-y-scroll rounded-lg shadow-inner h-my w-52 bg-gradient-to-b from-green-light/70 to-blue-dark/70">
        <div className="flex flex-row justify-between h-8 pl-2 pr-2 border rounded-lg shadow-md border-green-light hover:bg-blue-dark ">
            <h2 className="mt-0.5 text-base antialiased font-normal text-white ">Room1</h2>
            <button onClick={()=>setShow(2)} type="" className="block w-6 h-6 text-lg font-semibold text-white rounded-xl ntialiased hover:bg-blue-light">+</button>
        </div>
        
        <div className="flex flex-row justify-between h-8 pl-2 pr-2 mt-1 border rounded-lg shadow-md border-green-light hover:bg-blue-dark">
            <h2 className="antialiased font-normal text-white text-md">Room2</h2>
            <button type="" className="w-6 h-6 mt-0.5 font-semibold text-center text-white ntialiased  hover:bg-blue-light text-lg">+</button>
        </div>

        <div className="flex flex-row justify-between h-8 pl-2 pr-2 mt-1 border rounded-lg shadow-md border-green-light hover:bg-blue-dark">
            <h2 className="antialiased font-normal text-white text-md">Room3</h2>
            <button type="" className="w-6 h-6 mt-0.5 font-semibold text-center text-white ntialiased  hover:bg-blue-light text-lg">+</button>
        </div>
        <div className="flex flex-row justify-between h-8 pl-2 pr-2 mt-1 border rounded-lg shadow-md border-green-light hover:bg-blue-dark">
            <h2 className="antialiased font-normal text-white text-md">Room4</h2>
            <button type="" className="w-6 h-6 mt-0.5 font-semibold text-center text-white ntialiased  hover:bg-blue-light text-lg">+</button>
        </div>
        <div className="flex flex-row justify-between h-8 pl-2 pr-2 mt-1 border rounded-lg shadow-md border-green-light hover:bg-blue-dark">
            <h2 className="antialiased font-normal text-white text-md">Room5</h2>
            <button type="" className="w-6 h-6 mt-0.5 font-semibold text-center text-white ntialiased  hover:bg-blue-light text-lg">+</button>
        </div>
        <div className="flex flex-row justify-between h-8 pl-2 pr-2 mt-1 border rounded-lg shadow-md border-green-light hover:bg-blue-dark">
            <h2 className="antialiased font-normal text-white text-md">Room5</h2>
            <button type="" className="w-6 h-6 mt-0.5 font-semibold text-center text-white ntialiased  hover:bg-blue-light text-lg">+</button>
        </div>
        <div className="flex flex-row justify-between h-8 pl-2 pr-2 mt-1 border rounded-lg shadow-md border-green-light hover:bg-blue-dark">
            <h2 className="antialiased font-normal text-white text-md">Room5</h2>
            <button type="" className="w-6 h-6 mt-0.5 font-semibold text-center text-white ntialiased  hover:bg-blue-light text-lg">+</button>
        </div>
        <div className="flex flex-row justify-between h-8 pl-2 pr-2 mt-1 border rounded-lg shadow-md border-green-light hover:bg-blue-dark">
            <h2 className="antialiased font-normal text-white text-md">Room5</h2>
            <button type="" className="w-6 h-6 mt-0.5 font-semibold text-center text-white ntialiased  hover:bg-blue-light text-lg">+</button>
        </div>
        <div className="flex flex-row justify-between h-8 pl-2 pr-2 mt-1 border rounded-lg shadow-md border-green-light hover:bg-blue-dark">
            <h2 className="antialiased font-normal text-white text-md">Room5</h2>
            <button type="" className="w-6 h-6 mt-0.5 font-semibold text-center text-white ntialiased  hover:bg-blue-light text-lg">+</button>
        </div>
        <div className="flex flex-row justify-between h-8 pl-2 pr-2 mt-1 border rounded-lg shadow-md border-green-light hover:bg-blue-dark">
            <h2 className="antialiased font-normal text-white text-md">Room5</h2>
            <button type="" className="w-6 h-6 mt-0.5 font-semibold text-center text-white ntialiased  hover:bg-blue-light text-lg">+</button>
        </div>
        <div className="flex flex-row justify-between h-8 pl-2 pr-2 mt-1 border rounded-lg shadow-md border-green-light hover:bg-blue-dark">
            <h2 className="antialiased font-normal text-white text-md">Room5</h2>
            <button type="" className="w-6 h-6 mt-0.5 font-semibold text-center text-white ntialiased  hover:bg-blue-light text-lg">+</button>
        </div>
        <div className="flex flex-row justify-between h-8 pl-2 pr-2 mt-1 border rounded-lg shadow-md border-green-light hover:bg-blue-dark">
            <h2 className="antialiased font-normal text-white text-md">Room5</h2>
            <button type="" className="w-6 h-6 mt-0.5 font-semibold text-center text-white ntialiased  hover:bg-blue-light text-lg">+</button>
        </div>
        <div className="flex flex-row justify-between h-8 pl-2 pr-2 mt-1 border rounded-lg shadow-md border-green-light hover:bg-blue-dark">
            <h2 className="antialiased font-normal text-white text-md">Room5</h2>
            <button type="" className="w-6 h-6 mt-0.5 font-semibold text-center text-white ntialiased  hover:bg-blue-light text-lg">+</button>
        </div>
        <div className="flex flex-row justify-between h-8 pl-2 pr-2 mt-1 border rounded-lg shadow-md border-green-light hover:bg-blue-dark">
            <h2 className="antialiased font-normal text-white text-md">Room5</h2>
            <button type="" className="w-6 h-6 mt-0.5 font-semibold text-center text-white ntialiased  hover:bg-blue-light text-lg">+</button>
        </div>
        <div className="flex flex-row justify-between h-8 pl-2 pr-2 mt-1 border rounded-lg shadow-md border-green-light hover:bg-blue-dark">
            <h2 className="antialiased font-normal text-white text-md">Room5</h2>
            <button type="" className="w-6 h-6 mt-0.5 font-semibold text-center text-white ntialiased  hover:bg-blue-light text-lg">+</button>
        </div>
        </section>

        </div>
   </> )

}