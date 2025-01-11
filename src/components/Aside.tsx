import Menubar from "@/components/Menubar";
import { useLayoutContext } from "@/context/LayoutContext";
import clsx from "clsx";

type AsideProps = {};

const Aside = (props: AsideProps) => {
    const {} = props;
    const { sidebarCollapsed } = useLayoutContext();

    return (
        <div
            className={clsx(
                "transition-all",
                sidebarCollapsed ? "w-0" : "w-3.5"
            )}>
            <aside className="flex flex-col mr-0.5 rounded-0.75 darks:bg-gray-800  bgs-white h-full p-0.25s">
                <Menubar />
            </aside>
        </div>
    );
};

export default Aside;
