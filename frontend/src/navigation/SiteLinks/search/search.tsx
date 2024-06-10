import "./search.scss"
import {FormEvent, RefObject, forwardRef, useRef} from "react"
import { SearchType as FormTypeModel } from "./search.interface"

interface onChangeInterface {
  onChange: () => void
} 

const TypeSelector = forwardRef<HTMLSelectElement, onChangeInterface> (({ onChange }, ref) => {
  let listType: FormTypeModel[] = [new FormTypeModel("goods", "Товары"), new FormTypeModel("sellers", "Продавцы")]

  let typesJSX: JSX.Element[] = listType.map(model => (
    <option value={model.value}>{model.title}</option>
  ))

  return (
    <select name="type" onChange={onChange} ref={ref}>
      {typesJSX}
    </select>
  )
}) 

const NameInput = forwardRef<HTMLInputElement, {}> (({}, ref) => {
  return (
    <div className="inputName">
      <input name="name" type="text" ref={ref} placeholder="Поиск"></input>
    </div>
  )
})

function ResetNameButton({onClick} : {
  onClick: () => void
}) {
  const CROSS_ICON = "https://ikonki.svgpng.ru/wp-content/uploads/2021/12/Krestiksvgpng.ru_.png"

  return (
    <button type="button" className="resetTypeButton" onClick={onClick}>
        <img src={CROSS_ICON} />
      </button>
  )
}

export default function Search() {
  const FORM_TYPE: RefObject<HTMLSelectElement> = useRef(null)
  const FORM_NAME: RefObject<HTMLInputElement> = useRef(null)
  
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

  function resetFormName() {
    FORM_NAME.current!.value = ""
    fetchNameWithType()
  }

  return (
    <form className="searchBar">
      <TypeSelector onChange={fetchType} ref={FORM_TYPE}/>
      <NameInput ref={FORM_NAME}/>
      <ResetNameButton onClick={resetFormName} />
      <button type="button" className="submitButton" onClick={fetchNameWithType}>Поиск</button>
    </form>
      
  )
}


