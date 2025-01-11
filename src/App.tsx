import Container from "@/components/Container";
import ThemeToggler from "@/components/ThemeToggler";

import Select, { Option } from "@/components/Select";
import { useState } from "react";

function App() {
    const options: Option[] = [
        {
            id: 1,
            value: "javascript",
            label: "Javascript",
            category: "Language",
        },
        { id: 2, value: "python", label: "Python", category: "Language" },
        { id: 3, value: "java", label: "Java", category: "Language" },
        { id: 4, value: "csharp", label: "C#", category: "Language" },
    ];

    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleChange = (option: Option) => {
        setSelectedId(option.id);
        console.log("Selected option ID:", option.id);
    };

    const selectedOption: Option =
        options.find((option) => option.id === selectedId) ?? options[0];

    return (
        <div>
            <Container className="mb-1">
                <ThemeToggler />
            </Container>
            <Container>
                <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleChange}
                />
                {selectedOption && (
                    <div className="mt-4">
                        <p>
                            <strong>Selected ID:</strong> {selectedOption.id}
                        </p>
                        <p>
                            <strong>Selected Value:</strong>{" "}
                            {selectedOption.value}
                        </p>
                        <p>
                            <strong>Selected Label:</strong>{" "}
                            {selectedOption.label}
                        </p>
                        <p>
                            <strong>Category:</strong>{" "}
                            {selectedOption.category || "N/A"}
                        </p>
                    </div>
                )}
            </Container>
        </div>
    );
}

export default App;
