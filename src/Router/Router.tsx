import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CityTable from "../components/cityTable/CityTable";
import Favourite from "../components/favourite/Favourite";
import History from "../components/history/History";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path: 'cityWether',
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