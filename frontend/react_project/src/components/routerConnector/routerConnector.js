import { Outlet } from "react-router";
import Navigation from "./navigation/navigation";
import Basement from "../subComponents/basement/basement";

export default function RouterConnector() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Basement />
    </div>
  )
}