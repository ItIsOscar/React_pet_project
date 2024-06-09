import { strict } from "assert"
import "./search.scss"
import {FormEvent, RefObject, useEffect, useRef} from "react"
import { FormSeach, FormSearchDataInterface, SearchType } from "./search.interface"

export default function Search() {
  let formSearch: RefObject<HTMLFormElement> = useRef(null) 

  let FormSearchData: FormSearchDataInterface
  useEffect(() => {
    FormSearchData = new FormSeach(new FormData(formSearch.current!))
  }, [])
  
  let listType: SearchType[] = [new SearchType("goods", "Товары"), new SearchType("sellers", "Продавцы")]
  let typesJSX: JSX.Element[] = listType.map((model) => (
    <option value={model.value}>{model.title}</option>
  ))
  
  function fetchType() {
    fetch(`search/${FormSearchData.type}/all`, {
      method: "GET",
    })
  }

  function fetchNameWithType(event: FormEvent) {
    event.preventDefault()  
    fetch(`search/${FormSearchData.type}/${FormSearchData.validaFetchName}`, {
      method: "GET",
    })
  }
  return (
    <form className="searchBar" onSubmit={fetchNameWithType} ref={formSearch}>
      <select name="type" onChange={fetchType}>
        {typesJSX}
      </select>
      <div className="searchInput">
        <input name="name" type="text" placeholder="Поиск"></input>
      </div>
      <button type="submit">Поиск</button>
    </form>
      
  )
}


