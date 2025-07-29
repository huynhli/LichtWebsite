import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function HomePage() {
	
	const { scrollYProgress } = useScroll();
	const x = useTransform(scrollYProgress, [0.2, 0.4], [300, 0])
	const opacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);

	// helper for transitions on smaller viewports
	const isSmallScreen = window.innerWidth < 768

	const aboutRef = useRef<HTMLElement | null>(null)
	const aboutInView = useInView(aboutRef, {
		once: false,
		margin: isSmallScreen ? "-50px" : "-300px"
	})

	const slideRef = useRef<HTMLElement | null>(null)
	const slideInView = useInView(slideRef, { 
		once: false, 
		margin: isSmallScreen ? "-50px" : "-200px" 
	})

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
		<section
		className="relative flex justify-center h-screen bg-purple-500 bg-cover bg-left"
		style={{ backgroundImage: "url(/moreTest.jpg)" }}
		>
			<Header onScrollToAbout={scrollToAbout} onScrollToNews={scrollToNews}/>
		</section>

		{/* About */}
		<section
			ref={aboutRef}
			className="relative flex flex-row items-center justify-center min-h-1500px bg-purple-700 bg-cover bg-center"
			style={{ backgroundImage: "url(/test.jpg)" }}
		>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={aboutInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 1.5 }}
				className="flex flex-col flex-1 max-w-3xl p-8 text-center bg-green-400 rounded-lg bg-opacity-80 my-[10%] mx-[2%] ml-[4%]"
			>
				<h2 className="text-[clamp(2rem,2vw,4rem)] mb-4">Licht</h2>
				<p className="text-[clamp(1rem,1vw,3rem)]">
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
			<motion.div style={{ x, opacity }} className="flex flex-1 bg-red-400 mx-[2%] mr-[4%]">
				<img src='/moreTest.jpg' />
			</motion.div>
		</section>

		{/* Slideshow */}
		<section
			ref={slideRef}
			className="relative flex items-center justify-center min-h-screen bg-blue-400 bg-cover bg-left"
			style={{ backgroundImage: "url(/moreTest.jpg)" }}
		>
			<motion.div
				ref={newsRef}
				initial={{ opacity: 0, y: 50 }}
				animate={slideInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 1.5 }}
				className="max-w-3xl p-8 text-center bg-black bg-opacity-50 rounded-lg"
			>
				<h2 className="text-4xl mb-4">Slideshow</h2>
				<p>
					This is another section. It will fade in and slide up when scrolled
					into view.
				</p>
			</motion.div>
		</section>

		{/* Footer */}
		<footer className="bg-purple-950 py-6 text-center">
			<Footer />
		</footer>
    </div>
  )
}
