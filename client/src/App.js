import React, { useContext } from "react";
import './App.scss'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RigthBar from "./components/rightBar/RightBar";


import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { themeContext } from "./context/themecontext";
import { authContext } from "./context/authContext";
import { PanoramaSharp } from "@mui/icons-material";

const queryClient = new QueryClient();
function App() {
  const { theme } = useContext(themeContext);

  const { user } = useContext(authContext);
  const ProtectRoute = ({ children }) => {
    console.log(user)
    if (!user) return <Navigate to="/login" />;

    return children;


  };
  const Layout = () => {
    // console.log("rendered layout")
    return (
      <QueryClientProvider client={queryClient}>

        <div className={theme ? "light" : "dark"}>
          <Navbar />
          <div style={{ display: "flex" }}>
            <LeftBar />
            <div
              style={{
                flex: 5,
              }}
            >
              <Outlet />
            </div>
            <RigthBar />
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectRoute>
          <Layout />
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
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
