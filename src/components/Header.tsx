import { RiExternalLinkLine } from "react-icons/ri";

const Header: React.FC = () => {
    return (
        <div className="sticky top-0 w-full flex flex-col md:flex-row items-center justify-between p-4 text-text z-50 bg-inherit md:bg-transparent">
            <img width={125} height={'auto'} src="/logo.png" alt="Shaun Czubkowski, Software Engineer" />
            <nav>
                <ul className="flex flex-col md:flex-row text-center mt-8">
                    <Link text="About" href="about" />
                    <Link text="Skills" href="skills" />
                    <Link text="Projects" href="projects" />
                    <li className="my-3 mx-3 text-lg hover:text-accent transition-colors">
                        <a href="https://drive.google.com/file/d/1_FUHDpovqXsVM1bxg5lVu8Gx1VZfv1d0/view?usp=drive_link" target="_blank">
                            <span className="flex flex-row items-center hover:text-accent transition-colors">Resume <RiExternalLinkLine className="ml-2" color="#61dafb" /></span>
                        </a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;

interface LinkProps {
    href: string;
    text: string;
}

const Link: React.FC<LinkProps> = ({ href, text }) => {
    // const [activeHash, setActiveHash] = useState<string>();

    // useEffect(() => {
    //     const handleHashChange = () => setActiveHash(window.location.hash);

    //     window.addEventListener('hashchange', handleHashChange);

    //     return () => window.removeEventListener('hashchange', handleHashChange);
    // }, []);

    return (
        <li className={`my-3 mx-3 text-lg hover:text-accent transition-colors`}><a href={`#${href}`}>{text}</a></li>
    )
}

// ${activeHash?.includes(href) && ' text-accent'}