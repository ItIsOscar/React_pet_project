import { useRef, useState, forwardRef, useContext, useEffect } from "react"
import "./lineFilter.scss"
import { FILTER_PREFIX, DEFAULT_VALUE } from "../filters.config"
import listStatusController from "../../../../shared/controlles/listStatus.controller"
import filtersController from "../filters.controller"
import setKeyFrameForLine from "./lineFilter.animation"
const list = "https://cdn0.iconfinder.com/data/icons/rounded-basics/24/svg-rounded_list-512.png"
const grid = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPfzOP_aCCN2uSg-5kvKzcHZqsnpCV1HaEFso4ZRuC1A&s"

const CheckBox = forwardRef(({children, value, name, onChange}, ref) => {
  let active = filtersController.initilizateFilter.string(name)
  return (
    <label className="checkBox" ref={ref}>
      <input type="radio" name={name} value={value} id={value} 
        defaultChecked={active == value ? true : false} 
        onClick={onChange} 
        onChange={() => filtersController.saveNewActiveOption(name ,value)} 
      /> 
      <span>{children}</span>
    </label>
  )
})

function LineFilterInputs() {
  // let [status, setStatus] = useState({
  //   currentLineMargin: 0,
  //   currentTabInxZ
  // })
  let [currentLineMargin, setCurrentLineMargin] = useState(0)
  let [currentTabInx, setCurrentTabInx] = useState(0)
  const firstLabel = useRef(null)
  const secondLabel = useRef(null)
  const thirdLabel = useRef(null)
  const line = useRef(null)

  function findActiveIndex(allLabes) {
    return allLabes.findIndex(obj => obj.input.checked) //active == to
  }
  
  function setLineMargin(activeIdx, allLabes) {
    let newLineMargin = currentLineMargin
    if(currentTabInx < activeIdx) {
      allLabes.slice(currentTabInx, activeIdx).forEach(obj => newLineMargin += obj.elWidth)
    } else {
      allLabes.slice(activeIdx, currentTabInx).forEach(obj => newLineMargin -= obj.elWidth)
    }
    line.current.style.transform = `translate(${newLineMargin}px, 0px)`
    setCurrentLineMargin(newLineMargin)
  }
  
  function setLineWidth(activeIdx, allLabes) {
    line.current.style.width = `${allLabes[activeIdx].span.offsetWidth}px`
  }
  
  function setKeyFrameForLine() {
    let allLabes = [
      {
        input: firstLabel.current.children[0],
        span: firstLabel.current.children[1],
        elWidth: firstLabel.current.offsetWidth
      }, 
      {
        input: secondLabel.current.children[0],
        span: secondLabel.current.children[1],
        elWidth: secondLabel.current.offsetWidth
      }, 
      {
        input: thirdLabel.current.children[0],
        span: thirdLabel.current.children[1],
        elWidth: thirdLabel.current.offsetWidth
      }, 
    ]

    let activeIdx = findActiveIndex(allLabes)
    setLineMargin(activeIdx, allLabes)
    setLineWidth(activeIdx, allLabes)
    setCurrentTabInx(activeIdx)
  }

  useEffect(() => {
    setKeyFrameForLine()
    line.current.style.transition = "width 1s, transform 1s"
  }, [])

  return (
    <div>
        <div className="filters">
          <CheckBox name="typeOfSallers" ref={firstLabel} value={DEFAULT_VALUE.string} onChange={setKeyFrameForLine}>
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
  )
}

function LineFilterButtons() {
  return (
    <div className="filtersOptions">
      <button type="button" className="toggleStatus"
        onClick={listStatusController.toggleListStatus}>
        <img src={listStatusController.getCurrentValue() == "line" ? list : grid}  />
      </button>
      <button type="submit">Подвердить фильтры</button>
      <button type="button" onClick={filtersController.resetAllFilters}>Сбросить фильтры</button>
    </div>
  )
}

export default function LineFilter() {  
  return (
    <div className="mainFilters" >
        <LineFilterInputs />
        <LineFilterButtons />
    </div>
  )
}