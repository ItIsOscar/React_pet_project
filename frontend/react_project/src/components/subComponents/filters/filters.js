import "./filters.scss"
import Search from "./search/search"
import RangeFilter from "./rangeFilter/rangeFilter"
import SelectorFilter from "./selectorFilter/selectorFilter"
import LineFilter from "./lineFilter/lineFilter" 

function MainFilters() {
  const selectorData = [
    {
      title: "Марки",
      name: "mark",
      values: ["all" ,"skoda", "BMW", "sparkle", "lamborghini"],
      active: "skoda"
    },
    {
      title: "Состояние",
      name: "Status",
      values: ["all" ,"B/y", "New", "Broken"],
      active: "All"
    }
  ]

  const rangerData = [
    {
      title: "Цена",
      name: "cost",
      value: {
        from: 0,
        to: 1000,
      }
    },
    {
      title: "Размер",
      name: "size",
      value: {
        from: 0,
        to: 1000,
      }
    }
  ]
  
  let selectorFilters = selectorData.map((obj) => (
    <SelectorFilter title={obj.title} name={obj.name} values={obj.values} key={obj.name}/>
  ))
  
  let rangerFilters = rangerData.map((obj) => (
    <RangeFilter title={obj.title} name={obj.name} value={obj.value} key={obj.name}/>
  ))
  
  return (
      <div className="filters1">
        {rangerFilters}
        {selectorFilters}
      </div>
  )
}

export default function Filters() {
  function sendData(e) {
      e.preventDefault()
      let formData = new FormData(e.target)
      let fetchData = new FormData()
      let entriesData = formData.entries()

      for(let [key, value] of entriesData) {
        if(value != 0 && value != "all") {
          // console.log(key, value)
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
          {/* <Search /> */}
          <MainFilters />  
          <LineFilter />
      </form>
  )
}