"use client"
import TimeComponent from '@/app/components/studytime/time'
import {AmtTime} from '@/app/components/studytime/studytime'
import App from "@/app/components/studytime/App"
import { useSearchParams } from 'next/navigation';
import {useState} from 'react'
import Answer from '@/app/components/input/answer'
import Solution1calc1 from '@/app/components/solutions/solution1calc1'



export default function Problems({amount}: AmtTime) {
    const router = useSearchParams();
    const  time  = router.get('time') ?? "1";
    const [attempts, setAttempts] = useState(0);


    return(
        <div className="text-black py-8">
                
                <div className="text-6xl mb-4 font-medium">
                    <div className="justify-center flex mb-6"><App time={Number(time)}/> </div>
                    <div className="justify-center flex">Calculus 1: Derivatives</div>
                  
                </div>
                <div className="justify-center flex text-3xl mb-4">
                    1. 	f(t)=(4t<sup class = "exponent">2</sup>-t)(t<sup class = "exponent">3</sup>-8t<sup class = "exponent">2</sup>+12) 
                </div>
                <div >
                    <Answer/>
                    
                </div>
                <div>
                    <Solution1calc1 attempts={attempts}/>

                </div>


                <div className="justify-center flex text-3xl mb-4"> 
                    2. g(w)=(3w+w^4)/(2w^2+1)
                </div>
                <div>
                    <Answer/>
                
                </div>

                
                
                
                <div className="text-2xl">
                    <div className="justify-center flex">
                        2. dg/dt=((3+4w^3)(2w^2+1)-(3w+w^4)(4w))/(2w^2+1)^2
                    </div>
                    <div className="justify-center flex">
                        =(4w^5+4w^3-6w^2+3)/(2w^2+1)^2
                    </div>
                </div>
        </div>
    
    )
}