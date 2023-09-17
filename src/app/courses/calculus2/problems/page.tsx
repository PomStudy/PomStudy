"use client"
import TimeComponent from '@/app/components/studytime/time'
import App from "@/app/components/studytime/App"
import { useSearchParams } from 'next/navigation';
import CalcAnswer3 from '@/app/components/input/calcanswer3'

export default function Problems() {
    const router = useSearchParams();
    const  time  = router.get('time') ?? "1";;
    return(
        <div className="text-black text-4xl py-8">
            <div className="text-6xl mb-4 font-medium">
                    <div className="justify-center flex mb-6"><App time={Number(time)}/> </div>
                    <div className="justify-center flex">Calculus 2: Integrals</div>
                       

            </div>
            <div className="justify-center flex text-3xl mb-4">
                Evaluate:
                    &#8747;(3t+t&#178;)sin(2t)dt 
            </div>

            <div>
                <CalcAnswer3/>

            </div>
            

            
        </div>
    )
}