import Menubar from "@/components/Menubar";
import { useLayoutContext } from "@/context/layoutContext";
import { useToggle } from "@/hooks/useToggle";
import clsx from "clsx";
import { IoSettingsSharp } from "react-icons/io5";
import FullScreenModal, {
    ModalBody,
    ModalContents,
    ModalHead,
} from "./FullScreenModal/FullScreenModal";
import Settings from "./Settings";

type AsideProps = React.ComponentPropsWithoutRef<"div">;

const Aside = (props: AsideProps) => {
    const { className } = props;
    const { sidebarCollapsed } = useLayoutContext();

    const { close, isOpen, open, toggle } = useToggle(false);

    return (
        <div
            className={clsx(
                "transition-all",
                sidebarCollapsed ? "w-0" : "w-3.5",
                className
            )}>
            <aside className="flex flex-col mr-0.5 rounded-0.75 darks:bg-gray-800  bgs-white h-full p-0.25s justify-between">
                <Menubar />
                <button
                    onClick={open}
                    className="h-3 w-3 flex items-center justify-center transition-all rounded-0.5 primary-focus focus:bg-gray-100 dark:focus:bg-gray-700 text-gray-500 hover:text-gray-700  focus:text-gray-700  hover:bg-gray-100 dark:text-gray-500 dark:hover:text-gray-300 dark:focus:text-gray-300 dark:hover:bg-gray-700">
                    <IoSettingsSharp className="text-1.5" />
                </button>
                <FullScreenModal
                    isOpen={isOpen}
                    open={open}
                    close={close}
                    toggle={toggle}>
                    <ModalContents>
                        <ModalHead>
                            <h3 className="text-1.5 text-gray-800 dark:text-gray-200 font-light">
                                Settings
                            </h3>
                        </ModalHead>
                        <ModalBody>
                            <Settings />
                        </ModalBody>
                    </ModalContents>
                </FullScreenModal>
            </aside>
        </div>
    );
};

export default Aside;
