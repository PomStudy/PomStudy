import {useState} from 'react';



export default function CalcAnswer2() {
    const [attempts, setAttempts] = useState<number>(3);

    function handleClick() {
        {if (attempts > 0) {

            setAttempts(attempts - 1)
        } else {
            setAttempts(0);
        }}

            
    }

    function increment() {
        if (attempts<3){
            setAttempts(attempts + 1);
            }
        }
    
    return(
    <div className="w-full max-w-x py-4" >
        <div className="justify-center flex">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={increment} autoComplete="off">
                <div className="mb-4">
                    <label className="flex justify-center block text-gray-700 text-sm font-bold mb-2" >
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
                <div className="justify-center flex">
                 dg/dw=((3+4w^3)(2w^2+1)-(3w+w^4)(4w))/(2w^2+1)^2
                </div>

                <div className="justify-center flex">
                (4w^5+4w^3-6w^2+3)/(2w^2+1)^2
                </div>
            
            </div>
        
        }
    
    </div>)
}