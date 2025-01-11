import Container from "@/components/Container";
import { BsChevronRight } from "react-icons/bs";
import Button from "./Button";

type NavbarProps = {};

const Navbar = (props: NavbarProps) => {
    const {} = props;

    return (
        <nav className="grid grid-cols-[auto_1fr_1fr] gap-0.5">
            <button className="h-3 w-3 flex transition-all items-center justify-center rounded-0.5 hover:bg-gray-100 dark:hover:bg-gray-700 white-focus">
                <BsChevronRight className="text-1.625 text-gray-500   dark:hover:text-gray-300" />
            </button>
            <div className="w-full gap-0.5 flex items-center">
                <Button colorScheme="green">Run</Button>
                <Button colorScheme="red">Stop</Button>
            </div>
            <div className="w-full"></div>
        </nav>
    );
};

export default Navbar;
