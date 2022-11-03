import './App.css';
import { Routes, Route } from "react-router-dom";
import SignInSide from './authentication/login'
import RAppBar from "./appbar/appBar";
import Container from "@mui/material/Container";
import SignUpSide from "./authentication/RegisterPage";
import AuthEmail from "./authentication/AuthEmail";
import HomePage from "./homepage/homePage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<RAppBar/>}>
          <Route index element={<Container sx={{height: '100vh'}}>Home</Container>} />
            <Route path="homepage" element={<HomePage />} />
          <Route path="login" element={<SignInSide />} />
            <Route path="signup" element={<SignUpSide />} />
            <Route path="auth-email" element={<AuthEmail />} />
        </Route>
      </Routes>
  );
}

export default App;