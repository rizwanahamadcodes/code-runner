import clsx from "clsx";

type SwitchProps = React.ComponentPropsWithoutRef<"label"> & {
    size?: "sm" | "md" | "lg";
    checked: boolean;
    onChange: React.Dispatch<React.SetStateAction<boolean>>;
};

const Switch = (props: SwitchProps) => {
    const {
        className,
        htmlFor,
        size = "md",
        checked,
        onChange,
        ...otherProps
    } = props;

    const handleCheckboxKeyDown = (
        e: React.KeyboardEvent<HTMLLabelElement>
    ) => {
        switch (e.code) {
            case "Space":
            case "Enter":
                onChange((prevChange) => !prevChange);
        }
    };

    return (
        <label
            tabIndex={0}
            onKeyDown={handleCheckboxKeyDown}
            htmlFor={htmlFor}
            className={clsx(
                "primary-focus relative block cursor-pointer select-none rounded-full shadow",
                size === "md" ? "w-4" : size === "sm" ? "w-3" : "",
                className
            )}
            {...otherProps}>
            <input
                type="checkbox"
                id={htmlFor}
                className="peer/switch absolute h-0 w-0 opacity-0"
                checked={checked}
                onChange={() => {
                    onChange((prevChange) => !prevChange);
                }}
            />

            <div
                className={clsx(
                    "flex transition-all items-center justify-between rounded-full peer-checked/switch:bg-primary bg-gray-200 peer-checked/switch:dark:bg-primary dark:bg-gray-700",
                    size === "md"
                        ? "h-2 w-4 p-0.5"
                        : size === "sm"
                        ? "h-1.5 w-3 p-0.25"
                        : ""
                )}></div>
            <div
                className={clsx(
                    "absolute rounded-full peer-checked/switch:bg-white transition-all bg-white",
                    size === "md"
                        ? "peer-checked/switch:right-0.25 top-0.25 h-1.5 w-1.5 right-2.25 "
                        : size === "sm"
                        ? "peer-checked/switch:right-0.125 top-0.125 h-1.25 w-1.25 right-1.625 "
                        : ""
                )}></div>
        </label>
    );
};

export default Switch;
