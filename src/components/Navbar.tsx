import { useLayoutContext } from "@/context/LayoutContext";
import clsx from "clsx";
import { CgMenu } from "react-icons/cg";
import { LuChevronLeft } from "react-icons/lu";
import Button from "./Button";

type NavbarProps = {};

const Navbar = (props: NavbarProps) => {
    const {} = props;
    const {
        outputCollapsed,
        setOutputCollapsed,
        sidebarCollapsed,
        setSidebarCollapsed,
    } = useLayoutContext();
    const toggleSidebar = () => {
        setSidebarCollapsed((oldSidebarCollapsed) => !oldSidebarCollapsed);
    };
    return (
        <nav className="flex shrink-0">
            <button
                onClick={toggleSidebar}
                className={clsx(
                    "mr-0.5 h-2.5 w-3 flex transition-all items-center justify-center rounded-0.5",
                    sidebarCollapsed ? "absolute" : "relative"
                )}>
                {sidebarCollapsed ? (
                    <CgMenu
                        className={clsx(
                            "text-1.625 text-gray-500 transition-all"
                        )}
                    />
                ) : (
                    <LuChevronLeft
                        className={clsx(
                            "text-2.25 text-gray-500 transition-all"
                        )}
                    />
                )}
            </button>
            <div
                className={clsx(
                    "grow grid gap-x-0.5 transition-all",
                    outputCollapsed
                        ? "md:grid-cols-[1fr_6rem] grid-cols-[1fr]"
                        : "md:grid-cols-[1fr_50%] grid-cols-[1fr]"
                )}>
                <div className="w-full gap-0.5 flex justify-end items-center">
                    <Button
                        colorScheme="green"
                        onClick={() => {
                            setOutputCollapsed(true);
                        }}>
                        Run
                    </Button>
                    <Button
                        colorScheme="red"
                        onClick={() => {
                            setOutputCollapsed(false);
                        }}>
                        Stop
                    </Button>
                </div>
                <div className="w-full"></div>
            </div>
        </nav>
    );
};

export default Navbar;
