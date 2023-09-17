"use client"
import TimeComponent from '@/app/components/studytime/time'
import {AmtTime} from '@/app/components/studytime/studytime'
import App from "@/app/components/studytime/App"
import { useSearchParams } from 'next/navigation';
import React from 'react';
import './Fraction.css'; // Import CSS for styling



export default function Problems({amount}: AmtTime) {
    const router = useSearchParams();
    const  time  = router.get('time') ?? "1";
    return(
        <div className="text-black py-8">
                
                <div className="text-6xl mb-4 font-medium">
                    <div className="justify-center flex mb-6"><App time={Number(time)}/> </div>
                    <div className="justify-center flex">Calculus 1: Derivatives</div>
                  
                </div>
                <div className="justify-center flex text-3xl mb-4">
                    1. 	f(t)=(4t&#178;-t)(t&#179;-8t&#178;+12) 
                </div>

                <div className="justify-center flex text-3xl mb-4"> 
                    2. g(w)=<span class="frac"><sup>(3w+w&#8308;)</sup><span>/</span><sub>(2w&#178;+1)</sub></span>
                </div>

                <div className="justify-center flex m-8 text-6xl font-medium">
                Solutions:
                </div>
                <div>
                    <p>
                        1. df/dt =(8t-1)(t&#179;-8t &#178; +12)+(4t&#178;-t)(3t&#178;-16t)=20t&#8308;-132t&#179;+24t&#178;+96t-12
                    </p>
                </div>
                <div>
                    2. dg/dt=((3+4w&#179;)(2w&#178;+1)-(3w+w&#8308;)(4w))/(2w&#178;+1)&#178;=(4w&#8309;+4w&#179;-6w&#178;+3)/(2w&#178;+1)&#178;
                </div>
        </div>
    
    )
}