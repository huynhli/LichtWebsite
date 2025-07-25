export default function Header(){
	const scrollToSpot = (pixels: number): void => {
		window.scrollTo({ top: pixels, behavior: 'smooth'});
	}

	return (
		<div className={`flex flex-row h-12 px-2 mt-[5%] bg-red-300 rounded-lg w-full md:w-auto md:mx-[10%]`}>
				
				<div className="hidden md:flex flex-1 justify-center items-center bg-green-400"><a onClick={() => scrollToSpot(700)} className={`inline-block mx-2 cursor-pointer font-bold text-[clamp(2rem,3vw,5rem)] transition-all duration-300 hover:scale-125 `}>About</a></div>
				<div className="flex-1 flex items-center justify-between md:justify-center bg-green-200 md:flex-col">
					<a
						onClick={() => scrollToSpot(950)}
						className="inline-block mx-2 cursor-pointer font-bold text-lg transition-all duration-300 hover:scale-125 max-w-[30%] md:max-w-[80%]"
					>
						<img src="/licht_logo.png" />
					</a>
					<a className="flex md:hidden ml-2 w-10 mr-[5%] bg-blue-400">
						<img src="/hamburg.png" />
					</a>
				</div>

				<div className="hidden md:flex flex-1 justify-center items-center bg-green-400"><a onClick={() => scrollToSpot(950)} className={`inline-block mx-2 cursor-pointer font-bold text-[clamp(2rem,3vw,5rem)] transition-all duration-300 hover:scale-125`}>News</a></div>
			</div>
	)
}
