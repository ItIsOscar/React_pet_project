import "./navigation.scss"

import heart_border from "../../assets/heart_border.svg"
import heart_full from "../../assets/heart_full.svg"
import user from "../../assets/user.svg"
import delivery from "../../assets/delivery.svg"
import basket from "../../assets/basket.svg"
// import basket from `${pathToAssets}basket.svg`

function TopButtons({src, title}) {
    return (
        <div className="topButtons">
            <img src= {src} />
            <h2>{title}</h2>
        </div>
    )
}

export default function Navigation() {
    return (
        <div className="navigation">
            <img />
            <div className="navContent">
                <select className="language">
                    <option>Русский</option>
                    <option>English</option>
                    <option>O`zbek</option>
                </select>
                <button class="favourite">
                    <img src={heart_border} />
                </button>
                <div className="navOption">
                    <TopButtons title="Войти" src={user}/>
                    <TopButtons title="Доставка" src={delivery}/>
                    <TopButtons title="Корзина" src={basket}/>
                </div>
            </div>
        </div>
    )
}