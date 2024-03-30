import "./title.scss"

export default function Title({children}) {
  return (
    <div className="_title">
      <h1>{children}</h1>
    </div>
  )
}