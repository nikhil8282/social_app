import { createContext, useState } from "react";

export const authContext=createContext();
export default function AuthContextProvider({children}){
    const [formD,setformd]=useState({name:"",email:"",password:"",confirmPassword:""});
    // const [user,set]
    const handleChange =(e)=>{

setformd({...formD,[e.target.name]:[e.target.value]})
    }
    return <authContext.Provider value={{formD,handleChange}}>{children}</authContext.Provider>
}