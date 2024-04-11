import { useState } from "react"
import "./lineFilter.scss"

function CheckBox({children, value, name, onChange, ischecked = false}) {
  return (
    <label className="checkBox">
      {ischecked ? 
        <input type="radio" onClick={onChange} name={name} value={value} id={value} defaultChecked={ischecked}/>  : 
        <input type="radio" onClick={onChange} name={name} value={value} id={value} />
      }
      <span>{children}</span>
    </label>
  )
}

export default function LineFilter() {
  let [savePosition, setCurrentPosition] = useState(0)
  let [savePlace, setCurrentPlace] = useState(0)
  function takePlace(e) {
    // console.log(savePosition)
    let allCheckBox = Array.from(document.querySelectorAll("input[name=typeOfSallers]"))
    let line = document.querySelector(".line")    
    let boxsWidth = []
    for(let inx of allCheckBox) {
      boxsWidth.push(inx.labels[0].offsetWidth)
    }
    
    let indexTo = allCheckBox.findIndex((el) => el.checked)
    let currentPosition = savePosition
    if(savePlace == indexTo) {
      console.log("nothin changing")
    } else if(savePlace > indexTo) {
      setCurrentPlace(indexTo)
      currentPosition = savePosition - boxsWidth[savePlace - 1] 
        if(savePlace - 2 == indexTo) {
          currentPosition = currentPosition - boxsWidth[savePlace - 2]
        }
    } else {
      setCurrentPlace(indexTo)
      currentPosition = savePosition + boxsWidth[savePlace]
      // console.log("1 step", currentPosition)
        if(savePlace + 2 == indexTo) {
          // console.log("2 step", boxsWidth[savePlace + 1])
          currentPosition = currentPosition + boxsWidth[savePlace + 1]
        }
    }
    setCurrentPosition(currentPosition)
    line.style.transform = `translate(${currentPosition}px, 0px)`

    let toSpan = document.querySelector("input[name=typeOfSallers]:checked + span")
    line.style.width = `${toSpan.offsetWidth}px`

    // console.log("event", e)
    // console.log("all",allCheckBox)
    // console.log(boxsWidth)
    // console.log("savePosition", currentPosition)
    // console.log("savePlace", savePlace)
    // console.log("toInx", indexTo)
    // console.log("to", toSpan)
  } 
  return (
    <div className="mainFilters" >
      <div>
        <div className="filters">
          <CheckBox ischecked={true} name="typeOfSallers" value={"all"} onChange={takePlace}>
            Все товары
          </CheckBox>
          <CheckBox name="typeOfSallers" value={"business"} onChange={takePlace}>
            Бизнес
          </CheckBox>
          <CheckBox name="typeOfSallers" value={"sellers"} onChange={takePlace}>
            Частники
          </CheckBox>
        </div>
        <span className="line"></span>
      </div>
      <div className="filtersOptions">
        <button type="submit">Подвердить фильтры</button>
        <button>Сбросить фильтры</button>
      </div>
    </div>
  )
}