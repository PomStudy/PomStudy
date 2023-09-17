import Logo from './components/images/logo'


export default function Banner() {
    return(
        <div className="flex justify-center bg-red-500 h-36">
            <div className="flex justify-center">
                <Logo/>
            </div>
            <div className="flex justify-center">
                <p className="text-5xl py-11 px-3 body-font font-Montserrat"> PomStudy </p>
            </div>
            
        </div>
    );
}