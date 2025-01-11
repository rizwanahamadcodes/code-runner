import { DiJavascript1 } from "react-icons/di";
import { FaJava, FaPython } from "react-icons/fa";
import { IconType } from "react-icons";

export type ProgrammingLanguage = {
    id: number;
    value: string;
    label: string;
    category: string;
    icon: IconType;
};
const programmingLanguages: ProgrammingLanguage[] = [
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
