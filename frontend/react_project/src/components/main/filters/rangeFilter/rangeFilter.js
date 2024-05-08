import { useRef } from "react"
import "./rangeFilter.scss"

export default function RangeFilter({title, name, value}) {
  let inputFrom = useRef(null)
  let inputTo = useRef(null)
  let fromValue 
  if(sessionStorage.getItem(`${name}From`)) {
    fromValue = sessionStorage.getItem(`${name}From`)
  } else {
    sessionStorage.setItem(`${name}From`, '0')
  }

  let toValue 
  if(sessionStorage.getItem(`${name}To`)) {
    toValue = sessionStorage.getItem(`${name}To`)
  } else {
    sessionStorage.setItem(`${name}To`, '0')
  }

  function handleChangeFrom() {
    sessionStorage[inputFrom.current.name] = inputFrom.current.value
  }

  function handleChangeTo() {
    sessionStorage[inputTo.current.name] = inputTo.current.value
  }

  return (
    <div className="numberFilter">
        <h3>{title+":"}</h3>
        <div>
          <label>
            <span>От:</span>
            <input type="number" name={`${name}From`} placeholder="1000" onChange={handleChangeFrom} ref={inputFrom} defaultValue={fromValue}/>
          </label>
          <label>
            <span>До:</span>
            <input type="number" name={`${name}To`} placeholder="100.0000.000" onChange={handleChangeTo} ref={inputTo} defaultValue={toValue} />
          </label>
        </div>
    </div>
  )
}

