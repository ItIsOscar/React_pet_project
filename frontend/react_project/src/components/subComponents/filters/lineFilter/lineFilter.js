import "./lineFilter.scss"

function CheckBox({children, value, name, ischecked = false}) {
  return (
    <>
      {ischecked ? 
        <input checked={ischecked} onChange={() => {}} type="radio" name={name} value={value} id={value} />  : 
        <input type="radio" name={name} value={value} id={value} />
      }
      <label htmlFor={value}>{children}</label>
    </>
  )
}

export default function LineFilter() {
  return (
    <div className="mainFilters">
      <div className="filters">
        <CheckBox ischecked={true} name="typeOfSallers" value={"all"} >
          Все товары
        </CheckBox>
        <CheckBox name="typeOfSallers" value={"business"} >
          Бизнес
        </CheckBox>
        <CheckBox name="typeOfSallers" value={"sellers"} >
          Частники
        </CheckBox>
      </div>
      <div className="filtersOptions">
        <button type="submit">Подвердить фильтры</button>
        <button>Сбросить фильтры</button>
      </div>
    </div>
  )
}