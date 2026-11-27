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
import Checkout from "./pages/checkout/Checkout.jsx";
import ProtectedRoute from "./components/ProtectedRouter.jsx";
import ProfileLayout from "./pages/profile/ProfileLayout.jsx";
import ProfileInfo from "./components/profile/ProfileInfo.jsx";
import ProfileOrders from "./components/profile/ProfileOrders.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "checkout",
            element: <Checkout />,
          },
          {
            path:"profile",
            element:<ProfileLayout/>,
            children:[
              {
                index:true,
                element:<ProfileInfo/>
              },
              {
                path:"order",
                element:<ProfileOrders/>
              }
            ]
          }
        ],
      },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/resetpassword",
        element: <ResetPassword />,
      },
      {
        path: "/sendcode",
        element: <SendCode />,
      },
    ],
  },
]);

export default router;