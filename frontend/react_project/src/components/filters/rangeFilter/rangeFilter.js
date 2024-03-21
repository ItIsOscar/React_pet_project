import "./rangeFilter.scss"

export default function RangeFilter({title, name}) {
  return (
    <div className="numberFilter">
        <h3>{title+":"}</h3>
        <div>
          <label>
            <span>От:</span>
            <input type="number" name={name + "from"}></input>
          </label>
          <label>
            <span>До:</span>
            <input type="number" name={name + "before"}></input>
          </label>
        </div>
    </div>
  )
}

