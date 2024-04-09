import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Favourite from "../components/favourite/Favourite";
import History from "../components/history/History";
import Home from "../components/home/Home";
import CityTable from "../components/cityTable/CityTable";

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
                path: 'cityTable',
                element: <CityTable/>
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