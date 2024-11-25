import { useQualities } from "../hooks/useQualities";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "motion/react"

const HeaderBanner = () => {
    const quality = useQualities();

    return (
        <div id="home" className="flex flex-col justify-between items-center relative h-screen overflow-x-hidden w-full text-center">
            <motion.div className="my-auto flex flex-col items-center" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}>
                <img className="h-64 w-64" src="/bitmoji-shaun.PNG" alt="This is Bitmoji Shaun, Hello!" />
                <h2 className="text-3xl mt-4 text-text">
                    Hi, I'm <span className="text-accent font-bold">Shaun Czubkowski.</span>
                </h2>
                <h3 className="text-text text-xl mb-4 py-3">Software Engineer & User Experience Advocate</h3>

                <div className="font-mono text-xl text-secondary px-3">
                    <p>{quality}</p>
                </div>
            </motion.div>
            <button onClick={() => window.location.href = '/#about'}>
                <FaArrowDown className={`mb-7 h-10 w-10 [&:not(:hover)]:animate-bounce text-secondary`} />
            </button>
        </div>
    )
}

export default HeaderBanner;