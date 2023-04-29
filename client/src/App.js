import "./App.scss";
import { useContext } from "react";
import { QueryClient } from "@tanstack/react-query";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Layout from "./components/layout/Layout";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { themeContext } from "./context/themecontext";
import { authContext } from "./context/authContext";


// create QueryClient



function App() {
  const { theme } = useContext(themeContext);
  const { user } = useContext(authContext);

  // Protect route ,for only login candidate is access home page
  const ProtectRoute = ({ children }) => {
    if (!user) return <Navigate to="/login" />;
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectRoute>
          <Layout/>
        </ProtectRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
