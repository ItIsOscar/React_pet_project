import "./title.scss"

export default function Title({children, margin = "4rem 0"}) {
  return (
    <div className="_title" style={{margin: `${margin}`}}>
      <h1>{children}</h1>
    </div>
  )
}