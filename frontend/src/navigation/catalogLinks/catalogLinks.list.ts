const car = "https://t3.ftcdn.net/jpg/01/71/13/24/360_F_171132449_uK0OO5XHrjjaqx5JUbJOIoCC3GZP84Mt.jpg"
const drill = "https://cdn-icons-png.freepik.com/512/3348/3348852.png"
const plant = "https://e7.pngegg.com/pngimages/16/440/png-clipart-computer-icons-plant-plant-leaf-digital-image-thumbnail.png"
const toy = "https://cdn-icons-png.flaticon.com/512/30/30146.png"
const dress = "https://cdn-icons-png.flaticon.com/512/1720/1720759.png"
const food = "https://cdn-icons-png.flaticon.com/512/2674/2674465.png"
const services = "https://cdn.icon-icons.com/icons2/2442/PNG/512/customer_service_user_icon_148631.png"
const CLOCK_IMG = "https://e7.pngegg.com/pngimages/478/255/png-clipart-computer-icons-small-icon-text-share-icon.png"
import mobile from "../../shared/assets/mobile.svg"

export type catalog = {
  children: string
  pic: string 
  link: string
}

export const CATALOG_LINKS: catalog[] = [
  {
    children: "Электоника",
    pic: CLOCK_IMG,
    link: "electronics"
  },
  {
    children: "Машины",
    pic: car,
    link: "cars"

  },
  {
    children: "Игрушки",
    pic: toy,
    link: "toys",
  },
  {
    children: "Электроника",
    pic: mobile,
    link: "electronics1",
  },
  {
    children: "Инструменты",
    pic: drill,
    link: "tools",
  },
  {
    children: "Мебель",
    pic: plant,
    link: "future",
  },
  {
    children: "Одежда",
    pic: dress,
    link: "dress"
  },
  {
    children: "Продукты",
    pic: food,
    link: "foods",
  },
  {
    children: "Услуги",
    pic: services,
    link: "services",
  }
]