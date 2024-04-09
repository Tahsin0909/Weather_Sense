import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Favourite from "../components/favourite/Favourite";
import History from "../components/history/History";
import Home from "../components/home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'favoriteCity',
                element: <Favourite/>
            },
            {
                path: 'History',
                element: <History/>
            }
        ]
    }
])