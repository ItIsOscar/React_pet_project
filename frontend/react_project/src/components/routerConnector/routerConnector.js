import { Outlet } from "react-router";
import Navigation from "./navigation/navigation";

export default function RouterConnector() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  )
}