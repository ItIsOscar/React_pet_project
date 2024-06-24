import { Outlet } from "react-router";
import { useState } from "react";
import Navigation from "./navigation/navigation";
import Basement from "./subComponents/basement/basement";
import SignOrLogIn from "./outlet/SingOrLogIn/SingOrLogIn";

export default function Body() {
  let [isReg, setIsReg] = useState(false)

  document.addEventListener("OpenAuthForm", () => {
    setIsReg(true)
  })
  document.addEventListener("closeAuthForm", () => {
    setIsReg(false)
  })

  return (
    <div>
      <Navigation />
        <Outlet />  
      {isReg && <SignOrLogIn />}
      <Basement />
    </div>
  )
}