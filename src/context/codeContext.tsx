import React, { createContext, useContext, useEffect, useState } from "react";
import { useSettingsContext } from "./settingsContext";

const WS_URL = "wss://compiler.skillshikshya.com/ws/compiler/";

interface CodeContextType {
    code: string;
    setCode: (code: string) => void;
    output: string;
    setOutput: (output: string) => void;
    runCode: () => void;
    stopCode: () => void;
}

const CodeContext = createContext<CodeContextType | undefined>(undefined);

export const CodeProvider = ({ children }: { children: React.ReactNode }) => {
    const [code, setCode] = useState<string>("");
    const [output, setOutput] = useState<string>("");
    const [ws, setWs] = useState<WebSocket | null>(null);
    const { currentProgrammingLanguage } = useSettingsContext();

    useEffect(() => {
        const socket = new WebSocket(WS_URL);
        socket.onopen = () => {
            console.log("WebSocket connected");
        };
        socket.onclose = () => {
            console.log("WebSocket closed");
        };
        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.data) {
                setOutput((prev) => prev + message.data);
            }
        };
        setWs(socket);
        return () => {
            socket.close();
        };
    }, []);

    const runCode = () => {
        if (ws && code) {
            const payload = {
                command: "run",
                code: code,
                language: currentProgrammingLanguage.value,
                input: "",
            };
            ws.send(JSON.stringify(payload));
            setOutput("");
        }
    };

    const stopCode = () => {
        if (ws) {
            const payload = { command: "stop" };
            ws.send(JSON.stringify(payload));
            // setOutput("");
        }
    };

    return (
        <CodeContext.Provider
            value={{ code, setCode, output, setOutput, runCode, stopCode }}>
            {children}
        </CodeContext.Provider>
    );
};

export const useCodeContext = (): CodeContextType => {
    const context = useContext(CodeContext);
    if (!context) {
        throw new Error("useCodeContext must be used within a CodeProvider");
    }
    return context;
};
