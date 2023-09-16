
import {useTimer} from 'react-timer-hook';

export default function LeosTimer({expiryTimeStamp}) {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,

    } = useTimer({
        expiryTimeStamp,
        onExpire: () => console.warn('onExpire called')
    })
    return null
}