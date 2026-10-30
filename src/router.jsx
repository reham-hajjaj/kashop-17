import { createBrowserRouter } from "react-router";
import MainLayout from "./Layouts/MainLayout.jsx";
import AuthLayout from "./Layouts/AuthLayout.jsx";
import Home from "./assets/Home/Home.jsx";
import Login from "./assets/Login/Login.jsx";
import Register from "./assets/Register/Register.jsx";
import SendCode from "./assets/SendCode/SendCode.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/sendcode",
        element: <SendCode />
      },
      {
        path:"/product/:id",
        element: <ProductDetails/>
      }
    ]
  }
]);

export default router;