import "./title.scss"

interface titleProps {
  children: string,
  margin?: string 
}

export default function Title({children , margin = "4rem 0"}: titleProps) {
  return (
    <div className="_title" style={{margin: `${margin}`}}>
      <h1>{children}</h1>
      {/* <button onClick={handleListStatus}>
        <img />
      </button> */}
    </div>
  )
}