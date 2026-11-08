import { createBrowserRouter } from "react-router";
import MainLayout from "./Layouts/MainLayout.jsx";
import AuthLayout from "./Layouts/AuthLayout.jsx";
import Home from "./assets/Home/Home.jsx";
import Login from "./assets/Login/Login.jsx";
import Register from "./assets/Register/Register.jsx";
import SendCode from "./assets/SendCode/SendCode.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import ResetPassword from "./assets/ResetPassword/ResetPassword.jsx";
import Cart from "./pages/cart/Cart.jsx";
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
        path:"/resetpassword",
        element: <ResetPassword/>
      },
      {
        path: "/sendcode",
        element: <SendCode />
      },
      {
        path:"/product/:id",
        element: <ProductDetails/>
      },
      {
        path:"/cart", 
        element:<Cart/>
      },
    ]
  }
]);

export default router;