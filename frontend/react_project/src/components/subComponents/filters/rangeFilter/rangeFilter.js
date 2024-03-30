import "./rangeFilter.scss"

export default function RangeFilter({title, name}) {
  return (
    <div className="numberFilter">
        <h3>{title+":"}</h3>
        <form name="name">
          <label>
            <span>От:</span>
            <input type="number" name="from"></input>
          </label>
          <label>
            <span>До:</span>
            <input type="number" name="to"></input>
          </label>
        </form>
    </div>
  )
}

