import "./anceta.scss"

function Question({children, checkBoxName}){
  return (
      <label className='question'>
        <input type='checkbox' name={checkBoxName}/>
        <h3>{children}</h3>
      </label>
  )
}

export default function Anceta() {
  return (
    <div className='anceta'>
    <Question checkBoxName={"spam"}>accept send spam to email</Question>
    <Question checkBoxName={"virus"}>download virus</Question>
    </div>
    
  )
}