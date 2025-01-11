import clsx from "clsx";
import React from "react";
import ReactDOM from "react-dom";
import { LiaTimesSolid } from "react-icons/lia";
import {
    FullScreenModalContext,
    useFullScreenModalProps,
} from "./useFullScreenModalProps";

export type FullScreenModalProps = {
    children: React.ReactNode;
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle?: () => void;
    className?: string;
};
const FullScreenModal = (props: FullScreenModalProps) => {
    const { className, children, isOpen, open, close, toggle } = props;

    return ReactDOM.createPortal(
        <FullScreenModalContext.Provider
            value={{ isOpen, open, close, toggle }}>
            <ModalWrapper className={className}>{children}</ModalWrapper>
        </FullScreenModalContext.Provider>,
        document.querySelector("#root")!
    );
};

type ModalWrapperProps = { children?: React.ReactNode; className?: string };
export const ModalWrapper = ({ children, className }: ModalWrapperProps) => {
    const { isOpen = true, close } = useFullScreenModalProps();

    const handleDrawerWrapperClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (e.target === e.currentTarget) {
            close();
        }
    };
    return (
        <div
            onClick={handleDrawerWrapperClick}
            className={clsx(
                "fixed p-1 h-full flex items-center justify-center w-full z-50 bg-gray-900/20 dark:bg-black/20 shadow backdrop-blur-sm top-0 left-0 transition-all",
                className,
                isOpen ? "visible opacity-1" : "invisible opacity-0"
            )}>
            {children}
        </div>
    );
};

type ModalContentsProps = { children?: React.ReactNode; className?: string };
export const ModalContents = ({ children, className }: ModalContentsProps) => (
    <div
        className={clsx(
            "h-full max-w-sm w-full bg-white dark:bg-gray-900 rounded-1 overflow-hidden flex flex-col",
            className
        )}>
        {children}
    </div>
);

type ModalHeadProps = { children?: React.ReactNode; className?: string };
export const ModalHead = ({ children, className }: ModalHeadProps) => {
    const { close } = useFullScreenModalProps();
    return (
        <div
            className={clsx(
                "h-4 flex justify-between items-center py-0.5 pr-0.5 pl-1.25",
                className
            )}>
            <div className="mt-auto">{children}</div>
            <button
                onClick={close}
                className="flex items-center rounded-0.5 justify-center h-2.5 w-2.5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                <LiaTimesSolid className="text-1.5" />
            </button>
        </div>
    );
};

type ModalBodyProps = { children?: React.ReactNode; className?: string };
export const ModalBody = ({ children, className }: ModalBodyProps) => (
    <div className={clsx("grow pl-1.25 pr-1 pt-1", className)}>{children}</div>
);

type ModalFootProps = { children?: React.ReactNode; className?: string };
export const ModalFoot = ({ children, className }: ModalFootProps) => (
    <div className={clsx("h-3.5 ", className)}>{children}</div>
);

export default FullScreenModal;
