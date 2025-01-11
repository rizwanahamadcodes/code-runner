import ThemeToggler from "@/components/ThemeToggler";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import CodeMirror from "@uiw/react-codemirror";
import React, { useState } from "react";

type EditorsWrapperProps = {};

const EditorsWrapper: React.FC<EditorsWrapperProps> = () => {
    const [code, setCode] = useState<string>(""); // State to hold input code

    // Handle changes in the CodeMirror editor
    const handleCodeChange = (value: string) => {
        setCode(value);
    };

    return (
        <>
            <div className="">
                <CodeMirror
                    value={code}
                    height="100%"
                    theme={oneDark}
                    extensions={[javascript()]}
                    onChange={handleCodeChange}
                    className="grow h-full rounded-0.5 overflow-hidden"
                />
            </div>
            <div className="">
                <ThemeToggler />
                <pre className="text-sm text-gray-800 dark:text-gray-200">
                    {code || "Your output will appear here..."}
                </pre>
            </div>
        </>
    );
};

export default EditorsWrapper;
