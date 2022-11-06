import MyHomePage from '../pages/home/home.page'
import MyLoginPage from '../pages/authentication/login.page'
import MyRegisterPage from '../pages/authentication/register.page'
import MyVerifyPage from '../pages/authentication/verify.page'

export const Routes = {
    path: '/',
    children: [
        {
            path: '/home',
            children: [
                {
                    path: '',
                    element: <MyHomePage />
                }
            ]
        },
        {
            path: '/authentication',
            children: [
                {
                    path: '/login',
                    element: <MyLoginPage />
                },
                {
                    path: '/register',
                    element: <MyRegisterPage />
                },
                {
                    path: '/verify',
                    element: <MyVerifyPage />
                },
            ]
        }
    ]
};