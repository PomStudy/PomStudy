
import {useState} from 'react';



export default function CalcAnswer1() {
    const [attempts, setAttempts] = useState<number>(3);

    function handleClick() {
        {if (attempts > 0) {

            setAttempts(attempts - 1)
        } else {
            setAttempts(0);
        }}}

        function increment() {
            setAttempts(attempts + 1);
        }
    
    return(
    <div className="w-full max-w-x py-4" >
        <div className="justify-center flex">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={increment} autoComplete="off">
                <div className=" mb-4">
                    <label className="justify-center flex block text-gray-700 text-sm font-bold mb-2" >
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
            <div className="justify-center flex ">
                <div className="justify-center flex">
                    1. df/dt=(8t-1)(t^3-8t^2+12)+(4t^2-t)(3t^2-16t)
                </div>

                <div className="justify-center flex ">
                    =20t^4-132t^3+24t^2+96t-12
                </div>
            
            </div>
        
        }
    
    </div>)
}