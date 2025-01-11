import { useCodeContext } from "@/context/codeContext";
import { useLayoutContext } from "@/context/layoutContext";
import { useSettingsContext } from "@/context/settingsContext";
import CodeMirror from "@uiw/react-codemirror";
import clsx from "clsx";
import React from "react";
import { FaBroom } from "react-icons/fa";
import { LuChevronRight } from "react-icons/lu";

type EditorsWrapperProps = React.ComponentPropsWithoutRef<"main">;

const EditorsWrapper = (props: EditorsWrapperProps) => {
    const { className } = props;
    const { outputCollapsed, setOutputCollapsed } = useLayoutContext();
    const { code, output, setCode, setOutput } = useCodeContext();
    const { theme, currentProgrammingLanguage } = useSettingsContext();

    return (
        <main
            className={clsx(
                "flex flex-col md:flex-row grow w-20 gap-0.5 h-full",
                className
            )}>
            <div
                className={clsx(
                    "md:h-full transition-all w-full",
                    outputCollapsed ? "md:w-full h-full" : "md:w-1/2 h-1/2"
                )}>
                <CodeMirror
                    value={code}
                    height="100%"
                    theme={theme.theme}
                    extensions={[currentProgrammingLanguage.language()]}
                    onChange={setCode}
                    className="h-full rounded-0.5 w-full overflow-hidden shadow"
                />
            </div>
            <div
                className={clsx(
                    "md:h-full relative transition-all w-full",
                    outputCollapsed ? "md:w-6 h-6" : "md:w-1/2 h-1/2"
                )}>
                <button
                    onClick={() => {
                        setOutputCollapsed((prev) => !prev);
                    }}
                    className="absolute z-20 bg-gray-50 dark:bg-gray-900 rounded-e-2.5 flex items-center border border-gray-100  dark:border-gray-900 border-l-0   justify-center w-3 h-3 md:top-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 md:left-0 top:0 left-1/2 rotate-90 md:rotate-0">
                    <LuChevronRight
                        className={clsx(
                            "text-gray-500 text-1.5",
                            outputCollapsed ? "rotate-180" : ""
                        )}
                    />
                </button>

                <button
                    onClick={() => {
                        setOutput("");
                    }}
                    className="absolute bottom-0 right-0 text-gray-500 hover:dark:text-gray-300 hover:text-gray-700 gap-0.5 px-1 z-20 h-2 mb-0.5 flex items-center justify-center">
                    <FaBroom className="" />
                    Clear
                </button>
                <CodeMirror
                    readOnly
                    contentEditable={false}
                    value={output}
                    height="100%"
                    theme={theme.theme}
                    extensions={[currentProgrammingLanguage.language()]}
                    className="h-full rounded-0.5 w-full overflow-hidden shadow"
                />
            </div>
        </main>
    );
};

export default EditorsWrapper;
