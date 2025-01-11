import Menubar from "@/components/Menubar";
import { useLayoutContext } from "@/context/layoutContext";
import programmingLanguages from "@/data/programmingLanguages";
import { useToggle } from "@/hooks/useToggle";
import clsx from "clsx";
import { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import FullScreenModal, {
    ModalBody,
    ModalContents,
    ModalHead,
} from "./FullScreenModal/FullScreenModal";
import Select from "./Select";
import Switch from "./Switch";
import ThemeToggler from "./ThemeToggler";

type AsideProps = {};

const Aside = (props: AsideProps) => {
    const {} = props;
    const { sidebarCollapsed } = useLayoutContext();
    const [currentProgramminLanguage, setCurrentProgrammingLanguage] = useState(
        programmingLanguages[0]
    );

    const { isOpen: sync, toggle: toggleSync } = useToggle(true);

    const { close, isOpen, open, toggle } = useToggle(true);

    return (
        <div
            className={clsx(
                "transition-all",
                sidebarCollapsed ? "w-0" : "w-3.5"
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
                            <div className="space-y-3">
                                <div>
                                    <h3 className="mb-0.5 text-1 text-gray-600 dark:text-gray-400 font-normal">
                                        Compiler Settings
                                    </h3>
                                    <div className="flex items-start justify-between">
                                        <h4>Language</h4>
                                        <Select
                                            value={programmingLanguages[0]}
                                            onChange={() => {}}
                                            options={programmingLanguages}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="mb-0.5 text-1 text-gray-600 dark:text-gray-400 font-normal">
                                        Theme Settings
                                    </h3>
                                    <div className="space-y-1">
                                        <div className=" gap-1 flex items-start justify-between">
                                            <div>
                                                <h4>
                                                    Sync color mode and theme
                                                </h4>
                                                <p className="text-0.75 text-gray-600 dark:text-gray-400">
                                                    System will pick a suitable
                                                    editor theme based on color
                                                    mode
                                                </p>
                                            </div>
                                            <Switch
                                                htmlFor="syncSwitch"
                                                checked={sync}
                                                onChange={toggleSync}
                                                size="sm"
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <h4>Color Mode:</h4>
                                            <ThemeToggler size="sm" />
                                        </div>
                                        <div className="flex items-start justify-between">
                                            <h4>Editor Theme:</h4>
                                            <Select
                                                value={
                                                    currentProgramminLanguage
                                                }
                                                onChange={
                                                    setCurrentProgrammingLanguage
                                                }
                                                options={programmingLanguages}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                    </ModalContents>
                </FullScreenModal>
            </aside>
        </div>
    );
};

export default Aside;
