import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

type HeaderProps = {
	onScrollToAbout: () => void
	onScrollToNews: () => void
}

export default function Header({ onScrollToAbout, onScrollToNews }: HeaderProps){
	const controls = useAnimation()
	const [navClicked, setNavClicked] = useState<boolean>(false)

	const expandNav = async () => {
		if (!navClicked){
			await controls.start({
				rotate: 90,
				transition: { duration: 0.7, ease: "easeInOut"},
			})
			// expand nav bar
		} else {
			await controls.start({
				rotate: 0,
				transition: { duration: 0.7, ease: "easeInOut"},
			})
			// close nav bar
		}
		setNavClicked(prev => !prev)
		
	}

	return (
		<div className={`flex flex-row h-12 px-2 mt-[5%] bg-red-300 rounded-lg w-full md:w-auto md:mx-[10%]`}>
				
				<div className="hidden md:flex flex-1 justify-center items-center bg-green-400"><a onClick={onScrollToAbout} className={`inline-block mx-2 cursor-pointer font-bold text-[clamp(2rem,3vw,5rem)] transition-all duration-300 hover:scale-125 `}>About</a></div>
				<div className="flex-1 flex items-center justify-between md:justify-center bg-green-200 md:flex-col">
					<a
						onClick={onScrollToAbout}
						className="inline-block mx-2 cursor-pointer font-bold text-lg transition-all duration-300 hover:scale-125 max-w-[30%] md:max-w-[80%]"
					>
						<img src="/licht_logo.png" />
					</a>
					<a className="flex md:hidden ml-2 w-10 mr-[5%] cursor-pointer">
						<motion.img
							src="/hamburg.png"
							onClick={expandNav}
							className="flex invert md:hidden ml-2 w-10 mr-[5%] cursor-pointer"
							animate={controls}
							initial={{ rotate: 0 }}
						/>
					</a>
				</div>

				<div className="hidden md:flex flex-1 justify-center items-center bg-green-400"><a onClick={onScrollToNews} className={`inline-block mx-2 cursor-pointer font-bold text-[clamp(2rem,3vw,5rem)] transition-all duration-300 hover:scale-125`}>News</a></div>
		</div>
	)
}
