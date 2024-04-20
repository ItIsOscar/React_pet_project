import "./App.scss"
import { useState } from 'react';
import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function App() {
  let [formOfProduct, changeForm] = useState("line")

  document.addEventListener("keydown", (e) => {
    if(e.key == "t") {
      console.log("change")
      changeForm(formOfProduct == "line" ? "squad" : "line")
    }
  })
  return (
    <RouterProvider router={router} />
  );
}