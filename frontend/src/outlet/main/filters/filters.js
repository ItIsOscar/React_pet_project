import "./filters.scss"
import RangeFilter from "./rangeFilter/rangeFilter"
import SelectorFilter from "./selectorFilter/selectorFilter"
import LineFilter from "./lineFilter/lineFilter" 
import filtersController from "./filters.controller"
import { useEffect, useRef } from "react"

function MainFilters({ filtersList }) {
  let filtersListJSX = filtersList.map(obj => {
    if(obj.type == "selector") {
      return <SelectorFilter title={obj.title} name={obj.name} values={obj.values} key={obj.name}/>
    } else {
      return <RangeFilter title={obj.title} name={obj.name} value={obj.value} key={obj.name}/>
    }
  })
  return (
      <div className="filters1">
        {filtersListJSX}
      </div>
  )
}

export default function Filters({filtersList}) {
  let filtersForm = useRef(null)
  useEffect(() => {
    filtersController.addFiltersList(filtersForm.current)
  }, [])
  
  return (
      <form id="filters" ref={filtersForm} 
      onSubmit={ e => {
        e.preventDefault()
        filtersController.sendFiltersData()
      }}>
          <MainFilters filtersList={filtersList}/>  
          <LineFilter />
      </form>
  )
}