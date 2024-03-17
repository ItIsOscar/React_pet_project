import "./search.scss"
import { useEffect, useState } from "react"
export default function Search() {
  useEffect(() => {
    
    aa()
  })
  
  function toggleCheckBox(e) {
    
    console.log(e)
  } 
  function aa() {
    let box = document.querySelectorAll('input[name="mainfilter]')
    // box[0].checked = true
    console.log(box)
  }
  

  function CheckBox({children, value, name, onFunction}) {
    return (
      <>
        <input type="radio" name={name} value={value} onChange={onFunction} id={value} />     
        <label htmlFor={value}>{children}</label>
      </>
    )
  }

  
  
  return (
    <div className="search">
      <input className="searchInput" type="text" placeholder="search">

      </input>
      <div className="mainFilters">
        <div className="filters">
          <CheckBox name="mainfilter" value={"all"} onFunction={toggleCheckBox}>
            Все товары
          </CheckBox>
          <CheckBox name="mainfilter" value={"business"} onFunction={toggleCheckBox}>
            Бизнес
          </CheckBox>
          <CheckBox name="mainfilter" value={"sellers"} onFunction={toggleCheckBox}>
            Частники
          </CheckBox>
        </div>
        <button onClick={aa}>Сбросить фильтры</button>
      </div>
    </div>
  )
}


