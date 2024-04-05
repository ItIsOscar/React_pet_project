import { Link, Outlet } from "react-router-dom"
import "./navigation.scss"

import heart_border from "../../../assets/heart_border.svg"
import heart_full from "../../../assets/heart_full.svg"
import user from "../../../assets/user.svg"
import delivery from "../../../assets/delivery.svg"
import basket from "../../../assets/basket.svg"
// import basket from `${pathToAssets}basket.svg`

function TopButtons({href, src, title}) {
    return (
        <Link to={href} className="topButtons">
            <img src={src} />
            <h2>{title}</h2>
        </Link>
    )
}

export default function Navigation() {
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
                        <TopButtons href="/favourite" title="Избранное" src={heart_border} />
                        <TopButtons href="entry" title="Войти" src={user}/>
                        <TopButtons href="/basket" title="Корзина" src={basket}/>
                        <TopButtons href="/delivery" title="Доставка" src={delivery}/>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}