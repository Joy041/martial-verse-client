import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import Classes from "../../Pages/Classes/Classes";
import Dashboard from "../../Layout/Dashboard";
import ManageUser from "../../Pages/Dashboard/Admin/ManageUser/ManageUser";
import MyClass from "../../Pages/Dashboard/Instructor/MyClass/MyClass";
import ManageClasses from "../../Pages/Dashboard/Admin/ManageClasses/ManageClasses";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import InstructorRoutes from "../InstructorRoutes/InstructorRoutes";
import SelectClass from "../../Pages/Dashboard/Student/SelectClass/SelectClass";
import Payment from "../../Pages/Dashboard/Student/Payment/Payment";
import Instructors from "../../Pages/Instructors/Instructors";
import EnrolledClasses from "../../Pages/Dashboard/Student/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../../Pages/Dashboard/Student/PaymentHistory/PaymentHistory";
import AddClass from "../../Pages/Dashboard/Instructor/AddClass/AddClass";
import Error from "../../Pages/Error/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'classes',
          element: <Classes></Classes>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children: [
        // ADMIN
        {
          path: 'users',
          element: <AdminRoutes><ManageUser></ManageUser></AdminRoutes>
        },
        {
          path: 'manageclass',
          element: <AdminRoutes><ManageClasses></ManageClasses></AdminRoutes>
        },

        // INSTRUCTOR
        {
          path: 'myclass',
          element: <InstructorRoutes><MyClass></MyClass></InstructorRoutes>
        },
        {
          path: 'addclass',
          element: <InstructorRoutes><AddClass></AddClass></InstructorRoutes>
        },

        // STUDENT
        {
          path: 'selectclass',
          element: <SelectClass></SelectClass>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'enrolled',
          element: <EnrolledClasses></EnrolledClasses>
        },
        {
          path: 'paymenthistory',
          element: <PaymentHistory></PaymentHistory>
        }
        
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);
  
  export default router