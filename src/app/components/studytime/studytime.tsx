"use client"

import {useState} from 'react'
import Countdown from 'react-countdown';

export default function Studytime() {

    const [min, setMin] = useState();

    return(
        <div className="text-black text-7xl grid grid-cols-1 grid-rows-4 py-6 gap-9">
                <div className=" justify-center flex col-start-1 col-span-1 row-start-1 row-span-1 ">
                    <button onClick={() => setMin(15)}>
                        
                        <p className="hover:bg-red-300 border-4 rounded-xl border-zinc-950">15 min</p>
                    </button>
                </div>
                <div className=" justify-center flex col-start-1 col-span-1 row-start-2 row-span-1">
                    <button onClick={() => setMin(30)}>
                        <p className="hover:bg-red-300 border-4 rounded-xl border-zinc-950">30 min</p>
                    </button>
                </div>
                <div className="justify-center flex col-start-1 col-span-1 row-start-3 row-span-1">
                    <button onClick={() => setMin(60)}>
                        <p className="hover:bg-red-300 border-4 rounded-xl border-zinc-950">60 min</p>
                    </button>
                </div>
                <div className="justify-center flex col-start-1 col-span-1 row-start-4 row-span-1">
                    <button onClick={() => setMin(120)}>
                        <p className="hover:bg-red-300 border-4 rounded-xl border-zinc-950">120 min</p>
                    </button>
                </div>

        </div>


    )
}