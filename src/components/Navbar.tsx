import Container from "@/components/Container";
import ThemeToggler from "@/components/ThemeToggler";
import BrandLogo from "@/components/BrandLogo";

type NavbarProps = {};

const Navbar = (props: NavbarProps) => {
    const {} = props;

    return (
        <nav className="h-nav-height bg-white dark:bg-gray-900 border-b border-b-gray-50 dark:border-b-gray-850">
            <Container
                fluid
                className="flex justify-between items-center h-full">
                <BrandLogo />
                <ThemeToggler />
            </Container>
        </nav>
    );
};

export default Navbar;
