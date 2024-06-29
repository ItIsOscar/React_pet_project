import { Link } from "react-router-dom"
import "./banner.scss"

export default function Banner() {
  return (
    <Link to={"./cardProduct/2"} className="mainBanner">
      <img src="https://ir.ozone.ru/s3/cms/07/t53/wc1450/2832x600.jpg"/>
    </Link>
  )
}