// import { useNavigate } from "react-router-dom";

export default function Header(){
	const scrollToSpot = (pixels: number): void => {
		window.scrollTo({ top: pixels, behavior: 'smooth'});
	}

	// const navigate = useNavigate()

	return (
		<div className={`flex flex-row w-full justify-center h-[70px] px-2`}>

			{/* Middle */}
			<div className="flex flex-row items-center text-white">
				<div className="w-55 text-center"><a href="#Team" className={`inline-block mx-10 cursor-pointer font-bold text-3xl transition-all  duration-300 hover:scale-125 `}>Team</a></div>
				<div className="w-55 text-center"><a onClick={() => scrollToSpot(0)} className={`inline-block mx-10 cursor-pointer font-bold text-5xl transition-all duration-300 hover:scale-125 `}>Licht</a></div>
				<div className="w-55 text-center"><a href="#About" className={`inline-block mx-10 cursor-pointer font-bold text-3xl transition-all duration-300 hover:scale-125`}>About</a></div>
			</div>

		</div>
	)
}
