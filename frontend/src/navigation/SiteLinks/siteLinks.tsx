import "./siteLinks.scss"

import { useState } from "react"
import { Link } from "react-router-dom"
import Search from "./search/search"


import user_border from "../../shared/assets/user_border.svg"
import user_full from "../../shared/assets/user_full.svg"
import delivery_border from "../../shared/assets/delivery_border.svg"
import delivery_full from "../../shared/assets/delivery_full.svg"
import basket_border from "../../shared/assets/basket_border.svg"
import basket_full from "../../shared/assets/basket_full.svg"

import logo from "../../shared/assets/logo.png"
import FavouriteLink from "./favouriteLink/favouriteLink"

interface ISiteNavButton {
  href: string
  icon: string
  hoverIcon: string
  title: string
  handleClick?: () => void
}

function SiteNavButton({ href, icon, hoverIcon, title, handleClick = undefined}: ISiteNavButton) {
  let [isHover, setHover] = useState(false)

  return (
    <Link to={href} 
      className="topButtons"
      onClick={handleClick}
      onMouseOver={() => {setHover(true)}}
      onMouseOut={() => {setHover(false)}} 
    >
      <img src={isHover ? hoverIcon : icon} />
      <h2>{title}</h2>
    </Link>
  )
}

function SiteNavButtonWithCount({ href, icon, hoverIcon, title, handleClick = undefined}: ISiteNavButton) {
  let [isHover, setHover] = useState(false)

  return (
    <Link to={href} 
      className="topButtons"
      onClick={handleClick}
      onMouseOver={() => {setHover(true)}}
      onMouseOut={() => {setHover(false)}} 
    >
      <span className="count">0</span>
      <img src={isHover ? hoverIcon : icon} />
      <h2>{title}</h2>
    </Link>
  )
}

function LanguageSelector() {
  let languageList: string[] = ["Русский", "English", "O'zbek"]
  
  let languageOptions: JSX.Element[] = languageList.map(language => 
    <option>{language}</option>
  )

  return (
    <select className="language">
      {languageOptions}
    </select>
  )
}

interface ISiteLinks { 
  openAuthForm: () => void
}

export default function SiteLinks({ openAuthForm }: ISiteLinks) {
  return (
    <div className="siteNav">
      <a href="/">
        <img src={logo} className="logo"/>
      </a>
      <Search />
      <div className="navContent">
        {/* <LanguageSelector /> */}
        <div className="navLinks">
          <SiteNavButton href="" handleClick={openAuthForm} title="Войти" icon={user_border} hoverIcon={user_full} />
          <FavouriteLink />
          <SiteNavButtonWithCount href="/basket" title="Корзина" icon={basket_border} hoverIcon={basket_full} />
          <SiteNavButton href="/delivery" title="Доставка" icon={delivery_border} hoverIcon={delivery_full} />
        </div>
      </div>
    </div>
  )
}