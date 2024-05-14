import "./catalogLinks.scss"

import { forwardRef } from "react"

import mobile from "../../../../shared/assets/mobile.svg"
import plant from "../../../../shared/assets/plant.png"
import car from "../../../../shared/assets/car.png"
import drill from "../../../../shared/assets/drill.png"
import { Link } from "react-router-dom"
const toy = "https://cdn-icons-png.flaticon.com/512/30/30146.png"
const dress = "https://cdn-icons-png.flaticon.com/512/1720/1720759.png"
const food = "https://cdn-icons-png.flaticon.com/512/2674/2674465.png"
const services = "https://cdn.icon-icons.com/icons2/2442/PNG/512/customer_service_user_icon_148631.png"
const CLOCK_IMG = "https://e7.pngegg.com/pngimages/478/255/png-clipart-computer-icons-small-icon-text-share-icon.png"

function CatalogNavButton({ children, pic, link }) {
  return (
    <Link to={`/catalog/${link}`} className="catalogBut" >
      <span>{children}</span>
      <img src={pic} />
    </Link>
  )
}

function ChooseCatalog() {

}

const CatalogLinks = forwardRef(({}, ref) => {
  let catalogList = [
    {
      name: "Электоника",
      pic: CLOCK_IMG,
      link: "electronics"
    },
    {
      name: "Машины",
      pic: car,
      link: "cars"

    },
    {
      name: "Игрушки",
      pic: toy,
      link: "toys",
    },
    {
      name: "Электроника",
      pic: mobile,
      link: "electronics1",
    },
    {
      name: "Инструменты",
      pic: drill,
      link: "tools",
    },
    {
      name: "Мебель",
      pic: plant,
      link: "future",
    },
    {
      name: "Одежда",
      pic: dress,
      link: "dress"
    },
    {
      name: "Продукты",
      pic: food,
      link: "foods",
    },
    {
      name: "Услуги",
      pic: services,
      link: "services",
    }
  ]
  let catalogXJS = catalogList.map(obj => (
    <CatalogNavButton pic={obj.pic} link={obj.link} key={obj.link}> {obj.name} </CatalogNavButton>
  ))
  return (
    <ul className="catalogNav" ref={ref}>
      {catalogXJS}
    </ul>
  )
})
export default CatalogLinks