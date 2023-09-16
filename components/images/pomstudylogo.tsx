import Image from 'next/image'
import logo from './thelogo.jpeg'

export default function PomStudyLogo() {
    return(
        <Image height={120} className="rounded-full p-1" src={logo} alt="PomStudy Logo"/>
    )
}
