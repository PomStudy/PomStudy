import React from "react"; 
import Timer from "../Timer";

interface time{
    time: number
}
function App({time}:time) {
    return (
    <div>
        
        <Timer time={time * 60} />
         </div>
    );
}

export default App;
