import Image from 'next/image'
import logo from './pomstudy1.png'

export default function Logo() {
        return(
            <Image height={145} className="rounded-full" src={logo} alt="PomStudy Logo"/>
        )
}