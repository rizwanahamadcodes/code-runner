import programmingLanguages, {
    ProgrammingLanguage,
} from "@/data/programmingLanguages";
import { Theme, themes } from "@/data/themes";
import { useToggle } from "@/hooks/useToggle";
import { useTheme } from "next-themes";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface SettingsContextType {
    currentProgrammingLanguage: ProgrammingLanguage;
    setCurrentProgrammingLanguage: (value: ProgrammingLanguage) => void;
    sync: boolean;
    toggleSync: () => void;
    theme: Theme;
    setTheme: (theme: Theme) => void;
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
    const { resolvedTheme } = useTheme();
    const initialTheme: Theme =
        resolvedTheme === "light" ? themes[9] : themes[12];
    const [theme, setTheme] = useState(initialTheme);

    const [sync, setSync] = useState(true);

    const toggleSync = () => {
        setSync((oldSync) => {
            if (!oldSync) {
                const initialTheme: Theme =
                    resolvedTheme === "light" ? themes[9] : themes[12];
                setTheme(initialTheme);
            }
            return !oldSync;
        });
    };

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
