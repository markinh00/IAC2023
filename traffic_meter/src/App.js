import MainRoute from "./routes/MainRoute";
import UserProvider from "./contexts/UserContext";
import ModalProvider from "./contexts/ModalContext";

function App() {
    return (
        <UserProvider>
            <ModalProvider>
                <MainRoute />
            </ModalProvider>
        </UserProvider>
    );
}

export default App;
