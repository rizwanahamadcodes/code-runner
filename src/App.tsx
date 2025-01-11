import Container from "@/components/Container";
import ThemeToggler from "@/components/ThemeToggler";

import Select, { Option } from "@/components/Select";
import { useState } from "react";
import options from "@/data/programmingLanguages";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import MainWrapper from "./components/MainWrapper";

function App() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleChange = (option: Option) => {
        setSelectedId(option.id);
    };

    const selectedOption: Option =
        options.find((option) => option.id === selectedId) ?? options[0];

    return (
        <>
            <Navbar />
            <div className="flex">
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
