"use client"
import TimeComponent from '@/app/components/studytime/time'
import App from "@/app/components/studytime/App"
import { useSearchParams } from 'next/navigation';

export default function Problems() {
    const router = useSearchParams();
    const  time  = router.get('time') ?? "1";;
    return(
        <div className="justify-center flex text-black text-4xl py-8">
            <div className="text-6xl mb-4 font-medium">
                    <div className="justify-center flex mb-6"><App time={Number(time)}/> </div>
                    <div className="justify-center flex">Calculus 2: Integrals</div>
                  
            </div>
            
            

            
        </div>
    )
}