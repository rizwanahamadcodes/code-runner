import { createContext, useContext } from "react";
import { FullScreenModalProps } from "@/components/FullScreenModal/FullScreenModal";

export const FullScreenModalContext = createContext<Omit<
    FullScreenModalProps,
    "children"
> | null>(null);

export const useFullScreenModalProps = () => {
    const fullScreenModal = useContext(FullScreenModalContext);

    if (!fullScreenModal) {
        throw Error(
            "useFullScreenModalContext must be used inside FullScreenModalContext.Provider"
        );
    }

    return fullScreenModal;
};
