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
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        // ADMIN
        {
          path: 'users',
          element: <ManageUser></ManageUser>
        },
        {
          path: 'manageclass',
          element: <ManageClasses></ManageClasses>
        },
        // INSTRUCTOR
        {
          path: 'myclass',
          element: <MyClass></MyClass>
        }
        
      ]
    }
  ]);
  
  export default router