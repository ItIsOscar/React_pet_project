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
import { useRef, useState, forwardRef } from "react"

function SiteNavButton({ href, hoverSrc, src, title, handleClick = null}) {
  let [isHover, setHover] = useState(false)
  return (
    <Link to={href} 
      className="topButtons"
      onClick={handleClick}
      onMouseOver={() => {setHover(true)}}
      onMouseOut={() => {setHover(false)}} 
    >
      <img src={isHover ? hoverSrc : src} />
      <h2>{title}</h2>
    </Link>
  )
}

function CatalogNavButton({ children, pic }) {
  return (
    <li>
      <span>{children}</span>
      <img src={pic} />
    </li>
  )
}

function LanguageSelector() {
  return (
    <select className="language">
      <option>Русский</option>
      <option>English</option>
      <option>O`zbek</option>
    </select>
  )
}

function SiteLinks({ openAuthForm }) {
  return (
    <div className="siteNav">
      <a href="/">
        <img src={logo}/>
      </a>
      <div className="navContent">
        <LanguageSelector />
        <div className="navLinks">
          <SiteNavButton href="/favourite" title="Избранное" src={heart_border} hoverSrc={heart_full} />
          <SiteNavButton handleClick={openAuthForm} title="Войти" src={user_border} hoverSrc={user_full} />
          <SiteNavButton href="/basket" title="Корзина" src={basket_border} hoverSrc={basket_full} />
          <SiteNavButton href="/delivery" title="Доставка" src={delivery_border} hoverSrc={delivery_full} />
        </div>
      </div>
    </div>
  )
}

const CatalogLinks = forwardRef(({}, ref) => {
  return (
    <ul className="catalogNav" ref={ref}>
      <CatalogNavButton pic="">Электоника</CatalogNavButton>
      <CatalogNavButton pic="">Машины</CatalogNavButton>
      <CatalogNavButton pic="">Игрушки</CatalogNavButton>
    </ul>
  )
})

export default function Navigation({ openAuthForm }) {
  let [visabilityStatus, setStatus] = useState("")
  let lastScrollY = useRef(0)
  const nav = useRef(null)
  const catalogNav = useRef(null)

  function defineVisiblyStatus() {
    let currentScrollY = window.scrollY
    let isScrollDown = currentScrollY > lastScrollY.current
    if(isScrollDown) {
      setStatus("fullHidden")
    } else {
      setStatus("linksOnly")
    }
    let isOnTop = currentScrollY < 200
    if(isOnTop) {
      setStatus("fullVisibly")
    }
    lastScrollY.current = currentScrollY
  }

  function setNavVisibly() {
    switch(visabilityStatus) {
      case "fullHidden":
        nav.current.style.transform = "translate(0, -100%)"
        catalogNav.current.style.transform = "translate(0, -500%)"
        break
      case "fullVisibly":
        catalogNav.current.style.transform = "translate(0, 0)"
      case "linksOnly":
        nav.current.style.transform = "translate(0, 0)"
        break
      }
  }

  window.onscroll = () => {
    defineVisiblyStatus()
    setNavVisibly()
  }

  return (
    <div className="navigation" ref={nav}>
      <SiteLinks openAuthForm={openAuthForm}/>
      <CatalogLinks ref={catalogNav}/>
    </div>
  )
}