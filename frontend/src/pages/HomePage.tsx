import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ImgCarousel from "../components/ImgCarousel";

export default function HomePage() {
	
	const { scrollYProgress } = useScroll();

	const x = useTransform(scrollYProgress, [0.2, 0.4], [300, 0])
	const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50])
	const aboutY = useTransform(scrollYProgress, [0, 0.3], [700, 0])

	const opacityFadeIn = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
	const opacityFadeOut = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

	const aboutRef = useRef<HTMLElement | null>(null)
	const newsRef = useRef<HTMLDivElement | null>(null)

	// current? calls if exists
	const scrollToAbout = () => {
		aboutRef.current?.scrollIntoView({ behavior: "smooth"})
	}

	const scrollToNews = () => {
		newsRef.current?.scrollIntoView({ behavior: "smooth"})
	}

  return (
    <div className="bg-zinc-900 text-white flex flex-col min-h-screen">
		{/* Intro w/ header */}
		<section className="relative flex justify-center h-screen bg-purple-500">
			<div 
				className="absolute inset-0 bg-cover bg-left"
				style={{ backgroundImage: "url(/image.jpg)" }}
			/>
			
			{/* Content layer */}
			<motion.div style={{ y: headerY, opacity: opacityFadeOut }} className="relative z-10">
				<Header onScrollToAbout={scrollToAbout} onScrollToNews={scrollToNews}/>
			</motion.div>
		</section>

		{/* About */}
		<section
			ref={aboutRef}
			className="relative flex flex-row items-center justify-center min-h-1500px bg-purple-700 bg-cover bg-center"
			style={{ backgroundImage: "url(/test.jpg)" }}
		>
			<motion.div
				style={{y: aboutY, opacity: opacityFadeIn}}
				className="flex flex-col flex-1 p-8 text-center bg-green-400 rounded-lg bg-opacity-80 my-[10%] mx-[2%] ml-[4%]"
			>
				<h2 className="text-[clamp(2rem,2vw,6rem)] mb-4">Licht</h2>
				<p className="text-[clamp(1rem,1vw,4rem)]">
					During an archeological excavation – a set of Gates were discovered.
					People quickly realized that these ancient passages lead to different
					realms and dimensions. Rynoka, a small commercial village, was found
					near the excavation site – providing brave and reckless adventurers
					with treasures beyond measure. Moonlighter is an Action RPG with
					rogue-lite elements that demonstrates two sides of the coin – revealing
					everyday routines of Will, an adventurous shopkeeper that secretly
					dreams of becoming a hero.
				</p>
			</motion.div>
			<motion.div 
				style={{ x, opacity: opacityFadeIn }} 
				className="flex justify-center flex-1 bg-red-400 mx-[2%] mr-[4%]"
			>
				<div className="relative">
					<img src='/rohith_player_initial_sketch.png' className="p-10" alt="Character sketch" />
					<div className="z-10 absolute top-0 right-0 bg-blue-400 w-20 h-full" />
				</div>
				
			</motion.div>
			

		</section>

		{/* Slideshow */}
		<section
			ref={newsRef}
			className="relative flex items-center justify-center min-h-screen bg-blue-400 bg-cover bg-left"
			style={{ backgroundImage: "url(/moreTest.jpg)" }}
		>
			<motion.div
				style={{opacity: opacityFadeIn}}
				className="flex w-[60%] h-[70%] bg-opacity-50 rounded-lg"
			>
				<ImgCarousel />
			</motion.div>
		</section>

		{/* Footer */}
		<footer className="bg-purple-950 text-center">
			<Footer />
		</footer>
    </div>
  )
}
