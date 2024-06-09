import { Outlet } from "react-router";
import { useState } from "react";
import Navigation from "./navigation/navigation";
import Basement from "./subComponents/basement/basement";
import SignOrLogIn from "./outlet/SingOrLogIn/SingOrLogIn";

export default function Body() {
  let [isReg, setIsReg] = useState(false)

  function toggleIsReg() {
    setIsReg(!isReg)
  }

  return (
    <div>
      <Navigation openAuthForm={toggleIsReg}/>
        <Outlet />  
      {isReg && <SignOrLogIn closeAuthForm={toggleIsReg}/>}
      <Basement />
    </div>
  )
}