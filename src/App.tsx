import Aside from "@/components/Aside";
import EditorsWrapper from "@/components/EditorsWrapper";
import MainContent from "@/components/MainContent";
import Navbar from "@/components/Navbar";
import { LayoutProvider } from "./context/layoutContext";
import { SettingsProvider } from "./context/settingsContext";

function App() {
    return (
        <>
            <SettingsProvider>
                <LayoutProvider>
                    <Navbar />
                    <MainContent>
                        <Aside />
                        <EditorsWrapper />
                    </MainContent>
                </LayoutProvider>
            </SettingsProvider>
        </>
    );
}

export default App;
