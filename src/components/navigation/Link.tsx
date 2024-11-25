interface LinkProps {
    href: string;
    text: string | JSX.Element;
    newTab?: boolean;
}

const Link: React.FC<LinkProps> = ({ href, text, newTab = false }) => {
    // const [activeHash, setActiveHash] = useState<string>();

    // useEffect(() => {
    //     const handleHashChange = () => setActiveHash(window.location.hash);

    //     window.addEventListener('hashchange', handleHashChange);

    //     return () => window.removeEventListener('hashchange', handleHashChange);
    // }, []);

    return (
        <li className={`my-6 md:my-3 md:mx-3 text-3xl md:text-lg md:hover:text-accent transition-colors`}><a href={`${href}`} target={newTab ? '_blank' : "_self"}>{text}</a></li>
    )
}

// ${activeHash?.includes(href) && ' text-accent'}

export default Link;