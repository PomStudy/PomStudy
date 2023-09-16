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
    const [state, setState] = React.useState<State>({
        time,
        seconds: time - Math.floor((time - 1) / 60) * 60 -1,
        minuts: Math.floor((time - 1)/ 60),
    });
    React.useEffect(() => {
        setTimeout(() => {
            if (state.time === 0){
               return; 
            }

            setState({
                time: state.time -1,
                minuts: Math.floor((state.time - 1)/60),
                seconds: state.time - Math.floor((state.time - 1)/60) * 60 - 1,
            });
        }, 1000);
    },[state.time]);
        return(
            <h2>{`${state.minuts}: ${
                state.seconds <= 10 ? `0${state.seconds}` : state.seconds
            }`}</h2>
        );
    };

export default Timer;