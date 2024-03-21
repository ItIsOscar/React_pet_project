import "./captcha.scss"
import { capchaPic } from "../../../assets/date"
console.log(capchaPic)

export default function Captcha() {
  let arrayCaptcha = []
  for (let index = 0; index < 8; index++) {
    let picture = <img src= {capchaPic[0].src} key={index}/>
    arrayCaptcha.push(picture) 
  }
  return (
    <div className='captcha'>
      <h3>Find picture with car</h3>
      <div className=''>
        {arrayCaptcha}
      </div>
    </div>
  )
}