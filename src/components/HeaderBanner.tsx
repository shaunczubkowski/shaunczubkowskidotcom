import { useQualities } from "../hooks/useQualities";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "motion/react"

const HeaderBanner = () => {
    const quality = useQualities();

    return (
        <div id="about" className="relative flex flex-col h-screen overflow-x-hidden justify-center">
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}>
                <img className="h-64 w-64 mx-auto " src="/bitmoji-shaun.PNG" alt="This is Bitmoji Shaun, Hello!" />
                <h2 className="text-3xl text-center my-4 text-text">
                    Hi, I'm <span className="text-accent font-bold">Shaun Czubkowski</span> a Software Engineer
                </h2>

                <div className="text-center font-mono text-xl text-secondary">
                    <p>{quality}</p>
                </div>
            </motion.div>
            <FaArrowDown className={`fixed bottom-6 left-1/2 h-10 w-10 animate-bounce text-secondary ${window.scrollY !== 0 ? 'hidden' : 'visible'}`} />
        </div>
    )
}

export default HeaderBanner;