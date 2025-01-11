import clsx from "clsx";

type ContainerProps = React.ComponentPropsWithoutRef<"div"> & {
    fluid?: boolean;
};

const Container = (props: ContainerProps) => {
    const { children, fluid = false, className, ...otherProps } = props;
    return (
        <div
            className={clsx(
                "m-auto",
                fluid ? "px-0.5 w-full" : "w-[86%] max-w-7xl",
                className
            )}
            {...otherProps}>
            {children}
        </div>
    );
};

export default Container;
