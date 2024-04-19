import { Link } from "react-router-dom"
import "./navigation.scss"

import heart_border from "../../../assets/heart_border.svg"
import heart_full from "../../../assets/heart_full.svg"
import user_border from "../../../assets/user_border.svg"
import user_full from "../../../assets/user_full.svg"
import delivery_border from "../../../assets/delivery_border.svg"
import delivery_full from "../../../assets/delivery_full.svg"
import basket_border from "../../../assets/basket_border.svg"
import basket_full from "../../../assets/basket_full.svg"
import { useRef, useState } from "react"

function TopButtons({ href, hoverSrc, src, title }) {
  let [isHover, setHover] = useState(false)
  
  return (
    <Link to={href} className="topButtons"
      onMouseOver={() => {setHover(true)}}
      onMouseOut={() => {setHover(false)}} >
      <img src={isHover ? hoverSrc : src} />
      <h2>{title}</h2>
    </Link>
  )
}

export default function Navigation() {
  let [status, setStatus] = useState("")
  let lastScroll = useRef(0)
  const nav = useRef(null)

  function handleSetStatus() {
    let currentScroll = window.scrollY
    if(currentScroll > lastScroll.current) {
      setStatus("down")
    } else {
      setStatus("up")
    }
    if(currentScroll < 200) {
      setStatus("top")
    }
    lastScroll.current = currentScroll
  }

  function choiseNavPosition() {
    switch(status) {
      case "down":
        nav.current.style.transform = "translate(0, -100%)"
        break
      case "top":
      case "up":
        nav.current.style.transform = "translate(0, 0)"
        break
      }
  }

  window.onscroll = () => {
    handleSetStatus()
    choiseNavPosition()
  }

  return (
    <div className="navigation" ref={nav}>
      <a href="/">
        <img />
      </a>
      <div className="navContent">
        <select className="language">
          <option>Русский</option>
          <option>English</option>
          <option>O`zbek</option>
        </select>
        <div className="navOption">
          <TopButtons href="/favourite" title="Избранное" src={heart_border} hoverSrc={heart_full} />
          <TopButtons href="entry" title="Войти" src={user_border} hoverSrc={user_full} />
          <TopButtons href="/basket" title="Корзина" src={basket_border} hoverSrc={basket_full} />
          <TopButtons href="/delivery" title="Доставка" src={delivery_border} hoverSrc={delivery_full} />
        </div>
      </div>
    </div>
  )
}