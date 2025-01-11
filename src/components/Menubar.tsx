import programmingLanguages from "@/data/programmingLanguages";
import clsx from "clsx";
import { useState } from "react";

type MenubarProps = {};

const Menubar = (props: MenubarProps) => {
    const {} = props;
    const [activeMenuId, setActiveMenuId] = useState(1);

    return (
        <ul className="space-y-0.25">
            {programmingLanguages.map((programmingLanguage) => {
                const { id, icon: Icon, label } = programmingLanguage;
                return (
                    <li>
                        <button
                            title={label}
                            href="#"
                            className={clsx(
                                "h-3 w-3 flex items-center justify-center transition-all rounded-0.5 primary-focus",
                                id === activeMenuId
                                    ? "bg-primary-100 text-primary dark:bg-primary-800 dark:text-primary-300  focus:bg-primary-100"
                                    : "focus:bg-gray-100 dark:focus:bg-gray-700 text-gray-500 hover:text-gray-700  focus:text-gray-700  hover:bg-gray-100 dark:text-gray-500 dark:hover:text-gray-300 dark:focus:text-gray-300 dark:hover:bg-gray-700"
                            )}>
                            <Icon className="text-1.5" />
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Menubar;
