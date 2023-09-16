"use client"
import TimeComponent from '@/app/components/studytime/time'
import {AmtTime} from '@/app/components/studytime/studytime'

export default function Problems({amount}: AmtTime) {
    return(
        <div className=" text-black text-4xl py-8">
            <div className="justify-center flex">
            These are the calc 1 problems
            </div>
            
            <div>
                <TimeComponent
            amount={10}/>
            </div>
            

        </div>
    )
}