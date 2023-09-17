import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-black  m-10 text-6xl">
      <div className="justify-center flex p-14">
        Welcome to PomStudy!
      </div>
        <div className="justify-center flex py-9">
          <button>
            
              <a href="/api/auth/login">Login</a>
            

          </button>

        </div>
      </div>
  )
}
