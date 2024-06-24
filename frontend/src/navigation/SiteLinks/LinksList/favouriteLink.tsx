import { Link } from "react-router-dom"
import { useState } from "react"

import heart_full from "../../../shared/assets/heart_full.svg"
import heart_border from "../../../shared/assets/heart_border.svg"
import userMock from "../../../shared/mock/users/user.methods.mock"

export default function FavouriteLink() {
  let [isHover, setHover] = useState<boolean>(false)
  let [favouriteCountLocal, setfavouriteCount] = useState<number>(userMock.user.favourite.length)
  function setterfavouriteCount(): void {
    setfavouriteCount(userMock.user.favourite.length)
  }
  userMock.setFavouriteCount = setterfavouriteCount
  return (
    <Link to={"./favourite"} 
      className="topButtons"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)} 
    >
      <span className="count">{favouriteCountLocal}</span>
      <img src={isHover ? heart_full : heart_border} />
      <h2>Избранное</h2>
    </Link>
  )
}