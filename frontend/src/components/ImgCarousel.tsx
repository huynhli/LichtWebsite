import { motion, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react"


export default function ImgCarousel() {
    const [currentIndex, setCurrentIndex] = useState<number>(1)
    const images = [
        "jannah_player_initial_sketch_3_(2).jpg",
        "jannah_player_initial_sketch_1_(2).jpg",
        "jannah_player_initial_sketch_2_(2).jpg"
    ];
    const currentIndexMotion = useSpring(currentIndex, { 
        stiffness: 300, 
        damping: 30,
        mass: 0.8 
    });
    useEffect(() => {
        currentIndexMotion.set(currentIndex);
    }, [currentIndex]);

    const xLeft = useTransform(currentIndexMotion, [0, 1, 2], [-100, -70, -50])
    const xCenter = useTransform(currentIndexMotion, [0, 1, 2], [-20, 0, 20])
    const xRight = useTransform(currentIndexMotion, [0, 1, 2], [50, 70, 100])
    // const opacityFadeIn = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex === images.length - 1 
                ? 0
                : prevIndex + 1
            setHoverIndex(newIndex)
            return newIndex
        })
    }
    
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex === 0 
                ? images.length - 1 
                : prevIndex - 1
            setHoverIndex(newIndex)
            return newIndex
        })
    }

    const [hoverIndex, setHoverIndex] = useState<number>(1)
    
    return (
        <div className="flex flex-col w-full">
            {/* Images container */}
            <div className="flex relative">
                {/* Invisible spacer to define container bounds */}
                <div className="h-[19vw] w-full opacity-0 pointer-events-none"></div>
                
                {/* Your overlapping elements */}
                <motion.div style={{x: xLeft}} className={`absolute justify-center items-center top-[0.5vw] left-[30%] h-[18vw] w-[13vw] transition-opacity ${
                    currentIndex === 0 ? 'opacity-100 transform scale-125 transition ease-out duration-600 z-10' : 'opacity-20 z-0'
                }`}><img src='jannah_player_initial_sketch_1_(2).jpg'/></motion.div>
                <motion.div style={{x: xCenter}} className={`absolute top-[0.5vw] left-[39%] h-[18vw] w-[13vw] transition-opacity ${
                    currentIndex === 1 ? 'opacity-100 transform scale-125 transition ease-out duration-600 z-10' : 'opacity-20 z-0'
                }`}><img src='jannah_player_initial_sketch_2_(2).jpg'/></motion.div>
                <motion.div style={{x: xRight}} className={`absolute top-[0.5vw] right-[30%] h-[18vw] w-[13vw] transition-opacity ${
                    currentIndex === 2 ? 'opacity-100 transform scale-125 transition ease-out duration-600 z-10' : 'opacity-20 z-0'
                }`}><img src='jannah_player_initial_sketch_3_(2).jpg'/></motion.div>
            </div>
            {/* Navigation Buttons */}
            <div className="flex justify-center items-center my-4 mt-30">
                <button 
                    onClick={goToPrevious}
                    
                    className="px-4 py-2 bg-blue-500 text-white text-3xl rounded hover:bg-blue-600"
                >
                    {"<"}
                </button>
                
                {/* Dots indicator */}
                <div className="flex space-x-2 mx-8">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-8 h-8 rounded-full transition-all duration-300 ease-in-out ${
                                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                            onMouseEnter={() => setCurrentIndex(index)}
                            onMouseLeave={() => setCurrentIndex(hoverIndex)}
                        />
                    ))}
                </div>
                
                <button 
                    onClick={goToNext}
                    className="px-4 py-2 bg-blue-500 text-white text-3xl rounded hover:bg-blue-600"
                >
                    {">"}
                </button>
            </div>
        </div>
    )
}