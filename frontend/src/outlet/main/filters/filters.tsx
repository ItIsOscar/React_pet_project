import "./filters.scss"
import LineFilter_sellerType from "./lineFilter/lineFilter" 
import filtersController from "./filters.controller"
import { useEffect, useRef } from "react"
import { filtersModel } from "../../../shared/mock/catalog/catalog.list.mock"
import CatalogFilters from "./catalogFilters/CatalogFilters"

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
          <CatalogFilters filtersList={filtersList}/>  
          <LineFilter_sellerType />
      </form>
  )
}