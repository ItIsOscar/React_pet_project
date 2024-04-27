import "./search.scss"
import { useEffect, useState } from "react"

export default function Search() {
  return (
    <form className="searchBar">
      <select>
        <option>Товары</option>
        <option>Продавцы</option>
        {/* <option></option> */}
      </select>
      <input className="searchInput" name="name" type="text" placeholder="Поиск"></input>
      <button type="submit">Поиск</button>
    </form>
      
  )
}


