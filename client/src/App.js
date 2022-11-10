//CSS
import './App.css'
//Imports
import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
//Components
import MyHomeAppBarComponent from './components/appBar/home.appBar.component'
import MyAuthenticationAppBarComponent from './components/appBar/authentication.appBar.component'
//Pages
//import MyLayoutPage from './pages/layout/layout.page.component'
import MyHomePage from './pages/home/home.page'
import MyLoginPage from './pages/authentication/login.page'
import MyRegisterPage from './pages/authentication/register.page'
import MyVerifyPage from './pages/authentication/verify.page'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MyHomeAppBarComponent />}>
                <Route index element={<MyHomePage />}/>
                <Route path="home" element={<MyHomePage />} />
            </Route>
                <Route path="authentication/" element={<MyAuthenticationAppBarComponent />}>
                    <Route path="login" element={<MyLoginPage />} />
                    <Route path="register" element={<MyRegisterPage />} />
                    <Route path="verify" element={<MyVerifyPage />} />
                </Route>
            {/*</Route>*/}
        </Routes>
    );
}