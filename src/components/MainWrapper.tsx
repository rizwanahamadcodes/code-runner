import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import Select from "./Select";
import programmingLanguages from "@/data/programmingLanguages";
import ThemeToggler from "./ThemeToggler";

type MainWrapperProps = {};

const MainWrapper: React.FC<MainWrapperProps> = () => {
    const [code, setCode] = useState<string>(""); // State to hold input code

    // Handle changes in the CodeMirror editor
    const handleCodeChange = (value: string) => {
        setCode(value);
    };

    return (
        <div className="grow flex gap-0.5">
            <div className="h-full overflow-hidden flex flex-col rounded-0.5 w-full">
                <div className="p-0.25 min-h-nav-height flex items-center gap-1">
                    Input
                    {/* <Select
                        className="ms-auto"
                        onChange={() => {}}
                        options={programmingLanguages}
                        value={programmingLanguages[0]}
                        key={1}
                    /> */}
                    <button className="h-2.5 px-1.25 rounded-full bg-green-700">
                        Run
                    </button>
                    <ThemeToggler />
                </div>
                <CodeMirror
                    value={code}
                    height="100%"
                    theme={oneDark}
                    extensions={[javascript()]}
                    onChange={handleCodeChange}
                    className="grow h-full rounded-0.5 overflow-hidden"
                />
            </div>

            <div className="dark:bg-gray-800 bg-white rounded-0.5 w-full p-2">
                <pre className="text-sm text-gray-800 dark:text-gray-200">
                    {code || "Your output will appear here..."}
                </pre>
            </div>
        </div>
    );
};

export default MainWrapper;
