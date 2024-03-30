
import "./squadCardProduct.scss"

export default function SquadCard({pic, name, cost, seller, characteristics}) {
  let characteristicsXJS = characteristics.map((el) => (
    <h3>{el.value}</h3>
  ))
  return (
    <a className="squadCard">
      <img src={pic}/>
      <h2>{name}</h2>
      <div className="characteristics">
        {characteristicsXJS}
      </div>
        <h3>{cost}</h3>
        <h3>{seller}</h3>
    </a>
  )
}