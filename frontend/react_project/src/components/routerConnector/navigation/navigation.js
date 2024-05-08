import "./navigation.scss"
import { useState, useRef } from "react"


import SiteLinks from "./SiteLinks/siteLinks"
import CatalogLinks from "./catalogLinks/catalogLinks"

function TopHeader() {
  return (
    <div className="TopHeader">
      <h5>Пункт выдачи: ул. Бабура, 22</h5>
      <ul>
        <button>Покупать как компания</button>
        <button>Мобильное приложение</button>
        <button>Помощь</button>
        <button>Стать продавцом</button>
        <button>Пункты выдачи</button>
      </ul>    
    </div>
  )
}

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
        catalogNav.current.style.marginBottom = "0px"
        catalogNav.current.style.maxHeight = "0px"
        break
      case "fullVisibly":
        catalogNav.current.style.marginBottom = "8px"
        catalogNav.current.style.maxHeight = "100%"
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
    <>
      <TopHeader />
      <nav className="navigation" ref={nav}>
        <SiteLinks openAuthForm={openAuthForm}/>
        <CatalogLinks ref={catalogNav}/>
      </nav>
    </>
  )
}