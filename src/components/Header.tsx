import MenuItems from "./navigation/MenuItems";
import MobileMenu from "./navigation/mobileNav/MobileMenu";

const Header: React.FC = () => {
    return (
        <div className="sticky top-0 w-full flex flex-row items-center justify-between p-4 text-text z-50 bg-inherit md:bg-transparent">
            <a href="#home"><img width={125} height={'auto'} src="/logo.png" alt="Shaun Czubkowski, Software Engineer" /></a>
            <nav className="hidden md:block">
                <MenuItems />
            </nav>

            <nav className="md:hidden">
                <MobileMenu />
            </nav>
        </div>
    );
}

export default Header;

