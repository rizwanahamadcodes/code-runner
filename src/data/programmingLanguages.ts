import { java } from "@codemirror/lang-java";
import { javascript } from "@codemirror/lang-javascript";
import { php } from "@codemirror/lang-php";
import { python } from "@codemirror/lang-python";
import { rust } from "@codemirror/lang-rust";
import { LanguageSupport } from "@codemirror/language"; // Import Extension type
import { IconType } from "react-icons";
import { DiJavascript1 } from "react-icons/di";
import { FaJava, FaPython, FaRust } from "react-icons/fa";
import { RiPhpFill } from "react-icons/ri";

export type ProgrammingLanguage = {
    id: number;
    value: string;
    language: () => LanguageSupport;
    label: string;
    category: string;
    icon: IconType;
};
const programmingLanguages: ProgrammingLanguage[] = [
    {
        id: 1,
        value: "javascript",
        language: javascript,
        label: "Javascript",
        category: "Language",
        icon: DiJavascript1,
    },
    {
        id: 2,
        value: "python",
        language: python,
        label: "Python",
        category: "Language",
        icon: FaPython,
    },
    {
        id: 3,
        value: "java",
        language: java,
        label: "Java",
        category: "Language",
        icon: FaJava,
    },
    {
        id: 4,
        value: "rust",
        language: rust,
        label: "Rust",
        category: "Language",
        icon: FaRust,
    },
    {
        id: 5,
        value: "php",
        language: php,
        label: "Php",
        category: "Language",
        icon: RiPhpFill,
    },
];

export default programmingLanguages;
