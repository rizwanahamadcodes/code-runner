import { useSettingsContext } from "@/context/settingsContext";
import programmingLanguages from "@/data/programmingLanguages";
import clsx from "clsx";
import React from "react";

type MenubarProps = React.ComponentPropsWithoutRef<"ul">;

const Menubar = (props: MenubarProps) => {
    const { className } = props;

    const { currentProgrammingLanguage, setCurrentProgrammingLanguage } =
        useSettingsContext();

    return (
        <ul className={clsx("space-y-0.25", className)}>
            {programmingLanguages.map((programmingLanguage) => {
                const { id, icon: Icon, label } = programmingLanguage;
                return (
                    <li key={id}>
                        <button
                            onClick={() => {
                                setCurrentProgrammingLanguage(
                                    programmingLanguage
                                );
                            }}
                            title={label}
                            className={clsx(
                                "h-3 w-3 flex items-center justify-center transition-all rounded-0.5 primary-focus",
                                programmingLanguage.id ===
                                    currentProgrammingLanguage.id
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
