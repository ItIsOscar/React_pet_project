import { strict } from "assert"
import "./search.scss"
import {FormEvent, RefObject, useRef} from "react"
import { SearchType as FormTypeModel } from "./search.interface"

export default function Search() {
  const FORM_TYPE: RefObject<HTMLSelectElement> = useRef(null)
  const FORM_NAME: RefObject<HTMLInputElement> = useRef(null)
  
  let listType: FormTypeModel[] = [new FormTypeModel("goods", "Товары"), new FormTypeModel("sellers", "Продавцы")]
  let typesJSX: JSX.Element[] = listType.map(model => (
    <option value={model.value}>{model.title}</option>
  ))
  
  function fetchType() {
    fetch(`search/${FORM_TYPE.current!.value}/all`, {
      method: "GET",
    })
  }

  function fetchNameWithType(event: FormEvent) {
    event.preventDefault()  
    type validateFetchString = string
    const formValidateName: validateFetchString = 
      FORM_NAME.current!.value.trim().split(" ").filter(word => word != "").join(" ")

    fetch(`search/${FORM_TYPE.current!.value}/${formValidateName}`, {
      method: "GET",
    })
  }
  return (
    <form className="searchBar" onSubmit={fetchNameWithType}>
      <select name="type" onChange={fetchType} ref={FORM_TYPE}>
        {typesJSX}
      </select>
      <div className="searchInput">
        <input name="name" type="text" ref={FORM_NAME} placeholder="Поиск"></input>
      </div>
      <button type="submit">Поиск</button>
    </form>
      
  )
}


