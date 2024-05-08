import "./search.scss"
import {useRef} from "react"

export default function Search() {
  let search = useRef(null)

  function changeType() {
    let searchData = new FormData(search.current)
    let type = searchData.get("type")
    fetch(`search/${type}/all`, {
      method: "GET",
    })
  }
  function sendData(e) {
    e.preventDefault()
    let searchData = new FormData(search.current)
    let name = searchData.get("name")
    let type = searchData.get("type")
    name = name.trim().split(" ").filter((el) => el != "").join(" ")
    fetch(`search/${type}/${name}`, {
      method: "GET",
    })
  }
  return (
    <form className="searchBar" onSubmit={sendData} ref={search}>
      <select name="type" onChange={changeType}>
        <option value="goods">Товары</option>
        <option value="sellers">Продавцы</option>
        {/* <option></option> */}
      </select>
      <div className="searchInput">
        <input name="name" type="text" placeholder="Поиск"></input>
      </div>
      <button type="submit">Поиск</button>
    </form>
      
  )
}


