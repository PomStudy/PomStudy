import Countdown from 'react-countdown';
import min from '@/components/studytime/studytime'

interface Min {
    min: number
}

export default function Countdown(min: Min) {
    return(
        <div className="text-black">
            <Countdown date={Date.now() + ({$min} * 1000)}/>

        </div>
    )
}