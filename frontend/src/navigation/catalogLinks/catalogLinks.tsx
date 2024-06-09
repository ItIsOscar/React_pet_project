import "./catalogLinks.scss"

import { forwardRef } from "react"
import { Link } from "react-router-dom"
import { CATALOG_LINKS, catalog } from "./catalogLinks.list"

function CatalogNavButton({ children, pic, link }: catalog) {
  return (
    <Link to={`/catalog/${link}`} className="catalogBut" >
      <span>{children}</span>
      <img src={pic} />
    </Link>
  )
}

function ChooseCatalog() {

}

const CatalogLinks = forwardRef(({}, ref : React.ForwardedRef<HTMLUListElement>) => {
  let catalogList: JSX.Element[] = CATALOG_LINKS.map(obj => (
    <CatalogNavButton pic={obj.pic} link={obj.link} key={obj.link}>{obj.children}</CatalogNavButton>
  ))

  return (
    <ul className="catalogNav" ref={ref}>
      {catalogList}
    </ul>
  )
})
export default CatalogLinks