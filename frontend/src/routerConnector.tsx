import { Outlet } from "react-router";
import { useState } from "react";
import Navigation from "./navigation/navigation";
import SiteFooter from "./subComponents/siteFooter/siteFooter";
import SignOrLogIn from "./outlet/SingOrLogIn/SingOrLogIn";

export default function Body() {
  let [isReg, setIsReg] = useState<boolean>(false)

  document.addEventListener("OpenAuthForm",() => setIsReg(true))
  document.addEventListener("closeAuthForm",() => setIsReg(false))

  return (
    <>
      <Navigation />
      <Outlet />  
      {isReg && <SignOrLogIn />}
      <SiteFooter />
    </>
  )
}