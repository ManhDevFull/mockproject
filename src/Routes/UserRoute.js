import LoginPage from "../Pages/ClientPages/LoginPage/LoginPage.js"
import HomePage from "../Pages/ClientPages/HomePage/HomePage.js"
const UserRoute=[
    {
        path:'/signin/client',
        element: LoginPage
    },
    {
        path:'/',
        element: HomePage
    },
    
]
export default UserRoute
