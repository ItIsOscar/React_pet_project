import { useRef, useState, forwardRef, useContext } from "react"
import "./lineFilter.scss"
import ListStatus from "../../../../shared/controlles/listStatus.controller"
import listStatusController from "../../../../shared/controlles/listStatus.controller"


const CheckBox = forwardRef(({children, value, name, onChange, ischecked = false}, ref) => {
  return (
    <label className="checkBox" ref={ref}>
      {ischecked ? 
        <input type="radio" onClick={onChange} name={name} value={value} id={value} defaultChecked={ischecked}/>  : 
        <input type="radio" onClick={onChange} name={name} value={value} id={value} />
      }
      <span>{children}</span>
    </label>
  )
})

export default function LineFilter() {
  let [currentLineMargin, setCurrentLineMargin] = useState(0)
  let [currentTabInx, setCurrentTabInx] = useState(0)
  const firstLabel = useRef(null)
  const secondLabel = useRef(null)
  const thirdLabel = useRef(null)
  const line = useRef(null)
  const button = useRef(null)
  
  function toggleListStatus() {
    listStatusController.toggleListStatus()
  }

  function findActiveIndex(allLabes) {
    return allLabes.findIndex((el) => el.el.children[0].checked) //active == to
  }

  function setLineMargin(activeIdx, allLabes) {
    let newLineMargin = currentLineMargin
    if(currentTabInx < activeIdx) {
      for(let current = currentTabInx; current < activeIdx; current++) {
        newLineMargin = newLineMargin + allLabes[current].elWidth
      }
    } else {
      for(let current = currentTabInx; current > activeIdx; current--) {
        newLineMargin = newLineMargin - allLabes[current - 1].elWidth
      }
    }
    line.current.style.transform = `translate(${newLineMargin}px, 0px)`
    setCurrentLineMargin(newLineMargin)
  }

  function setLineWidth(activeIdx, allLabes) {
    let spanOnActiveInputBox = allLabes[activeIdx].el.children[1]
    line.current.style.width = `${spanOnActiveInputBox.offsetWidth}px`
  }

  function setKeyFrameForLine() {
    let allLabes = [
      {
        el: firstLabel.current,
        elWidth: firstLabel.current.offsetWidth
      }, 
      {
        el: secondLabel.current,
        elWidth: secondLabel.current.offsetWidth
      }, 
      {
        el: thirdLabel.current,
        elWidth: thirdLabel.current.offsetWidth
      }, 
    ]

    let activeIdx = findActiveIndex(allLabes)
    setLineMargin(activeIdx, allLabes)
    setLineWidth(activeIdx, allLabes)
    setCurrentTabInx(activeIdx)
  } 

  return (
    <div className="mainFilters" >
      <div>
        <div className="filters">
          <CheckBox ischecked={true} ref={firstLabel} name="typeOfSallers" value={"all"} onChange={setKeyFrameForLine}>
            Все товары
          </CheckBox>
          <CheckBox name="typeOfSallers" ref={secondLabel} value={"business"} onChange={setKeyFrameForLine}>
            Бизнес
          </CheckBox>
          <CheckBox name="typeOfSallers" ref={thirdLabel} value={"sellers"} onChange={setKeyFrameForLine}>
            Частники
          </CheckBox>
        </div>
        <span className="line" ref={line}></span>
      </div>
      <div className="filtersOptions">
        <button onClick={toggleListStatus} ref={button} type="button" className="toggleStatus">
          <img />
        </button>
        <button type="submit">Подвердить фильтры</button>
        <button>Сбросить фильтры</button>
      </div>
    </div>
  )
}