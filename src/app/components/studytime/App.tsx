import React from "react"; 
import Timer from "../Timer";

interface time{
    time: number
}
function App({time}:time) {
    return (
    <div className="border-4 rounded-full p-2">
        
        <Timer time={time * 60} />
         </div>
    );
}

export default App;
