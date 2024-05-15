import NavigationMenuHeader from "./navigation-menu-header";
import ProfileMenu from "./profile-menu";

const Header = () => {
    return (
        <header className="flex justify-between h-20 w-full shrink-0 items-center px-4 md:px-6">
            <NavigationMenuHeader />

            <ProfileMenu />
        </header>
    );
}

export default Header;