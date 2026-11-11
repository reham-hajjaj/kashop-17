import { createBrowserRouter } from "react-router";
import MainLayout from "./Layouts/MainLayout.jsx";
import AuthLayout from "./Layouts/AuthLayout.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import SendCode from "./assets/SendCode/SendCode.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import ResetPassword from "./pages/ResetPassword/ResetPassword.jsx";
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