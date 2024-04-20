import { Outlet } from "react-router";
import Navigation from "./navigation/navigation";
import Basement from "../subComponents/basement/basement";
import { useState } from "react";
import SignOrLogIn from "../SingOrLogIn/SingOrLogIn";

export default function RouterConnector() {
  let [isReg, setIsReg] = useState(false)
  function toggleIsReg() {
    setIsReg(!isReg)
  }

  return (
    <div>
      <Navigation toggleIsReg={toggleIsReg}/>
      <Outlet />
      {isReg && <SignOrLogIn />}
      <Basement />
    </div>
  )
}