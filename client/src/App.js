import './App.css';
import { Routes, Route } from "react-router-dom";
import SignInSide from './Pages/Authentication/login'
import RAppBar from "./Components/Appbar/appBar";
import Container from "@mui/material/Container";
import SignUpSide from "./Pages/Authentication/registerPage";
import AuthEmail from "./Pages/Authentication/authEmail";
import HomePage from "./Pages/Homepage/homePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<RAppBar/>}>
                <Route index element={<HomePage/>}/>
                <Route path="homepage" element={<HomePage />} />
                <Route path="login" element={<SignInSide />} />
                <Route path="signup" element={<SignUpSide />} />
                <Route path="auth-email" element={<AuthEmail />} />
            </Route>
        </Routes>
    );
}

export default App;