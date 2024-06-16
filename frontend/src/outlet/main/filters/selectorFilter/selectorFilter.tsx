import "./selectorFilter.scss"
import filtersController from "../filters.controller"
import { ChangeEvent } from "react"

interface ISelectorFilter{
  title: string
  name: string
  values: string[]
}

export default function SelectorFilter({title, name, values}: ISelectorFilter) {
  let activeOption: string = filtersController.initilizateFilter.string(name)

  let options: JSX.Element[] = values.map((el) => {
    return <option value={el} key={el}>{el}</option>
  })

  return (
    <div className="selectorFilter">
      <h3>{title + ":"}</h3>
      <select name={name} defaultValue={activeOption} 
        onChange={(event: ChangeEvent<HTMLSelectElement>) => 
          filtersController.saveNewActiveOption(name, "string", event.target.value)}
      >
        {options}
      </select>
    </div>
  )
}