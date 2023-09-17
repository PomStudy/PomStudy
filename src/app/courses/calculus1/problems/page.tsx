"use client"
import TimeComponent from '@/app/components/studytime/time'
import App from "@/app/components/studytime/App"
import { useSearchParams } from 'next/navigation';
import {useState} from 'react'
import CalcAnswer1 from '@/app/components/input/calcanswer1'
import CalcAnswer2 from '@/app/components/input/calcanswer2'
import Solution1calc1 from '@/app/components/solutions/solution1calc1'




export default function Problems() {
    const router = useSearchParams();
    const  time  = router.get('time') ?? "1";
    const [attempts, setAttempts] = useState<number>(0);


    return(
        <div className="text-black py-8">
                
                <div className="text-6xl mb-4 font-medium">
                    <div className="justify-center flex mb-6"><App time={Number(time)}/> </div>
                    <div className="justify-center flex">Calculus 1: Derivatives</div>
                  
                </div>

                <div className="justify-center flex text-3xl mb-4">
                    1. 	f(t)=(4t&#178;-t)(t&#179;-8t&#178;+12) 
                </div>

                <div>
                    <CalcAnswer1/>
                    
                </div>

                <div className="justify-center flex text-3xl mb-4"> 
                    2. g(w)=<span className="frac"><sup>(3w+w&#8308;)</sup><span>/</span><sub>(2w&#178;+1)</sub></span>
                </div>
                
                <div>
                    <CalcAnswer2/>
                
                </div>
        </div>
    
    )
}