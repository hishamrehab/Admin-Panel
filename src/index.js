import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import NewUser from "./pages/newUserPage/NewUser";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <UserList />,
      },
      {
        path: "/user/:userId",
        element: <User />,
      },
      {
        path: "/newUser",
        element: <NewUser />,
      },

      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/product/:productId",
        element: <Product />,
      },
      {
        path: "/newProduct",
        element: <NewProduct />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
