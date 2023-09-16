import PomStudyLogo from './components/images/pomstudylogo'

export default function Banner() {
    return(
        <div className="flex justify-center bg-red-500 h-28">
            <PomStudyLogo/>
            <p className="text-4xl font-mono py-8 px-2"> PomStudy </p>
        </div>
    );
}