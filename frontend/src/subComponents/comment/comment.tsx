import { COMMENT } from "../../shared/mock/products/product.list.mock"
import "./comment.scss"

function User( { name }: {
  name: string
}) {
  return (
    <h3>{name}</h3>
  )
}

function Rating({grade}: {
  grade: number
}) {
  let stars = []
  for(let current = 0; current < 5; current++) {
    if(current < grade) {
      stars.push(<img key={current} src="https://c0.klipartz.com/pngpicture/114/147/gratis-png-ilustracion-estrella-amarilla-estrella-amarilla-color-estrella-thumbnail.png"/>)
    } else {
      stars.push(<img key={current} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/160px-Five-pointed_star.svg.png"/>)
    }
  }
  return <div>{stars}</div>
}

function CommentsContent({text}: {
  text: string
}) {
  return (
    <p>{text}</p>
  )
}

function CreateDate({date}: {
  date: string
}) {
  return (
    <h4>{date}</h4>
  )
}

function SortingBy() {
  return (
    <label>
      <span>Сортировать по:</span>
      <select name="commentFilters">
        <option value="data">Дате</option>
        <option value="grade">Оценке</option>
      </select>
    </label>
  )
}

export default function Comments({comments}: {
  comments: COMMENT[]
}) {
  let commentsList = comments.map((obj, inx) => (
    <div className="comment" key={inx}>
      <div>
        <User name={obj.user.name} />
        <Rating grade={obj.grade}/>
        <CommentsContent text={obj.content} />
      </div>
      <CreateDate date={obj.date} />
    </div>
  ))
  return (
    <div className="comments">
        <form>
          <SortingBy />
        </form>
        <div className="commentsList">
          {commentsList}
        </div>
      </div>
  )
}