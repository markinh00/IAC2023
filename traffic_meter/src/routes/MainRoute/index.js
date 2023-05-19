import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootScreen from "../../screens/RootScreen";
import HomeScreen from "../../screens/HomeScreen";
import LoginScreen from "../../screens/LoginScreen";
import SignInScreen from "../../screens/SigninScreen";

export default function MainRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootScreen />}>
                    <Route path="/" element={<HomeScreen />} />
                </Route>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/signin" element={<SignInScreen />} />
            </Routes>
        </BrowserRouter>
    )
}