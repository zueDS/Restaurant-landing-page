import video from "../assets/hero.mp4"
import abc from "../assets/abc.png"
import hero from "../assets/hero.jpeg"
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
        <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
            <video src={video} className="h-full w-full object-cover" muted autoPlay loop playsInline poster={hero}>
            </video>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from70% to-black"></div>
        <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
            <motion.img
              initial={{opacity: 0, y: 50 }}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5}}
              
             src={abc} alt="restaura" className="w-full p-4"/>
            <p className="p-4 text-lg tracking-tighter text-white">MATARA</p>
        </div>
    </section>
  )
}

export default HeroSection
