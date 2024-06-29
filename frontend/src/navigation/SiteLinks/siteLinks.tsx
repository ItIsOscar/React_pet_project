import "./siteLinks.scss"
import SearchBar from "./search/searchBar"

import logo from "../../shared/assets/logo.png"
import FavouriteLink from "./LinksList/favouriteLink"
import BasketLink from "./LinksList/basketLink"
import AuthFormLink from "./LinksList/AuthFormLink"
import DeliveryLink from "./LinksList/deliveryLink"
import { Link } from "react-router-dom"

function CompanyLogo() {
  return (
    <Link to="/">
      <img src={logo} className="logo"/>
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

export default function SiteLinks() {
  return (
    <section className="siteNav">
      <CompanyLogo />
      <SearchBar />
      <div className="navContent">
        {/* <LanguageSelector /> */}
        <nav className="navLinks">
          <AuthFormLink />
          <FavouriteLink />
          <BasketLink />
          <DeliveryLink/>
        </nav>
      </div>
    </section>
  )
}