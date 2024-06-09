import "./rangeFilter.scss"
import filtersController from "../filters.controller"

function InputRangeFilter({name, defaultValue}) {
  return (
    <label>
      <span>От:</span>
      <input type="number" 
        name={name} 
        placeholder="1000" 
        onChange={e => filtersController.saveNewActiveOption(name, e.value)} 
        defaultValue={defaultValue}
      />
    </label>
  )
}

export default function RangeFilter({title, name, value}) {
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

