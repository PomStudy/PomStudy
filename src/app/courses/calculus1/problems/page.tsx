"use client"
import TimeComponent from '@/app/components/studytime/time'
import {AmtTime} from '@/app/components/studytime/studytime'
import App from "@/app/components/studytime/App"
import { useSearchParams } from 'next/navigation';



export default function Problems({amount}: AmtTime) {
    const router = useSearchParams();
    const  time  = router.get('time') ?? "1";;
    return(
        <div className="text-black py-8">
                
                <div className="text-6xl mb-4 font-medium">
                    <div className="justify-center flex mb-6"><App time={Number(time)}/> </div>
                    <div className="justify-center flex">Calculus 1: Derivatives</div>
                  
                </div>
                <div className="justify-center flex text-3xl mb-4">
                    1. 	f(t)=(4t<sup class = "exponent">2</sup>-t)(t<sup class = "exponent">3</sup>-8t<sup class = "exponent">2</sup>+12) 
                </div>

                <div className="justify-center flex text-3xl mb-4"> 
                    2. g(w)=(3w+w<sup class = "exponent">4</sup>)/(2w<sup class = "exponent">2</sup>+1)
                </div>

                <div className="justify-center flex m-8 text-6xl font-medium">
                Solutions:
                </div>
                <div>
                    <p>
                        1. df/dt=(8t-1)(t<sup class = "exponent">3</sup>-8t<sup class = "exponent">2</sup>+12)+(4t<sup class = "exponent">2</sup>-t)(3t<sup class = "exponent">2</sup>-16t)=20t<sup class = "exponent">4</sup>-132t<sup class = "exponent">3</sup>+24t<sup class = "exponent">2</sup>+96t-12
                    </p>
                </div>
                <div>
                    2. dg/dt=((3+4w<sup class = "exponent">3</sup>)(2w<sup class = "exponent">2</sup>+1)-(3w+w<sup class = "exponent">4</sup>)(4w))/(2w<sup class = "exponent">2</sup>+1)<sup class = "exponent">2</sup>=(4w<sup class = "exponent">5</sup>+4w<sup class = "exponent">3</sup>-6w<sup class = "exponent">2</sup>+3)/(2w<sup class = "exponent">2</sup>+1)<sup class = "exponent">2</sup>
                </div>

            
            
            

        </div>
    
    )
}