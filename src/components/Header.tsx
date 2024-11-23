const Header: React.FC = () => {
    return (
        <div className="relative w-full flex flex-row items-center justify-between p-4 text-text">
            <img width={125} height={'auto'} src="/logo.png" alt="Shaun Czubkowski, Software Engineer" />
            <nav>
                <ul className="flex flex-row">
                    <li className="mx-3 text-lg">Home</li>
                    <li className="mx-3 text-lg">About</li>
                    <li className="mx-3 text-lg">Projects</li>
                    <li className="mx-3 text-lg">Experience</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;