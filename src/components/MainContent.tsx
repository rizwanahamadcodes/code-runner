type MainContentProps = React.ComponentPropsWithoutRef<"div">;

const MainContent = (props: MainContentProps) => {
    const { children } = props;

    return <div className="h-[calc(100%_-_3rem)] flex">{children}</div>;
};

export default MainContent;
