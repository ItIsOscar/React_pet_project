import "./comment.scss"

export default function Comments({comments}) {
  console.log(comments)
  function setGrades() {
    for(let i = 0; i < 5; i++) {
      if(i <= comments.grade) {
        return <img src="https://c0.klipartz.com/pngpicture/114/147/gratis-png-ilustracion-estrella-amarilla-estrella-amarilla-color-estrella-thumbnail.png" />
      } else {
        return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/160px-Five-pointed_star.svg.png"/>
      }
    }  
  }
  
  let commentsList = comments.map((el, inx) => (
    <div className="comment">
      <div>
        <h3>{el.user.name}</h3>
        <div>
          {setGrades()}
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