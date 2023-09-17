import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-black  m-10 text-5xl">
      <div className="justify-center flex pb-14">
        Welcome to PomStudy!
      </div>



        <div className="justify-center flex py-9">
          <button>
            <Link href="/courses">
                <p className="p-5 border-4 rounded-xl border-zinc-950 hover:bg-red-300 rounded-full">Begin your study journey here</p>
            </Link>

          </button>

        </div>
      </div>
  )
}
