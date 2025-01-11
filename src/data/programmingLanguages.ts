import { Option } from "@/components/Select";
import { DiJavascript1 } from "react-icons/di";
import { FaJava, FaPython } from "react-icons/fa";

const programmingLanguages: Option[] = [
    {
        id: 1,
        value: "javascript",
        label: "Javascript",
        category: "Language",
        icon: DiJavascript1,
    },
    {
        id: 2,
        value: "python",
        label: "Python",
        category: "Language",
        icon: FaPython,
    },
    {
        id: 3,
        value: "java",
        label: "Java",
        category: "Language",
        icon: FaJava,
    },
    {
        id: 4,
        value: "csharp",
        label: "C#",
        category: "Language",
        icon: FaPython,
    },
];

export default programmingLanguages;
