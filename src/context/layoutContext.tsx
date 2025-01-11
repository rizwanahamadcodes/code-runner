import React, { createContext, useContext, useState, ReactNode } from "react";

interface LayoutContextValue {
    outputCollapsed: boolean;
    setOutputCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
    sidebarCollapsed: boolean;
    setSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const LayoutContext = createContext<LayoutContextValue | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [outputCollapsed, setOutputCollapsed] = useState(false);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <LayoutContext.Provider
            value={{
                outputCollapsed,
                setOutputCollapsed,
                sidebarCollapsed,
                setSidebarCollapsed,
            }}>
            {children}
        </LayoutContext.Provider>
    );
};

export const useLayoutContext = (): LayoutContextValue => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error(
            "useLayoutContext must be used within a LayoutProvider"
        );
    }
    return context;
};
