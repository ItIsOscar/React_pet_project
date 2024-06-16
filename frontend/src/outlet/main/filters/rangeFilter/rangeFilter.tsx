import "./rangeFilter.scss"
import filtersController from "../filters.controller"
import { ChangeEvent } from "react"

interface IInputRangeFilter {
  name: string
  defaultValue: string
}

function InputRangeFilter({name, defaultValue}: IInputRangeFilter) {
  return (
    <label>
      <span>От:</span>
      <input type="number" 
        name={name} 
        placeholder="1000" 
        defaultValue={defaultValue}
        onChange={(event: ChangeEvent<HTMLInputElement>)=> 
          filtersController.saveNewActiveOption(name, "number", event.target.value)} 
      />
    </label>
  )
}

interface IRangeFilter {
  title: string
  name: string
}

export default function RangeFilter({title, name}: IRangeFilter) {
  let fromName = `${name}From`
  let toName = `${name}To`
  let fromValue = filtersController.initilizateFilter.number(fromName)
  let toValue = filtersController.initilizateFilter.number(toName)

  return (
    <div className="numberFilter">
        <h3>{title+":"}</h3>
        <div>
          <InputRangeFilter name={fromName} defaultValue={fromValue}/>
          <InputRangeFilter name={toName} defaultValue={toValue}/>
        </div>
    </div>
  )
}

