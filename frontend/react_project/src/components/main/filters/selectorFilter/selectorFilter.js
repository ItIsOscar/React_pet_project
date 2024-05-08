import { useRef } from "react"
import "./selectorFilter.scss"

export default function SelectorFilter({title, name, values}) {
  let selector = useRef(null)
  let options = values.map((el) => {
    return  <option value={el} key={el}>{el}</option>
  })

  let active 
  if(sessionStorage.getItem(name)) {
    active = sessionStorage.getItem(name)
  } else {
    sessionStorage.setItem(name, "all")
    active = sessionStorage.getItem(name)
  }

  function handleChange() {
    sessionStorage[name] = selector.current.value
  }

  return (
    <div className="selectorFilter">
      <h3>{title + ":"}</h3>
      <select name={name} defaultValue={active} onChange={handleChange} ref={selector}>
        {options}
      </select>
    </div>
  )
}