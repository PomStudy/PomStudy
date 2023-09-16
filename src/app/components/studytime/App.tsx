import React from "react"; 
import Timer from "../Timer";

interface time{
    time: number
}
function App({time}:time) {
    return (
    <div>
        <h1>{time}</h1>
        <Timer time={425} />
         </div>
    );
}

export default App;
