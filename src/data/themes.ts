import { dracula } from "@uiw/codemirror-theme-dracula";
import { solarizedDark } from "@uiw/codemirror-theme-solarized";
import { solarizedLight } from "@uiw/codemirror-theme-solarized";
import { monokai } from "@uiw/codemirror-theme-monokai";
import { gruvboxDark } from "@uiw/codemirror-theme-gruvbox-dark";
import { gruvboxLight } from "@uiw/codemirror-theme-gruvbox-dark";
import { nord } from "@uiw/codemirror-theme-nord";
import { materialDark } from "@uiw/codemirror-theme-material";
import { materialLight } from "@uiw/codemirror-theme-material";
import { githubDark } from "@uiw/codemirror-theme-github";
import { githubLight } from "@uiw/codemirror-theme-github";
import { atomone } from "@uiw/codemirror-theme-atomone";
import { oneDark } from "@codemirror/theme-one-dark";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { vscodeLight } from "@uiw/codemirror-theme-vscode";
import { xcodeDark } from "@uiw/codemirror-theme-xcode";

export type Theme = {
    value: string;
    label: string;
    theme: typeof dracula;
};

export const themes: Theme[] = [
    {
        value: "dracula",
        label: "Dracula",
        theme: dracula,
    },
    {
        value: "oneDark",
        label: "One Dark",
        theme: oneDark,
    },
    {
        value: "solarizedDark",
        label: "Solarized Dark",
        theme: solarizedDark,
    },
    {
        value: "solarizedLight",
        label: "Solarized Light",
        theme: solarizedLight,
    },
    {
        value: "monokai",
        label: "Monokai",
        theme: monokai,
    },
    {
        value: "gruvboxDark",
        label: "Gruvbox Dark",
        theme: gruvboxDark,
    },
    {
        value: "gruvboxLight",
        label: "Gruvbox Light",
        theme: gruvboxLight,
    },
    {
        value: "nord",
        label: "Nord",
        theme: nord,
    },
    {
        value: "materialDark",
        label: "Material Dark",
        theme: materialDark,
    },
    {
        value: "materialLight",
        label: "Material Light",
        theme: materialLight,
    },
    {
        value: "githubDark",
        label: "Github Dark",
        theme: githubDark,
    },
    {
        value: "githubLight",
        label: "Github Light",
        theme: githubLight,
    },
    {
        value: "atomone",
        label: "Atom One",
        theme: atomone,
    },
    {
        value: "vscodeDark",
        label: "VSCode Dark",
        theme: vscodeDark,
    },
    {
        value: "vscodeLight",
        label: "VSCode Light",
        theme: vscodeLight,
    },
    {
        value: "xcodeDark",
        label: "Xcode Dark",
        theme: xcodeDark,
    },
];

export type ThemeName = keyof typeof themes;
