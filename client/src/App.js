import './App.css';
import { Routes, Route } from "react-router-dom";
import SignInSide from './authentication/login'
import RAppBar from "./appbar/appBar";

function App() {
  return (
      <Routes>
        <Route path="/" element={<RAppBar/>}>
          <Route index element={<p>Home</p>} />
          <Route path="login" element={<SignInSide />} />
        </Route>
      </Routes>
  );
}

export default App;