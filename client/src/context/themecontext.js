import React, {createContext, useState } from "react";
export const themeContext = createContext();
const Theme = ({children}) => {
  const [theme, setTheme] = useState(true);
  
  function toggle(){
   
    setTheme(!theme);
  }
  return (
    <themeContext.Provider value={{theme,toggle}}>{children}</themeContext.Provider>
  );
};
export default Theme;
