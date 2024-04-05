import ProductList from "./subComponents/productList/productList"
import Title from "./subComponents/shared/title/title"

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

function LineSelector() {
  return (
    <div className="mainFilters">
      <div className="filters">
        <CheckBox ischecked={true} name="typeOfSallers" value={"all"} >
          Объявление
        </CheckBox>
        <CheckBox name="typeOfSallers" value={"business"} >
          Поиск
        </CheckBox>
        <CheckBox name="typeOfSallers" value={"sellers"} >
          История
        </CheckBox>
      </div>
      <div className="filtersOptions">
        <select>
          <option>Сначала новые</option>
          <option>Сначала старые</option>
        </select>
        <img />
      </div>
    </div>
  )
}

export default function Favourite() {
  return (
    <div className="content">
      <Title>Избранное</Title>
      <LineSelector />
      <ProductList status={"line"}/>
      <div className="recommend">
        <h2>Подойдет также</h2>
        <ProductList status={"line"} />
      </div>
    </div>
  )
}