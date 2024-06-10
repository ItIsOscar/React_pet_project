import "./search.scss"
import {FormEvent, RefObject, useRef} from "react"
import { SearchType as FormTypeModel } from "./search.interface"
const CROSS_ICON = "https://ikonki.svgpng.ru/wp-content/uploads/2021/12/Krestiksvgpng.ru_.png"

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

  function fetchNameWithType() {
    type validateFetchString = string
    const formValidateName: validateFetchString = 
      FORM_NAME.current!.value.trim().split(" ").filter(word => word != "").join(" ")

    fetch(`search/${FORM_TYPE.current!.value}/${formValidateName}`, {
      method: "GET",
    })
  }

  function onResetFormName() {
    FORM_NAME.current!.value = ""
    fetchNameWithType()
  }
  function onSubmitForm(event: FormEvent) {
    event.preventDefault()
    fetchNameWithType()
  }
  function onChangeFormType(): void {
    fetchType()
  }

  return (
    <form className="searchBar">
      <select name="type" onChange={onChangeFormType} ref={FORM_TYPE}>
        {typesJSX}
      </select>
      <div className="inputName">
        <input name="name" type="text" ref={FORM_NAME} placeholder="Поиск"></input>
      </div>
      <button type="button" className="resetTypeButton" onClick={onResetFormName}>
        <img src={CROSS_ICON} />
      </button>
      <button className="submitButton" onClick={event => onSubmitForm(event)}>Поиск</button>
    </form>
      
  )
}


