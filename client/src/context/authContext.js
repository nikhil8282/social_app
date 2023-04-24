import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const authContext = createContext();
export default function AuthContextProvider({ children }) {
    const [user, setuser] = useState(JSON.parse(localStorage.getItem("users")) || null);

    useEffect(() => {
    localStorage.setItem("users",JSON.stringify( user))
}, [user])

const login = async(formD)=>{
    console.log("auth login is called")
    const res = await axios.post('http://localhost:8800/api/auth/login', formD,{
        withCredentials:true
    });
    setuser(res.data);
}


return <authContext.Provider value={{ user,login }}>{children}</authContext.Provider>
}