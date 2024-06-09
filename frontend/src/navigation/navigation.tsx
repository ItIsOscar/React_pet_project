import "./navigation.scss"
import React, { useState, useRef, useEffect, RefObject } from "react"


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

export default function Navigation({ openAuthForm } : {openAuthForm: () => void}) {
  let [scrollStatus, setStatus] = useState("")
  let lastScrollY = useRef<number>(0)
  const siteLinksNav: RefObject<HTMLElement> = useRef(null) //TODO: find object(dom) of nav html tag
  const catalogLinksNav: RefObject<HTMLUListElement> = useRef(null)

  function defineScrollStatus() {
    let currentScrollY = window.scrollY
    let isScrollDown = currentScrollY > lastScrollY.current
    if(isScrollDown) {
      setStatus("ScrollDown")
    } else {
      setStatus("ScrollUp")
    }
    let isOnTop = currentScrollY < 200
    if(isOnTop) {
      setStatus("ScrollYOnTop")
    }
    lastScrollY.current = currentScrollY
  }

  
  function setNavVisibly() {
    let navSections = {
      siteLinks: {
        visibly: () => { siteLinksNav.current!.style.transform = `translate(0, 0%)` },
        hidden: () => { siteLinksNav.current!.style.transform = `translate(0, -100%)` }
      },
      catalogLinks: {
        visibly: () => {
          catalogLinksNav.current!.style.marginBottom = "8px"
          catalogLinksNav.current!.style.maxHeight = "100%"
        },
        hidden: () => {
          catalogLinksNav.current!.style.marginBottom = "0px"
          catalogLinksNav.current!.style.maxHeight = "0px"
        }
      },
    }
    let NavSectionsStatus = {
      allvisibly: () => {
        navSections.siteLinks.visibly()
        navSections.catalogLinks.visibly()
      },
      allHidden: () => {
        navSections.siteLinks.hidden()
        navSections.catalogLinks.hidden()
      },
      onlySiteLinksVisibly: () => {
        navSections.siteLinks.visibly()
        navSections.catalogLinks.hidden()
      }
    }

    switch(scrollStatus) {
      case "ScrollYOnTop": NavSectionsStatus.allvisibly()
        break
      case "ScrollDown": NavSectionsStatus.allHidden()
        break
      case "ScrollUp": NavSectionsStatus.onlySiteLinksVisibly()
        break
      }
  }
 
  window.onscroll = () => {
    defineScrollStatus()
    setNavVisibly()
  }

  return (
    <>
      <TopHeader />
      <nav className="navigation" ref={siteLinksNav}>
        <SiteLinks openAuthForm={openAuthForm}/>
        <CatalogLinks ref={catalogLinksNav}/>
      </nav>
    </>
  )
}