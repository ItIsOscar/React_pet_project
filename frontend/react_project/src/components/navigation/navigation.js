import { Link, Outlet } from "react-router-dom"
import "./navigation.scss"

import heart_border from "../../assets/heart_border.svg"
import heart_full from "../../assets/heart_full.svg"
import user_border from "../../assets/user_border.svg"
import user_full from "../../assets/user_full.svg"
import delivery_border from "../../assets/delivery_border.svg"
import delivery_full from "../../assets/delivery_full.svg"
import basket_border from "../../assets/basket_border.svg"
import basket_full from "../../assets/basket_full.svg"
import { useState } from "react"
// import basket from `${pathToAssets}basket.svg`

function TopButtons({href,hoverSrc,  src, title}) {
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
    function hover() {
        console.log("hi!")
    }

    return (
        <>
            <div className="navigation">
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
                        <TopButtons href="/favourite" title="Избранное" src={heart_border} hoverSrc={heart_full}/>
                        <TopButtons href="entry" title="Войти" src={user_border} hoverSrc={user_full}/>
                        <TopButtons href="/basket" title="Корзина" src={basket_border} hoverSrc={basket_full}/>
                        <TopButtons href="/delivery" title="Доставка" src={delivery_border} hoverSrc={delivery_full}/>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}