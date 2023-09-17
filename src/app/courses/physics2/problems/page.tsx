"use client"
import TimeComponent from '@/app/components/studytime/time'
import App from "@/app/components/studytime/App"
import { useSearchParams } from 'next/navigation';
import PhyAnswer3 from '@/app/components/input/physics2/phyanswer3'
import PhyAnswer4 from '@/app/components/input/physics2/phyanswer4'

export default function Problems() {
    const router = useSearchParams();
    const  time  = router.get('time') ?? "1";
    return(
        <div className="text-black py-8">
            <div className="text-6xl mb-4 font-medium">
                    <div className="justify-center flex mb-6"><App time={Number(time)}/> </div>
                    <div className="justify-center flex text-5xl">Physics II</div>
                  
            </div>

            <div className="text-3xl mb-4 text-justify justify-center flex">
                    <div className="w-1/2 justify-center flex">
                    1. The potential difference between two plates of a parallel plate capacitor equals 3,000
                    V. An electron is launched from the negative plate with a speed of 1.5×107m/s.
                    </div>  
            </div>
            <div className="text-2xl mb-4 text-justify justify-center flex">
                <div className="w-1/3 justify-center flex">
                    a) Derive a symbolic answer in terms of system parameters and calculate a numerical value
                     for the speed with which the electron strikes the positive plate.
                </div>
            </div>
            <div>
                
                <PhyAnswer3/>
                
            </div>
            <div className="text-2xl mb-4 text-justify justify-center flex">
                <div className="w-1/3 justify-center flex">
                b) During this process, what is the electron’s change in kinetic energy in electron volt?
                </div>
            </div>
            <div>
                <PhyAnswer4/>
                

            </div> 
        </div>
    )
}