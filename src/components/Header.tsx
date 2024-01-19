import { useState } from "react"
import { FaLinkedin, FaGithub, FaAt } from "react-icons/fa6";

interface HeaderProps {
    onMenuClick: () => void

}
export default function Header({ onMenuClick }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenuClick() {
        onMenuClick();
        setMenuOpen(!menuOpen);
    }

    return (
        <header className="z-40">
            <div className="md:hidden h-32 w-screen py-2 flex flex-row justify-between px-4">
                <div className="my-auto">
                    <h1 className="text-4xl lowercase">Shaun</h1>
                    <h2 className="text-md uppercase text-accent">czubkowski</h2>
                </div>
                <button onClick={handleMenuClick} className="my-auto font-extralight text-2xl">
                    {menuOpen ? 'close' : 'menu'}
                </button>
            </div>
            {menuOpen && <nav className="flex flex-col relative left-full animate-slideLeft">
                <ul className="text-center font-semibold text-3xl h-screen">
                    <li className="p-8 border-b-2 border-t-2 hidden">About</li>
                    <li className="p-8 border-b-2"><a target="_blank" href="https://drive.google.com/file/d/1KdgK_smxb7emMweDz6nuNLjDCu3kg0DX/view?usp=drive_link">Resume</a></li>
                    <li className="p-8 hidden">Work</li>
                    <li>
                        <div className="flex justify-center pt-8">
                            <a className="p-3" href="https://www.linkedin.com/in/shaun-czubkowski/" tabIndex={0} target="_blank" >
                                <FaLinkedin color={'#ff6b6b'} size={50} />
                            </a>
                            <a className="p-3" href="https://github.com/shaunczubkowski" tabIndex={1} target="_blank">
                                <FaGithub color={'#ff6b6b'} size={50} />
                            </a>
                            <a className="p-3" href="mailto: shaun.czubkowski@gmail.com" tabIndex={2} target="_blank">
                                <FaAt color={'#ff6b6b'} size={50} />
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>}
        </header>
    )
}