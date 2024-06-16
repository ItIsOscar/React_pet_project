import { useRef, useState, forwardRef, useContext, useEffect, RefObject } from "react"
import "./lineFilter.scss"
import listStatusController from "../../../../shared/controlles/listStatus.controller"
import filtersController from "../filters.controller"
const list = "https://cdn0.iconfinder.com/data/icons/rounded-basics/24/svg-rounded_list-512.png"
const grid = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPfzOP_aCCN2uSg-5kvKzcHZqsnpCV1HaEFso4ZRuC1A&s"

interface ICheckBox {
  children: string
  value: string
  name: string
  onChange: () => void
}

const CheckBox = forwardRef<HTMLLabelElement, ICheckBox>(({children, value, name, onChange}, ref) => {
  let active = filtersController.initilizateFilter.string(name)
  return (
    <label className="checkBox" ref={ref}>
      <input type="radio" name={name} value={value} id={value} 
        defaultChecked={active == value ? true : false} 
        onClick={onChange} 
        onChange={() => filtersController.saveNewActiveOption(name, "string" ,value)} 
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
  const firstLabel: RefObject<HTMLLabelElement> = useRef(null)
  const secondLabel: RefObject<HTMLLabelElement> = useRef(null)
  const thirdLabel: RefObject<HTMLLabelElement> = useRef(null)
  const line: RefObject<HTMLSpanElement> = useRef(null)

  interface ILabel {
    input: HTMLInputElement
    span: HTMLSpanElement
    elWidth: number
  }

  function findActiveIndex(allLabes: ILabel[]) {
    return allLabes.findIndex(obj => obj.input.checked) //active == to
  }
  
  function setLineMargin(activeIdx: number, allLabes: ILabel[]) {
    let newLineMargin = currentLineMargin
    if(currentTabInx < activeIdx) {
      allLabes.slice(currentTabInx, activeIdx).forEach(obj => newLineMargin += obj.elWidth)
    } else {
      allLabes.slice(activeIdx, currentTabInx).forEach(obj => newLineMargin -= obj.elWidth)
    }
    line.current!.style.transform = `translate(${newLineMargin}px, 0px)`
    setCurrentLineMargin(newLineMargin)
  }
  
  function setLineWidth(activeIdx: number, allLabes: ILabel[]) {
    line.current!.style.width = `${allLabes[activeIdx].span.offsetWidth}px`
  }
  
  function setKeyFrameForLine() {
    let allLabes: ILabel[] = [
      {
        input: firstLabel.current!.children[0] as HTMLInputElement, //Костыль, надо убрать
        span: firstLabel.current!.children[1] as HTMLSpanElement,
        elWidth: firstLabel.current!.offsetWidth
      }, 
      {
        input: secondLabel.current!.children[0] as HTMLInputElement,
        span: secondLabel.current!.children[1] as HTMLSpanElement,
        elWidth: secondLabel.current!.offsetWidth
      }, 
      {
        input: thirdLabel.current!.children[0] as HTMLInputElement,
        span: thirdLabel.current!.children[1] as HTMLSpanElement,
        elWidth: thirdLabel.current!.offsetWidth
      }, 
    ]

    let activeIdx = findActiveIndex(allLabes)
    setLineMargin(activeIdx, allLabes)
    setLineWidth(activeIdx, allLabes)
    setCurrentTabInx(activeIdx)
  }

  useEffect(() => {
    setKeyFrameForLine()
    line.current!.style.transition = "width 1s, transform 1s"
  }, [])

  return (
    <div>
        <div className="filters">
          <CheckBox name="typeOfSallers" ref={firstLabel} value={filtersController.DEFAULT_VALUE.string} onChange={setKeyFrameForLine}>
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