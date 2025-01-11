import clsx from "clsx";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconBaseProps, IconType } from "react-icons";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

type ThemeTogglerProps = React.ComponentPropsWithoutRef<"label"> & {
    size?: "sm" | "md" | "lg";
};

const ThemeToggler = (props: ThemeTogglerProps) => {
    const { className, size = "md", ...otherProps } = props;

    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const [checked, setChecked] = useState(resolvedTheme === "dark");

    const handleCheckboxChange = () => {
        setTheme(resolvedTheme == "dark" ? "light" : "dark");
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        setChecked(resolvedTheme === "dark");
    }, [resolvedTheme]);

    if (!mounted) {
        return null;
    }

    const handleCheckboxKeyDown = (
        e: React.KeyboardEvent<HTMLLabelElement>
    ) => {
        switch (e.code) {
            case "Space":
            case "Enter":
                handleCheckboxChange();
        }
    };

    return (
        <label
            tabIndex={0}
            onKeyDown={handleCheckboxKeyDown}
            htmlFor="theme-toggle-checkbox"
            className={clsx(
                "primary-focus relative block cursor-pointer select-none rounded-full shadow",
                size === "md" ? "w-4" : size === "sm" ? "w-3" : "",
                className
            )}
            {...otherProps}>
            <input
                type="checkbox"
                id="theme-toggle-checkbox"
                className="peer/themeToggler absolute h-0 w-0 opacity-0"
                checked={checked}
                onChange={handleCheckboxChange}
            />

            <div
                className={clsx(
                    "flex transition-all items-center justify-between rounded-full bg-primary peer-checked/themeToggler:bg-gray-100",
                    size === "md"
                        ? "h-2 w-4 p-0.5"
                        : size === "sm"
                        ? "h-1.5 w-3 p-0.25"
                        : ""
                )}>
                <SunMoonIcons icon={IoIosSunny} />
                <SunMoonIcons icon={IoIosMoon} />
            </div>
            <div
                className={clsx(
                    "absolute rounded-full bg-white transition-all peer-checked/themeToggler:bg-gray-900",
                    size === "md"
                        ? "right-0.25 top-0.25 h-1.5 w-1.5 peer-checked/themeToggler:right-2.25 "
                        : size === "sm"
                        ? "right-0.125 top-0.125 h-1.25 w-1.25 peer-checked/themeToggler:right-1.625 "
                        : ""
                )}></div>
        </label>
    );
};

type SunMoonIconsProps = IconBaseProps & {
    size?: ThemeTogglerProps["size"];
    icon: IconType;
};

const SunMoonIcons = (props: SunMoonIconsProps) => {
    const { icon: Icon, size, className, ...otherProps } = props;

    return (
        <Icon
            className={clsx(
                "text-white peer-checked/themeToggler:text-gray-900 dark:text-gray-900",
                size === "md" ? "text-1.25" : size === "sm" ? "text-1" : "",
                className
            )}
            {...otherProps}></Icon>
    );
};

export default ThemeToggler;
