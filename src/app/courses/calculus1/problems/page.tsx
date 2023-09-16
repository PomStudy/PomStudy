


export default function Problems({amount}: AmtTime) {
    return(
<<<<<<< HEAD
        <div className="justify-center flex text-black text-4xl py-8">
            These are the calc 1 problems:
                1. f(t)=(4t^2-t)(t^3-8t^2+12) 
                2. g(w)=(3w+w^4)/(2w^2+1)
            
                Solutions:
                1. f'(t)=(8t-1)(t^3-8t^2+12)+(4t^2-t)(3t^2-16t)=20t^4-132t^3+24t^2+96t-12
                2. g'(w)=((3+4w^3)(2w^2+1)-(3w+w^4)(4w))/(2w^2+1)^2=(4w^5+4w^3-6w^2+3)/(2w^2+1)^2


            <Time/>
            
=======
        <div className=" text-black text-4xl py-8">
            <div className="justify-center flex">
            These are the calc 1 problems
            </div>
            
            <div>
                <TimeComponent
            amount={amount}/>
            </div>
            <p><App /></p>
>>>>>>> 8b8b004804714b1cc4dc89f3873717b1581825b8

        </div>
    
    )
}