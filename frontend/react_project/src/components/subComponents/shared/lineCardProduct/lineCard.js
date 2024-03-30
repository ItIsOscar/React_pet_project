import "./lineCard.scss"

export default function LineCard({pic, name, cost, seller, characteristics}) {
  let characteristicsXJS = characteristics.map((el) => (
    <h4 key={el.type}>{el.value}</h4>
  ))
  return (
    <a className="lineCard">
      <div className="pic_info">
        <img src={pic}/>
        <ul>
          <li>{name}</li>
          <li>{cost}</li>
          <li>{seller}</li>
        </ul>
      </div>
      <div className="characteristics">
        {characteristicsXJS}
      </div>
    </a>
  )
}