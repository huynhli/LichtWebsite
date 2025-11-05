import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function HomePage() {
  // Refs to track when sections are in view
  const aboutRef = useRef(null)
  const aboutInView = useInView(aboutRef, { once: true, margin: "-50px" })

  const slideRef = useRef(null)
  const slideInView = useInView(slideRef, { once: true, margin: "-50px" })

  return (
    <div className="bg-zinc-900 text-white flex flex-col min-h-screen">
      {/* HERO / HEADER SECTION */}
      <section
        className="relative flex justify-center h-screen bg-purple-500 bg-cover bg-left"
        style={{ backgroundImage: "url(/moreTest.jpg)" }}
      >
        <Header />
      </section>

      {/* ABOUT SECTION */}
      
      <section
        ref={aboutRef}
        className="relative flex items-center justify-center min-h-screen bg-purple-700 bg-cover bg-center"
        style={{ backgroundImage: "url(/test.jpg)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl p-8 text-center bg-green-400 rounded-lg bg-opacity-80"
        >
          <h2 className="text-4xl mb-4">Licht</h2>
          <p>
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
      </section>

      {/* SLIDESHOW SECTION */}
      <section
        ref={slideRef}
        className="relative flex items-center justify-center min-h-screen bg-blue-400 bg-cover bg-left"
        style={{ backgroundImage: "url(/moreTest.jpg)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={slideInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl p-8 text-center bg-black bg-opacity-50 rounded-lg"
        >
          <h2 className="text-4xl mb-4">Slideshow</h2>
          <p>
            This is another section. It will fade in and slide up when scrolled
            into view.
          </p>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-purple-950 py-6 text-center">
        <Footer />
      </footer>
    </div>
  )
}
