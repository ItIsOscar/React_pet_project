import "./captcha.scss"
let capchaPic = {
  src: "https://cs13.pikabu.ru/post_img/2019/04/19/7/1555673350180265083.jpg",
  itsCar: true
}

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