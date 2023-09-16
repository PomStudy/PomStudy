"use client"
import React from "react";

interface State {
    time: number;
    seconds: number;
    minuts:number;
}

const Timer = () => {
    const[state, setState] = React.useState<State> ({
        time: 60,
        seconds:0,
        minuts:1,
    })
    return (
    <div className="flex justify-center"><h2>{`${state.minuts}: ${
        state.seconds <= 10 ? `0${state.seconds}` : state.seconds
    }`}</h2></div>
    );
};

export default Timer;