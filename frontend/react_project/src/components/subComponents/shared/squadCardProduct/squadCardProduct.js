
import "./squadCardProduct.scss"

export default function SquadCard({product}) {
  let characteristicsXJS = product.characteristics.map((el) => (
    <h3>{el.value}</h3>
  ))
  return (
    <a className="squadCard">
      <img src={product.pic}/>
      <h2>{product.name}</h2>
      <div className="characteristics">
        {characteristicsXJS}
      </div>
        <h3>{product.cost.value + " " + product.cost.currency}</h3>
        <h3>{product.seller}</h3>
    </a>
  )
}