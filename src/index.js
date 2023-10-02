import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Routes
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Receipt from "./Components/Receipt";
import ForgotPassword from "./Components/ForgotPassword";
import ResetCode from "./Components/ResetCode";
import ResetPassword from "./Components/ResetPassword";
import Invoicer from "./Components/Invoicer";
import Dashboard from "./Components/Dashboard";
import Settings from "./Components/Settings";

// Create a router
const router = createBrowserRouter([
  {
    path: "/",
    // element: <h1 className='title'>Hello from React Router</h1>
    // element: <App />,
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/invoicer",
    element: <Invoicer />,
    children: [
      {
        path: "/invoicer/home",
        element: <Home />,
      },
      {
        path: "/invoicer/profile",
        element: <Dashboard />,
      },
      {
        path: "/invoicer/settings",
        element: <Settings />,
      },
      {
        path: "/invoicer/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/home/receipt",
    element: (
      <Receipt
      // descriptionValues={descriptionValues}
      // customerName={customerName}
      // address={address}
      />
    ),
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/ResetCode",
    element: <ResetCode />,
  },
  {
    path: "/ResetPassword",
    element: <ResetPassword />,
  },
  //   path: "/home",
  //   element: <Home />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// export default unHistory;
