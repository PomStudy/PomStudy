"use client"
import React from "react";

interface State {
    time: number;
    seconds: number;
    minuts:number;
}
interface Props{
    time: number;
}

const Timer: React.FC<Props> = ({ time }) =>{
    debugger;
    const [timer, setTimer] = React.useState<State>({
        time,
        seconds: time - Math.floor((time - 1) / 60) * 60 -1,
        minuts: Math.floor((time - 1)/ 60),
    });
    React.useEffect(() => {
        setTimeout(() => {
            if (timer.time === 0){
               window.alert("Break Time!!!"); 
               return;

            }

            if(timer.time === 300){
                alert("Five Minutes Left!")
            }

            setTimer({
                time: timer.time -1,
                minuts: Math.floor((timer.time - 1)/60),
                seconds: timer.time - Math.floor((timer.time - 1)/60) * 60 - 1,
            });
        }, 1000);
    },[timer.time]);
        return(
            <h2>{`${timer.minuts}: ${
                timer.seconds <= 10 ? `0${timer.seconds}` : timer.seconds
            }`}</h2>
        );
    };

export default Timer;