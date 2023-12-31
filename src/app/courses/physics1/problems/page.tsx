"use client"
import TimeComponent from '@/app/components/studytime/time'
import App from "@/app/components/studytime/App"
import { useSearchParams } from 'next/navigation';
import PhyAnswer1 from '@/app/components/input/physics1/phyanswer1'
import PhyAnswer2 from '@/app/components/input/physics1/phyanswer2'

export default function Problems() {
    const router = useSearchParams();
    const  time  = router.get('time') ?? "1";
    return(
        <div className="text-black py-8">
                <div className="text-6xl mb-4 font-medium">
                    <div className="justify-center flex mb-6"><App time={Number(time)}/> </div>
                    <div className="justify-center flex text-5xl">Physics I</div>
                  
                </div>
                

                <div className="justify-center flex text-3xl mb-4 text-justify">
                    <div className="w-1/2">
                        1. An airplane accelerates down a runway at 3.20 m/s&#178; for 32.8 s until is 
                        finally lifts off the ground. Determine the distance traveled before takeoff.
                    </div>
                </div>

                <div>
                        <PhyAnswer1/>
                </div>

                <div className="justify-center flex text-3xl mb-4 text-justify"> 
                    <div className="w-1/2">
                     2. An engineer is designing the runway for an airport. Of the planes that will use the airport, 
                     the lowest acceleration rate is likely to be 3 m/s&#178;. The takeoff speed for this plane will be 65 m/s.
                      Assuming this minimum acceleration, what is the minimum allowed length for the runway?  
                    </div>
                </div>
                
                <div>
                        <PhyAnswer2/>
                </div>
        </div>

            
    
    )
}