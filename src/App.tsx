import Aside from "@/components/Aside";
import EditorsWrapper from "@/components/EditorsWrapper";
import MainContent from "@/components/MainContent";
import Navbar from "@/components/Navbar";
import { LayoutProvider } from "./context/LayoutContext";

function App() {
    return (
        <>
            <LayoutProvider>
                <Navbar />
                <MainContent>
                    <Aside />
                    <EditorsWrapper />
                </MainContent>
            </LayoutProvider>
        </>
    );
}

export default App;
