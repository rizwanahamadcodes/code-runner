import Menubar from "@/components/Menubar";

type AsideProps = {};

const Aside = (props: AsideProps) => {
    const {} = props;

    return (
        <aside className="flex flex-col rounded-0.75 darks:bg-gray-800  bgs-white h-full p-0.25s">
            <Menubar />
        </aside>
    );
};

export default Aside;
