import Link from 'next/link'

import { Container } from 'postcss'

export default function CourseSelect() {
    return(

        <div className="text-black grid grid-cols-2 grid-rows-2 text-8xl gap-9">


            <div className=" justify-center flex px-2 border-4 rounded-xl border-zinc-950 hover:bg-red-300">
                <button className="col-start-1 col-span-1 row-start-1 row-span-1 ">
                <Link href="/courses/physics1">
                    Physics 1
                </Link>

                </button>

            </div>

            <div className=" justify-center flex px-2 border-4 rounded-xl border-zinc-950 hover:bg-red-300">
                <button className="col-start-2 col-span-1 row-start-1 row-span-1">
                    <Link href="/courses/calculus1">
                    Calculus 1
                    </Link>
                </button>
            </div>

            <div className=" justify-center flex px-2 border-4 rounded-xl border-zinc-950 py-2 hover:bg-red-300">
                <button className="col-start-1 col-span-1 row-start-2 row-span-1">
                    <Link href="/courses/physics2">
                    Physics 2
                    </Link>
                </button>
            </div>

            <div className="justify-center flex px-2 border-4 rounded-xl border-zinc-950 hover:bg-red-300">
                <button className="col-start-2 col-span-1 row-start-2 row-span-1">
                    <Link href="/courses/calculus2">
                    Calculus 2
                    </Link>
                </button>
                </div>
            

        <div className='text-black grid grid-cols-2 grid-rows-2 text-8xl gap-9$ {styles.className}'>
        <button > <Link href="/"> Go back </Link></button>
            </div>
            

        </div>
    )
}