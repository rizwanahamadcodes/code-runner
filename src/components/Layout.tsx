type LayoutProps = React.ComponentPropsWithoutRef<"div">;

const Layout = (props: LayoutProps) => {
    const { children } = props;

    return (
        <div className="grid grid-cols-[auto_1fr_1fr] grid-rows-[auto_1fr] p-0.5  h-full gap-0.5">
            {children}
        </div>
    );
};

export default Layout;
