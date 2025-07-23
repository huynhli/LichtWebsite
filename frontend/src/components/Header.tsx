export default function Header(){
	const scrollToSpot = (pixels: number): void => {
		window.scrollTo({ top: pixels, behavior: 'smooth'});
	}

	const openJobsPage = () => {
		window.location.href='/Jobs'
	}

	return (
		<div className={}>

			{/* UI Change button */}
			<div className="flex w-30 justify-center">
				<button className={}>Button</button>
			</div>

			{/* Middle */}
			<div className="flex flex-row items-center text-zinc-900">
				<div className="w-18 text-center"><a onClick={() => scrollToSpot(700)} className={}>Games</a></div>
				<div className="w-18 text-center"><a onClick={() => scrollToSpot(950)} className={}>Team</a></div>
				<div className="w-18 text-center"><a onClick={openJobsPage} className={}>Jobs</a></div>
			</div>

			{/* Icons */}
			<div className="flex justify-center w-30">
				<a className="self-center cursor-pointer" href="mailto:tbspgames@gmail.com"><img src="" className={} ></img>Hi</a>
				<a className="self-center cursor-pointer" href="https://tbspgames.itch.io/"><img src="" className={} ></img>Hi</a>
			</div>
		</div>
	)
}
