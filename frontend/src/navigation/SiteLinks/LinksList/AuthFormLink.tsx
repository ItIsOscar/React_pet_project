import { Link } from "react-router-dom"

import user_border from "../../../shared/assets/user_border.svg"
import user_full from "../../../shared/assets/user_full.svg"
import { useState } from "react"

export default function AuthFormLink() {
  let [isHover, setHover] = useState(false)

  let OpenAuthFormEvent = new CustomEvent("OpenAuthForm", {
    bubbles: true
  })


  return (
    <Link to={""} 
      className="topButtons"
      onClick={event => event.target.dispatchEvent(OpenAuthFormEvent)}
      onMouseOver={() => {setHover(true)}}
      onMouseOut={() => {setHover(false)}} 
    >
      <img src={isHover ? user_full : user_border} />
      <h2>Войти</h2>
    </Link>
  )
}