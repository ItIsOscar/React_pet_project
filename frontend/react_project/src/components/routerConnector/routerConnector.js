import { Outlet } from "react-router";
import Navigation from "./navigation/navigation";
import Basement from "../subComponents/basement/basement";
import { createContext, useRef, useState } from "react";
import SignOrLogIn from "../SingOrLogIn/SingOrLogIn";


export let LineStatusContext = createContext()

export default function Body() {
  let [isReg, setIsReg] = useState(false)

  function toggleIsReg() {
    setIsReg(!isReg)
  }

  return (
    <div listStatus="line">
      <Navigation openAuthForm={toggleIsReg}/>
      <LineStatusContext.Provider value={"line"}>
        <Outlet />  
      </LineStatusContext.Provider>
      {isReg && <SignOrLogIn closeAuthForm={toggleIsReg}/>}
      <Basement />
    </div>
  )
}