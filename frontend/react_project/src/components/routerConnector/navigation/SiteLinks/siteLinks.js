import "./siteLinks.scss"

import { useState } from "react"
import { Link } from "react-router-dom"
import Search from "./search/search"


import logo from "../../../../shared/assets/logo.png"
import heart_border from "../../../../shared/assets/heart_border.svg"
import heart_full from "../../../../shared/assets/heart_full.svg"
import user_border from "../../../../shared/assets/user_border.svg"
import user_full from "../../../../shared/assets/user_full.svg"
import delivery_border from "../../../../shared/assets/delivery_border.svg"
import delivery_full from "../../../../shared/assets/delivery_full.svg"
import basket_border from "../../../../shared/assets/basket_border.svg"
import basket_full from "../../../../shared/assets/basket_full.svg"

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

function LanguageSelector() {
  return (
    <select className="language">
      <option>Русский</option>
      <option>English</option>
      <option>O`zbek</option>
    </select>
  )
}

export default function SiteLinks({ openAuthForm }) {
  return (
    <div className="siteNav">
      <a href="/">
        <img src={logo} className="logo"/>
      </a>
      <Search />
      <div className="navContent">
        {/* <LanguageSelector /> */}
        <div className="navLinks">
          <SiteNavButton handleClick={openAuthForm} title="Войти" src={user_border} hoverSrc={user_full} />
          <SiteNavButton href="/favourite" title="Избранное" src={heart_border} hoverSrc={heart_full} />
          <SiteNavButton href="/basket" title="Корзина" src={basket_border} hoverSrc={basket_full} />
          <SiteNavButton href="/delivery" title="Доставка" src={delivery_border} hoverSrc={delivery_full} />
        </div>
      </div>
    </div>
  )
}