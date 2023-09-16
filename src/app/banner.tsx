import Logo from './components/images/logo'

export default function Banner() {
    return(
        <div className="flex justify-center bg-red-500 h-36">
            <Logo/>
            <p className="text-4xl font-mono py-12 px-3"> PoStudy </p>
        </div>
    );
}