import { Link } from "react-router-dom"
import "./navigation.scss"

import logo from "../../../assets/logo.png"
import heart_border from "../../../assets/heart_border.svg"
import heart_full from "../../../assets/heart_full.svg"
import user_border from "../../../assets/user_border.svg"
import user_full from "../../../assets/user_full.svg"
import delivery_border from "../../../assets/delivery_border.svg"
import delivery_full from "../../../assets/delivery_full.svg"
import basket_border from "../../../assets/basket_border.svg"
import basket_full from "../../../assets/basket_full.svg"
import { useRef, useState } from "react"

function SiteButtons({ href, hoverSrc, src, title, handleClick = null}) {
  let [isHover, setHover] = useState(false)
  
  return (
    <Link to={href} className="topButtons"
      onClick={handleClick}
      onMouseOver={() => {setHover(true)}}
      onMouseOut={() => {setHover(false)}} >
      <img src={isHover ? hoverSrc : src} />
      <h2>{title}</h2>
    </Link>
  )
}

function CatalogButtons({ children, pic }) {
  return (
    <li>
      <span>{children}</span>
      <img src={pic} />
    </li>
  )
}

export default function Navigation({toggleIsReg}) {
  let [status, setStatus] = useState("")
  let lastScroll = useRef(0)
  const nav = useRef(null)
  const catalogNav = useRef(null)

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
        catalogNav.current.style.maxHeight = "0px"
        break
      case "top":
        catalogNav.current.style.maxHeight = "100%"
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
      <div className="siteNav">
        <a href="/">
          <img src={logo}/>
        </a>
        <div className="navContent">
          <select className="language">
            <option>Русский</option>
            <option>English</option>
            <option>O`zbek</option>
          </select>
          <div className="navOption">
            <SiteButtons href="/favourite" title="Избранное" src={heart_border} hoverSrc={heart_full} />
            <SiteButtons handleClick={toggleIsReg} title="Войти" src={user_border} hoverSrc={user_full} />
            <SiteButtons href="/basket" title="Корзина" src={basket_border} hoverSrc={basket_full} />
            <SiteButtons href="/delivery" title="Доставка" src={delivery_border} hoverSrc={delivery_full} />
          </div>
        </div>
      </div>
      <ul className="catalogNav" ref={catalogNav}>
        <CatalogButtons pic=""> Электоника</CatalogButtons>
        <CatalogButtons pic="">Машины</CatalogButtons>
        <CatalogButtons pic="">Игрушки</CatalogButtons>
      </ul>
    </div>
  )
}