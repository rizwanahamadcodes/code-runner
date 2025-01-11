import programmingLanguages, {
    ProgrammingLanguage,
} from "@/data/programmingLanguages";
import { useToggle } from "@/hooks/useToggle";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface SettingsContextType {
    currentProgrammingLanguage: ProgrammingLanguage;
    setCurrentProgrammingLanguage: (value: ProgrammingLanguage) => void;
    sync: boolean;
    toggleSync: () => void;
    theme: string;
    setTheme: (value: string) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
    undefined
);

export const useSettingsContext = (): SettingsContextType => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error(
            "useSettingsContext must be used within a SettingsProvider"
        );
    }
    return context;
};

interface SettingsProviderProps {
    children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
    children,
}) => {
    const [currentProgrammingLanguage, setCurrentProgrammingLanguage] =
        useState(programmingLanguages[0]);
    const [theme, setTheme] = useState("");

    const { isOpen: sync, toggle: toggleSync } = useToggle(true);

    return (
        <SettingsContext.Provider
            value={{
                currentProgrammingLanguage,
                setCurrentProgrammingLanguage,
                sync,
                toggleSync,
                theme,
                setTheme,
            }}>
            {children}
        </SettingsContext.Provider>
    );
};
