import { Option } from "@/components/Select";
import programmingLanguages from "@/data/programmingLanguages";
import { useState } from "react";
import Aside from "@/components/Aside";
import EditorsWrapper from "@/components/EditorsWrapper";
import MainContent from "@/components/MainContent";
import Navbar from "@/components/Navbar";
import { LayoutProvider } from "./context/LayoutContext";

function App() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const handleChange = (option: Option) => {
        setSelectedId(option.id);
    };

    const selectedOption: Option =
        programmingLanguages.find((option) => option.id === selectedId) ??
        programmingLanguages[0];

    return (
        <>
            <LayoutProvider>
                <Navbar />
                <MainContent>
                    <Aside />
                    <EditorsWrapper />
                </MainContent>
            </LayoutProvider>
        </>
    );
}

export default App;
