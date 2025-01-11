import { IconType } from "react-icons";
import { DiJavascript1 } from "react-icons/di";
import { FaJava, FaPython, FaRust } from "react-icons/fa";
import { RiPhpFill } from "react-icons/ri";

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
        value: "rust",
        label: "Rust",
        category: "Language",
        icon: FaRust,
    },
    {
        id: 5,
        value: "php",
        label: "Php",
        category: "Language",
        icon: RiPhpFill,
    },
];

export default programmingLanguages;
