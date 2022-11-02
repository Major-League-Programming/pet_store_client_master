import { lazy } from 'react';

const Login = lazy(() => import('../login2'));
const Register = lazy(() => import('../RegisterPage2'));


const LoginRoutes = {
    path: '/',
    children: [
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        }
    ]
};

export default LoginRoutes;