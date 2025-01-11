type MainContentProps = React.ComponentPropsWithoutRef<"div">;

const MainContent = (props: MainContentProps) => {
    const { children } = props;

    return (
        <div className="h-full grid grid-cols-[auto_1fr_1fr] gap-0.5">
            {children}
        </div>
    );
};

export default MainContent;
