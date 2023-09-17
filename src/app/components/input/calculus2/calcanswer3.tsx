

import {useState} from 'react';



export default function CalcAnswer3() {
    const [attempts, setAttempts] = useState<number>(3);

    function handleClick() {
        {if (attempts > 0) {

            setAttempts(attempts - 1)
        } else {
            setAttempts(0);
        }}}

        function increment() {
            if (attempts<3){
                setAttempts(attempts + 1);
                }
            }
    
    return(
    <div className="w-full max-w-x py-4" >
        <div className="justify-center flex">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={increment} autoComplete="off">
                <div className=" mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        You have {attempts} attempts left
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=""/>
                </div>
            
            <div className="flex justify-center">
                <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleClick} >
                    Submit
                </button>
                
            </div>
            </form>
        </div>

        {attempts == 0 && 
            <div className="justify-center flex">
                <div className="justify-center flex border-4 border-red-500 rounded-full p-3">
                    <br />
                        1) (-1/2)(3t+t&#178;)cos(2t)+(1/4)(3+2t)sin(2t)+(1/4)cos(2t)+c
                    <br />
                </div>

                
            
            </div>
        
        }
    
    </div>)
}