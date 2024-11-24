
const Header: React.FC = () => {

    return (
        <div className="sticky top-0 w-full flex flex-row items-center justify-between p-4 text-text z-50">
            <img width={125} height={'auto'} src="/logo.png" alt="Shaun Czubkowski, Software Engineer" />
            <nav>
                <ul className="flex flex-row">
                    <li className="mx-3 text-lg"><a href="#about">About</a></li>
                    <li className="mx-3 text-lg"><a href="#skills">Skills</a></li>
                    <li className="mx-3 text-lg">Projects</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;