import { useEffect, useState } from "react";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import MenuItems from "../MenuItems";
import { AnimatePresence, motion } from "framer-motion";

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // When the hash changes, close the menu. Is there a better way to handle this?
    useEffect(() => {
        const handleHashChange = () => setIsOpen(false);

        window.addEventListener('hashchange', handleHashChange);

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <>
            <motion.button onClick={() => setIsOpen(prev => !prev)}>
                {isOpen ? <MdOutlineClose size={48} /> : <MdOutlineMenu size={48} />}
            </motion.button>

            <AnimatePresence>
                {isOpen ? (
                    <motion.div initial={{ opacity: 0, scale: .5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .25 }} className="absolute top-[156px] left-0 bg-accent w-full h-svh">
                        {<MenuItems />}
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>

    )
}

export default MobileMenu;