"use client"
import TimeComponent from '@/app/components/studytime/time'
import App from "@/app/components/studytime/App"
import { useSearchParams } from 'next/navigation';
import Answer from '@/app/components/input/answer'

export default function Problems() {
    const router = useSearchParams();
    const  time  = router.get('time') ?? "1";
    return(
        <div className="justify-center flex text-black text-4xl py-8">

            
            <div className="text-black py-8">
                
            
                <div className="text-6xl mb-4 font-medium">
                    <div className="justify-center flex mb-6"><App time={Number(time)}/> </div>
                    
                    <div className="justify-center flex">Physics II</div>
                  
                </div>
                <div className="justify-center flex text-3xl mb-4">
                    1. The potential difference between two plates of a parallel plate capacitor equals 3,000
                     V. An electron is launched from the negative plate with a speed of 1.5×107m/s.
                     <br /> a) Derive a symbolic answer in terms of system parameters and calculate a numerical value
                     for the speed with which the electron strikes the positive plate. 
                    
                     <br />
                     b) During this process, what is the electron’s change in kinetic energy in electron volt?  


                </div>


                <div className="justify-center flex m-8 text-6xl font-medium">
                Solutions:
                </div>
                <div>
                    <p>
                        a) 3.7 x 10&#8311; m/s 
                    </p>
                </div>
                <div>
                    b) 3000eV
                </div>

            
            
            

        </div>







            
        </div>
    )
}