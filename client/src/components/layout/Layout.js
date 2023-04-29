import Navbar from "../navbar/Navbar";
import LeftBar from "../leftBar/LeftBar";
import { Outlet } from "react-router-dom";
import RigthBar from "../rightBar/RightBar";
import { useContext } from "react";
import { themeContext } from "../../context/themecontext";

const Layout = () => {
        const {theme}=useContext(themeContext);
        return (
          
    
            <div className={theme ? "light" : "dark"}>
              <Navbar />
              <div style={{ display: "flex" }}>
                <LeftBar />
                <div style={{flex: 5}}>
                  <Outlet />
                </div>
                <RigthBar />
              </div>
            </div>
     
        );    
}

export default Layout