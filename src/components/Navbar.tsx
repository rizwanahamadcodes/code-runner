import { useCodeContext } from "@/context/codeContext";
import { useLayoutContext } from "@/context/layoutContext";
import clsx from "clsx";
import React from "react";
import { CgMenu } from "react-icons/cg";
import { LuChevronLeft } from "react-icons/lu";
import Button from "./Button";

type NavbarProps = React.ComponentPropsWithoutRef<"nav">;

const Navbar = (props: NavbarProps) => {
    const { className } = props;
    const { runCode, stopCode } = useCodeContext();
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
        <nav className={clsx("flex shrink-0", className)}>
            <button
                onClick={toggleSidebar}
                className={clsx(
                    "mr-0.5 h-2.5 w-3 z-10 absolute flex transition-all items-center justify-center rounded-0.5"
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
                    "transition-all",
                    sidebarCollapsed
                        ? "mr-0 h-0 w-0"
                        : "mr-0.5 h-2.5 w-3 shrink-0"
                )}></div>
            <div
                className={clsx(
                    "flex grow gap-0.5 h-full transition-all w-full duration-1000"
                )}>
                <div
                    className={clsx(
                        "md:h-full w-full transition-all flex justify-end gap-0.5",
                        outputCollapsed ? "md:w-full" : "md:w-1/2"
                    )}>
                    <Button colorScheme="green" onClick={runCode}>
                        Run
                    </Button>
                    <Button colorScheme="red" onClick={stopCode}>
                        Stop
                    </Button>
                </div>
                <div
                    className={clsx(
                        "md:h-full hidden md:block transition-all",
                        outputCollapsed ? "md:w-6" : "md:w-1/2"
                    )}></div>
            </div>
        </nav>
    );
};

export default Navbar;
