"use client"
import TimeComponent from '@/app/components/studytime/time'
import App from "@/app/components/studytime/App"
import { useSearchParams } from 'next/navigation';

export default function Problems() {
    const router = useSearchParams();
    const  time  = router.get('time') ?? "1";;
    return(
        <div className="justify-center flex text-black text-4xl py-8">
            

            <div className="text-black py-8">


            <div className="text-6xl mb-4 font-medium">
                    <div className="justify-center flex mb-6"><App time={Number(time)}/> </div>

                    <div className="justify-center flex">Calculus 2: Integrals</div>
              
            </div>
            
            <div className="justify-center flex text-3xl mb-4">
                Evaluate:
                    <br />
                    1) &#8747;(3t+t&#178;)sin(2t)dt 
                    <br />
                    2) &#8747;4/(x&#178;+5x-114)dx
                    <br />
                Solution:
                    <br />
                    1) (-1/2)(3t+t&#178;)cos(2t)+(1/4)(3+2t)sin(2t)+(1/4)cos(2t)+c
                    <br />
                    2) (4/9)ln|x-2|-(4/9)ln&#8739;x+7&#8739;+c
            </div>

            </div>
        </div>
    )
}