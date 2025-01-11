import { useCodeContext } from "@/context/codeContext";
import { useLayoutContext } from "@/context/layoutContext";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import CodeMirror from "@uiw/react-codemirror";
import clsx from "clsx";
import React from "react";

type EditorsWrapperProps = React.ComponentPropsWithoutRef<"main">;

const EditorsWrapper = (props: EditorsWrapperProps) => {
    const { className } = props;
    const { outputCollapsed } = useLayoutContext();
    const { code, output, setCode } = useCodeContext();

    console.log(code);
    console.log(output);
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
                    theme={oneDark}
                    extensions={[javascript()]}
                    onChange={setCode}
                    className="h-full rounded-0.5 w-full overflow-hidden"
                />
            </div>
            <div
                className={clsx(
                    "md:h-full transition-all w-full",
                    outputCollapsed ? "md:w-6 h-6" : "md:w-1/2 h-1/2"
                )}>
                <CodeMirror
                    value={output}
                    height="100%"
                    theme={oneDark}
                    extensions={[javascript()]}
                    onChange={setCode}
                    className="h-full rounded-0.5 w-full overflow-hidden"
                />
            </div>
        </main>
    );
};

export default EditorsWrapper;
