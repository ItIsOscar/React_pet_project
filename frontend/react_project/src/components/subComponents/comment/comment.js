import "./comment.scss"

function Rating({grade}) {
  let stars = []
  for(let current = 0; current < 5; current++) {
    if(current < grade) {
      stars.push(<img key={current} src="https://c0.klipartz.com/pngpicture/114/147/gratis-png-ilustracion-estrella-amarilla-estrella-amarilla-color-estrella-thumbnail.png"/>)
    } else {
      stars.push(<img key={current} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/160px-Five-pointed_star.svg.png"/>)
    }
  }
  return stars
}

export default function Comments({comments}) {
  let commentsList = comments.map((el, inx) => (
    <div className="comment" key={inx}>
      <div>
        <h3>{el.user.name}</h3>
        <div>
          <Rating grade={el.grade}/>
        </div>
        <p>{el.content}</p>
      </div>
      <h4>{el.date}</h4>
    </div>
  ))
  return (
    <div className="comments">
        <form>
          <label>
            <span>Сортировать по:</span>
            <select name="commentFilters">
              <option value="data">Дате</option>
              <option value="grade">Оценке</option>
            </select>
          </label>
        </form>
        <div className="commentsList">
          {commentsList}
        </div>
      </div>
  )
}