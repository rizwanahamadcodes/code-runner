import clsx from "clsx";
import React, { useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

export type Option = {
    value: string | number;
    label: string;
    [key: string]: any;
};

type SelectProps = {
    options: Option[];
    value: Option | null;
    className?: string;
    onChange: (option: Option) => void;
};

const Select = (props: SelectProps) => {
    const { options, className, value, onChange } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(
        options.findIndex((option) => option.value === value?.value)
    );
    const selectRef = useRef<HTMLDivElement>(null);

    const handleSelect = (option: Option) => {
        onChange(option);
        setIsOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        switch (e.code) {
            case "Space":
                e.preventDefault();
                setIsOpen((prev) => !prev);
                break;

            case "ArrowUp":
                e.preventDefault();
                setHighlightedIndex((prev) =>
                    prev > 0 ? prev - 1 : options.length - 1
                );
                break;

            case "ArrowDown":
                e.preventDefault();
                setHighlightedIndex((prev) =>
                    prev < options.length - 1 ? prev + 1 : 0
                );
                break;

            case "Enter":
                e.preventDefault();
                if (isOpen) {
                    if (highlightedIndex >= 0) {
                        handleSelect(options[highlightedIndex]);
                    }
                } else {
                    setIsOpen(true);
                }
                break;

            case "Escape":
                setIsOpen(false);
                break;

            default:
                break;
        }
    };

    const toggleOptions = () => {
        setIsOpen((prev) => !prev);
        setHighlightedIndex(-1);
    };

    const closeOptions = (e: React.FocusEvent<HTMLDivElement, Element>) => {
        if (
            selectRef.current &&
            !selectRef.current.contains(e.relatedTarget as Node)
        ) {
            setIsOpen(false);
            setHighlightedIndex(-1);
        }
    };

    return (
        <div
            ref={selectRef}
            className={clsx(
                "relative border border-gray-50 bg-white dark:border-gray-850 dark:bg-gray-800 shadow h-2.5 rounded-full primary-focus max-w-max",
                className
            )}
            tabIndex={0}
            onBlur={closeOptions}
            onKeyDown={handleKeyDown}>
            <div
                className="text-gray-800 dark:text-gray-100 h-full flex items-center cursor-pointer min-w-10 justify-between ps-1.25 pe-0.875"
                onClick={toggleOptions}>
                {value?.label || "Select an option"}

                <IoChevronDown
                    className={clsx(
                        "transition-all",
                        isOpen ? "rotate-180" : ""
                    )}
                />
            </div>

            {isOpen && (
                <ul className="z-50 absolute p-0.25 left-0 w-full mt-1 rounded-1.5 bg-white border border-gray-50 shadow overflow-hidden text-gray-500 space-y-0.25 dark:border-gray-850 dark:bg-gray-800 ">
                    {options.map((option, index) => (
                        <li
                            key={option.value}
                            className={clsx(
                                "h-2.5 transition-all rounded-full flex items-center px-1.25 cursor-pointer primary-focus hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-200",
                                {
                                    "bg-primary-100 dark:bg-primary-800 dark:text-primary-200 text-primary hover:bg-primary-100 hover:text-primary focus:text-primary focus:bg-primary-100 dark:focus:text-primary-200 dark:focus:bg-primary-800 dark:hover:bg-primary-800 dark:hover:text-primary-200":
                                        value?.value === option.value,
                                    "bg-gray-100 dark:bg-gray-700 outline-none ring-4 ring-primary/50 text-gray-800 dark:text-gray-200":
                                        index === highlightedIndex,
                                }
                            )}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => handleSelect(option)}
                            tabIndex={0}
                            onFocus={() => setHighlightedIndex(index)}>
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
