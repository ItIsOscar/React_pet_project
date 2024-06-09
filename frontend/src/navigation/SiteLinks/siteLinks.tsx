import "./siteLinks.scss"

import { useState } from "react"
import { Link } from "react-router-dom"
import Search from "./search/search"

import heart_border from "../../shared/assets/heart_border.svg"
import heart_full from "../../shared/assets/heart_full.svg"
import user_border from "../../shared/assets/user_border.svg"
import user_full from "../../shared/assets/user_full.svg"
import delivery_border from "../../shared/assets/delivery_border.svg"
import delivery_full from "../../shared/assets/delivery_full.svg"
import basket_border from "../../shared/assets/basket_border.svg"
import basket_full from "../../shared/assets/basket_full.svg"

import logo from "../../shared/assets/logo.png"


function SiteNavButton({ href, icon, hoverIcon, title, handleClick = undefined} : {
  href: string
  icon: string
  hoverIcon: string
  title: string
  handleClick?: () => void
}) {
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

export default function SiteLinks({ openAuthForm } : { openAuthForm: () => void}) {
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
          <SiteNavButton href="/favourite" title="Избранное" icon={heart_border} hoverIcon={heart_full} />
          <SiteNavButton href="/basket" title="Корзина" icon={basket_border} hoverIcon={basket_full} />
          <SiteNavButton href="/delivery" title="Доставка" icon={delivery_border} hoverIcon={delivery_full} />
        </div>
      </div>
    </div>
  )
}