import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Payslip from "../components/payslip/Payslip";
import PayrollItems from "../components/payrollItems/PayrollItems";
import EmployeeSalary from "../components/home/EmployeeSalary";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path: '',
                element: <EmployeeSalary/>
            },
            {
                path: 'payslip',
                element: <Payslip/>
            },
            {
                path: 'payrollItems',
                element: <PayrollItems/>
            }
        ]
    }
])