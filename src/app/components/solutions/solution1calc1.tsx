


export default function Solution1calc1(attempts) {
    return
        attempts > 2 ? (

            <div className="text-2xl py-4">
                        <div className="justify-center flex">
                        1. df/dt=(8t-1)(t^3-8t^2+12)+(4t^2-t)(3t^2-16t)
                        </div>

                        <div className="justify-center flex">
                            =20t^4-132t^3+24t^2+96t-12
                        </div>
            </div>
    ) : 
    (
        <div>

        </div>
    )
}