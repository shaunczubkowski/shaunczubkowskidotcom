import { RiExternalLinkLine } from "react-icons/ri";
import Link from "./Link";

const MenuItems = () => {
    return (

        <ul className="flex flex-col md:flex-row text-center mt-8">
            <Link text="About" href="#about" />
            <Link text="Skills" href="#skills" />
            <Link text="Projects" href="#projects" />
            <Link text={<span className="flex flex-row justify-center items-center md:hover:text-accent transition-colors">Resume <RiExternalLinkLine className="ml-2" color="#61dafb" /></span>} href="https://drive.google.com/file/d/1_FUHDpovqXsVM1bxg5lVu8Gx1VZfv1d0/view?usp=drive_link" newTab={true} />
        </ul>
    )
}

export default MenuItems;

