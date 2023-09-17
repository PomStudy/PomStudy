"use client"
import TimeComponent from '@/app/components/studytime/time'
import App from "@/app/components/studytime/App"
import { useSearchParams } from 'next/navigation';
import {useState} from 'react'
import Answer from '@/app/components/input/answer.tsx'
import Solution1calc1 from '@/app/components/solutions/solution1calc1.tsx'



export default function Problems() {
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
                    1. 	f(t)=(4t&#178;-t)(t&#179;-8t&#178;+12) 
                </div>
                <div >
                    <Answer/>
                    
                </div>
                <div>
                    <Solution1calc1 attempts={attempts}/>

                </div>


                <div className="justify-center flex text-3xl mb-4"> 
                    2. g(w)=<span class="frac"><sup>(3w+w&#8308;)</sup><span>/</span><sub>(2w&#178;+1)</sub></span>
                </div>
                <div>
                    <Answer/>
                
                </div>
                
                <div className="text-2xl py-4">
                    <div className="justify-center flex">
                    1. df/dt=(8t-1)(t^3-8t^2+12)+(4t^2-t)(3t^2-16t)
                    </div>

                    <div className="justify-center flex">
                        =20t^4-132t^3+24t^2+96t-12
                    </div>
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