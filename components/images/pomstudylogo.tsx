import Image from 'next/image'
import logo from './pomstudylogo.jpeg'

export default function PomStudyLogo() {
    return(
        <Image height={100} className="rounded-full p-1" src={logo} alt="PomStudy Logo"/>
    )
}
