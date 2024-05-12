import "./filters.scss"
import RangeFilter from "./rangeFilter/rangeFilter"
import SelectorFilter from "./selectorFilter/selectorFilter"
import LineFilter from "./lineFilter/lineFilter" 

function MainFilters({ filtersList }) {
  let filtersListXJS = filtersList.map(obj => {
    if(obj.type == "selector") {
      return <SelectorFilter title={obj.title} name={obj.name} values={obj.values} key={obj.name}/>
    } else {
      return <RangeFilter title={obj.title} name={obj.name} value={obj.value} key={obj.name}/>
    }
  })
  return (
      <div className="filters1">
        {filtersListXJS}
      </div>
  )
}

export default function Filters({filtersList, }) {
  function sendData(e) {
      e.preventDefault()
      let formData = new FormData(e.target)
      let fetchData = new FormData()
      let entriesData = formData.entries()

      for(let [key, value] of entriesData) {
        if(value != 0 && value != "all") {
          fetchData.append(key, value)
        }
      }

      fetch("", {
          method: "POST",
          body: fetchData
      })
    } 
  return (
      <form onSubmit={sendData}>
          <MainFilters filtersList={filtersList}/>  
          <LineFilter />
      </form>
  )
}