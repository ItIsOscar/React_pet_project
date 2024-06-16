import "./filters.scss"
import RangeFilter from "./rangeFilter/rangeFilter"
import SelectorFilter from "./selectorFilter/selectorFilter"
import LineFilter from "./lineFilter/lineFilter" 
import filtersController from "./filters.controller"
import { useEffect, useRef } from "react"
import { filtersModel } from "../../../shared/mock/catalog/catalog.list.mock"

interface IMainFilters {
  filtersList: filtersModel
}

function MainFilters({ filtersList }: IMainFilters) {
  let filtersListJSX = filtersList.map(filter => {
    if(filter.type == "selector") {
      return <SelectorFilter title={filter.title} name={filter.name} values={filter.values} key={filter.name}/>
    } else {
      return <RangeFilter title={filter.title} name={filter.name} key={filter.name}/>
    }
  })
  return (
      <div className="filters1">
        {filtersListJSX}
      </div>
  )
}

interface IFilters {
  filtersList: filtersModel
}

export default function Filters({filtersList}: IFilters) {
  let filtersForm = useRef(null)
  useEffect(() => {
    filtersController.addFiltersList(filtersForm.current!)
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