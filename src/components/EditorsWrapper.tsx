import { useLayoutContext } from "@/context/LayoutContext";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import CodeMirror from "@uiw/react-codemirror";
import clsx from "clsx";
import React, { useState } from "react";

type EditorsWrapperProps = {};

const EditorsWrapper: React.FC<EditorsWrapperProps> = () => {
    const [code, setCode] = useState<string>(""); // State to hold input code
    const { outputCollapsed, setOutputCollapsed } = useLayoutContext();

    // Handle changes in the CodeMirror editor
    const handleCodeChange = (value: string) => {
        setCode(value);
    };

    return (
        <main
            className={clsx(
                "flex flex-col md:flex-row grow w-20 gap-0.5 h-full"
            )}>
            <div
                className={clsx(
                    "md:h-full transition-all w-full",
                    outputCollapsed ? "md:w-full h-full" : "md:w-1/2 h-1/2"
                )}>
                <CodeMirror
                    value={code}
                    height="100%"
                    theme={oneDark}
                    extensions={[javascript()]}
                    onChange={handleCodeChange}
                    className="h-full rounded-0.5 w-full overflow-hidden"
                />
            </div>
            <div
                className={clsx(
                    "md:h-full transition-all w-full",
                    outputCollapsed ? "md:w-6 h-6" : "md:w-1/2 h-1/2"
                )}>
                <CodeMirror
                    // value={code}
                    height="100%"
                    theme={oneDark}
                    extensions={[javascript()]}
                    onChange={handleCodeChange}
                    className="h-full rounded-0.5 w-full overflow-hidden"
                />
            </div>
        </main>
    );
};

export default EditorsWrapper;
