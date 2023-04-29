import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { makeRequest } from "../axios";




export const authContext = createContext();


export default function AuthContextProvider({ children }) {

    const [user, setuser] = useState(JSON.parse(localStorage.getItem("users")) || null);

    useEffect(() => {
    localStorage.setItem("users",JSON.stringify( user));
  

}, [user])

const login = async(formD)=>{
    console.log("auth login is called")
    const res = await axios.post('http://localhost:8800/api/auth/login', formD,{
        withCredentials:true
    });
      
   getUser(res.data);
    
}
const getUser = (id)=>{
console.log(id);
 makeRequest.get("/user/"+id).then(res=>{setuser({...user,...res.data,id})});
}


return <authContext.Provider value={{ user,login,getUser }}>{children}</authContext.Provider>
}