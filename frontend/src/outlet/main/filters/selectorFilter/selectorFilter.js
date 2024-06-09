import "./selectorFilter.scss"
import filtersController from "../filters.controller"

export default function SelectorFilter({title, name, values}) {
  let activeOption = filtersController.initilizateFilter.string(name)
  let options = values.map((el) => {
    return <option value={el} key={el}>{el}</option>
  })
  return (
    <div className="selectorFilter">
      <h3>{title + ":"}</h3>
      <select name={name} defaultValue={activeOption} 
        onChange={e => filtersController.saveNewActiveOption(name, e.value)}
      >
        {options}
      </select>
    </div>
  )
}