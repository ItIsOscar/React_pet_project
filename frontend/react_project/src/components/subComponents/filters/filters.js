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
      values: ["All" ,"skoda", "BMW", "sparkle", "lamborghini"]
    },
    {
      title: "Состояние",
      name: "Status",
      values: ["All" ,"B/y", "New", "Broken"]
    }
  ]

  const rangerData = [
    {
      title: "Цена",
      name: "cost"
    },
    {
      title: "Размер",
      name: "size"
    }
  ]
  
  let selectorFilters = selectorData.map((obj) => (
    <SelectorFilter title={obj.title} name={obj.name} values={obj.values} key={obj.name}/>
  ))
  
  let rangerFilters = rangerData.map((obj) => (
    <RangeFilter title={obj.title} name={obj.name} key={obj.name}/>
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

      console.log(formData)
      fetch("", {
          method: "POST",
          body: formData
      })
    } 
  return (
      <form onSubmit={sendData}>
          <Search />
          <MainFilters />  
          <LineFilter />
      </form>
  )
}