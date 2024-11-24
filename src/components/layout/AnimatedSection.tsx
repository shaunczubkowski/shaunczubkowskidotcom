import { motion, Variants } from "motion/react"

const scrollVariant: Variants = {
    offscreen: {
        x: -9999
    },
    onscreen: {
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.20,
            duration: 1.5
        }
    }
}

interface AnimatedSectionProps {
    children: React.ReactNode;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {

    return (
        <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: .5 }} >
            <motion.div variants={window.innerWidth < 1200 ? {} : scrollVariant}>
                {children}
            </motion.div>
        </motion.div>
    )
}

export default AnimatedSection;