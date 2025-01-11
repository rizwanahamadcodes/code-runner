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
                "grow h-full grid gap-0.5 transition-all",
                outputCollapsed
                    ? "grid-cols-1 grid-rows-[1fr_6rem] md:grid-cols-[1fr_6rem] md:grid-rows-[1fr]"
                    : "grid-cols-1 grid-rows-[1fr_50%] md:grid-cols-[1fr_50%]  md:grid-rows-[1fr]"
            )}>
            <div className="flex flex-col">
                <CodeMirror
                    value={code}
                    height="100%"
                    theme={oneDark}
                    extensions={[javascript()]}
                    onChange={handleCodeChange}
                    className="grow rounded-0.5 overflow-hidden"
                />
            </div>
            <div className="flex flex-col">
                <CodeMirror
                    // value={code}
                    height="100%"
                    theme={oneDark}
                    extensions={[javascript()]}
                    onChange={handleCodeChange}
                    className="grow rounded-0.5 overflow-hidden"
                />
            </div>
        </main>
    );
};

export default EditorsWrapper;
