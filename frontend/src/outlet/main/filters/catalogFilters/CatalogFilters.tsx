import { filtersModel } from "../../../../shared/mock/db/catalog.list.mock"
import RangeFilter from "./rangeFilter/rangeFilter"
import SelectorFilter from "./selectorFilter/selectorFilter"

interface IMainFilters {
  filtersList: filtersModel
}

export default function CatalogFilters({ filtersList }: IMainFilters) {
  let filtersListJSX: JSX.Element[] = filtersList.map(filter => {
    if(filter.type == "selector") {
      return <SelectorFilter title={filter.title} name={filter.name} values={filter.values} key={filter.name}/>
    } else {
      return <RangeFilter title={filter.title} name={filter.name} key={filter.name}/>
    }
  })

  return (
    <ul className="filters1">
      {filtersListJSX}
    </ul>
  )
}