import { useCodeContext } from "@/context/codeContext";
import { useLayoutContext } from "@/context/layoutContext";
import { useSettingsContext } from "@/context/settingsContext";
import CodeMirror from "@uiw/react-codemirror";
import clsx from "clsx";
import React from "react";

type EditorsWrapperProps = React.ComponentPropsWithoutRef<"main">;

const EditorsWrapper = (props: EditorsWrapperProps) => {
    const { className } = props;
    const { outputCollapsed } = useLayoutContext();
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
                    "md:h-full transition-all w-full",
                    outputCollapsed ? "md:w-6 h-6" : "md:w-1/2 h-1/2"
                )}>
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
