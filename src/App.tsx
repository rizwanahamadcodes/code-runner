import Container from "@/components/Container";
import ThemeToggler from "@/components/ThemeToggler";

import Select, { Option } from "@/components/Select";
import { useState } from "react";
import programmingLanguages from "@/data/programmingLanguages";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import MainWrapper from "./components/MainWrapper";

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
            {/* <Navbar /> */}
            <div className="p-0.5 flex h-full space-x-0.5">
                <Aside />
                <MainWrapper />
            </div>
            {/* <ThemeToggler /> */}
            {/* <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleChange}
                    /> */}
        </>
    );
}

export default App;
