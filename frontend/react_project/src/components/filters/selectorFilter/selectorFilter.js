import "./selectorFilter.scss"

export default function SelectorFilter({title, name, values}) {
  let options = values.map((el) => {
    return <option value={el} key={el}>{el}</option>
  })
  return (
    <div className="selectorFilter">
      <h3>{title + ":"}</h3>
      <select name={name}>
        {options}
      </select>
    </div>
  )
}