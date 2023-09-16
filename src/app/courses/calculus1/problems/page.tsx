"use client"
import TimeComponent from '@/app/components/studytime/time'
import {AmtTime} from '@/app/components/studytime/studytime'



export default function Problems(amount: AmtTime) {
    return(
        <div className="justify-center flex text-black text-4xl py-8">
            These are the calc 1 problems
            
            <TimeComponent amount={15}/>
            

        </div>

    )
}