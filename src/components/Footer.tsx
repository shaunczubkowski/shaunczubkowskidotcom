import { FaAt, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
    const copyRightYear = new Date().getFullYear();
    return (
        <footer className="p-3 bg-lightBackground">
            <h3 className="text-3xl my-4 text-primary text-center">Connect</h3>
            <div className="flex justify-center">
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
            <p className="text-center text-sm text-gray-500">{copyRightYear} &copy; Shaun Czubkowski | Personal Portfolio</p>
        </footer>
    )
}