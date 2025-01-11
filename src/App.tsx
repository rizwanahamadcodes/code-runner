import Aside from "@/components/Aside";
import EditorsWrapper from "@/components/EditorsWrapper";
import MainContent from "@/components/MainContent";
import Navbar from "@/components/Navbar";
import { LayoutProvider } from "./context/layoutContext";
import { SettingsProvider } from "./context/settingsContext";
import { CodeProvider } from "./context/codeContext";

function App() {
    return (
        <>
            <SettingsProvider>
                <LayoutProvider>
                    <CodeProvider>
                        <Navbar />
                        <MainContent>
                            <Aside />
                            <EditorsWrapper />
                        </MainContent>
                    </CodeProvider>
                </LayoutProvider>
            </SettingsProvider>
        </>
    );
}

export default App;
