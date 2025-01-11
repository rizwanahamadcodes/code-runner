import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context value type
interface LayoutContextValue {
    outputCollapsed: boolean;
    setOutputCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
    sidebarCollapsed: boolean;
    setSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context
const LayoutContext = createContext<LayoutContextValue | undefined>(undefined);

// Provide the context
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

// Custom hook to access the context
export const useLayoutContext = (): LayoutContextValue => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error(
            "useLayoutContext must be used within a LayoutProvider"
        );
    }
    return context;
};
