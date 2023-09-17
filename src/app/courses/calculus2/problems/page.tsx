"use client"
import TimeComponent from '@/app/components/studytime/time'
import App from "@/app/components/studytime/App"
import { useSearchParams } from 'next/navigation'; 
import CalcAnswer3 from '@/app/components/input/calculus2/calcanswer3'
import CalcAnswer4 from '@/app/components/input/calculus2/calcanswer4'

export default function Problems() {
   
    const router = useSearchParams();
    const  time  = router.get('time') ?? "1";;
    return( 
        <div className="text-black text-4xl py-8">
            <div className="text-black text-4xl">
                <div className="text-6xl mb-4 font-medium">
                        <div className="justify-center flex mb-6"><App time={Number(time)}/> </div>

                        <div className="justify-center flex">Calculus 2: Integrals</div>
                
                </div>
                
                <div className="text-3xl mb-4">
                    <div className="justify-center flex">
                    Evaluate:
                        <br />
                        1) &#8747;(3t+t&#178;)sin(2t)dt 
                        <br />
                        
                    </div>
                    <div>
                        
                        <div className="justify-center flex">
                            <CalcAnswer3/>
                        </div>

                    </div>

                    <div className="justify-center flex"> 
                    Evaluate:
                        <br/>
                        2) &#8747;4/(x&#178;+5x-114)dx
                        <br />

                    </div>
                    <div className="justify-center flex">
                        <CalcAnswer4/>
                    
                    </div>
                            

                    
                </div>
                
            </div>
      
        </div>
               
            
    )
}