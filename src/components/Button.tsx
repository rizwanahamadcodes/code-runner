import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { IconType } from "react-icons";

export const button = cva(
    [
        "font-medium rounded-full flex justify-center items-center gap-0.75 h-2.5 px-1 focus:outline-none active:scale-95 transition-all",
    ],
    {
        variants: {
            variant: {
                solid: "",
                outline:
                    "shadow-md dark:shadow-black/20 shadow-black/10 border-2 hover:shadow-lg",
                ghost: "",
            },
            colorScheme: {
                primary: "",
                green: "",
                red: "",
            },
        },

        compoundVariants: [
            {
                variant: "solid",
                colorScheme: "primary",
                className:
                    "bg-gradient-to-br from-primary to-primary-400  hover:from-primary-600 hover:to-primary text-white shadow-lg shadow-primary/30  dark:shadow-primary-700/30 primary-focus",
            },
            {
                variant: "solid",
                colorScheme: "green",
                className:
                    "bg-green-500 hover:bg-green-600 text-white green-focus",
            },
            {
                variant: "solid",
                colorScheme: "red",
                className: "bg-red-500 hover:bg-red-600 text-white red-focus",
            },
        ],

        defaultVariants: {
            variant: "solid",
            colorScheme: "primary",
        },
    }
);

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
    VariantProps<typeof button> & {
        children?: React.ReactNode;
        className?: string;
    };

export const Button = (props: ButtonProps) => {
    const { children, variant, className, colorScheme, ...otherProps } = props;

    return (
        <button
            className={clsx(button({ variant, colorScheme }), className)}
            {...otherProps}>
            {children}
        </button>
    );
};

type ButtonIconProps = React.ComponentPropsWithoutRef<IconType> & {
    icon: IconType;
    className?: string;
};

export const ButtonIcon = (props: ButtonIconProps) => {
    const { icon: Icon, className, ...otherProps } = props;

    return <Icon className={clsx("text-1.25", className)} {...otherProps} />;
};

export default Button;
