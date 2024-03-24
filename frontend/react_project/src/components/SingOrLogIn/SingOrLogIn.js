import { useState } from 'react';
import "./SingOrLogIn.scss";


import Inputs from './inputs/inputs';
import Anceta from './anceta/ancate';
import Captcha from './captcha/captcha';
import Submit from './submit/submit';



export default function SignOrLogIn() {
  let [itIsSing, toggleFormStatus] = useState(true)

  function toggleStatus() {
    toggleFormStatus(!itIsSing)
    console.log("isIsSing?:" ,itIsSing)
  }

  function validationData(form) {
    if(form.password.value != form.confirmPassword.value)  {
      alert("password not!")
      return false
    }
    return true
  }
  function sendData(e) {
    e.preventDefault()
    const FORM = e.target

    let allUsersJson = fetch("http://localhost:2000/api/productList/all", {
      method: "GET",
    })
    allUsersJson.then(result => {
      let allUsers = result.json()
     console.log(allUsers)
    }) 
    // Надо исправить
    // if(itIsSing) {
    //   fetch("http://localhost:3000/", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       gmail: FORM.gmail.value,
    //       password: FORM.password.value,
    //     })  
    //   })
    // } else if(validationData(FORM)) {
    //   fetch("http://localhost:3000/", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       gmail: FORM.gmail.value,
    //       password: FORM.password.value,
    //       spam: FORM.spam.checked,
    //       virus: FORM.virus.checked,
    //     })  
    //   })
    // }
    // 1 >>
  }

  return (
    <>
      <div className='membrana'></div>
      <form className='logIn' name= "form" onSubmit={sendData} id = "form">
        <Inputs itIsSing = {itIsSing} toggleStatus = {toggleStatus} />
        {!itIsSing && <Captcha /> }
        {!itIsSing && <Anceta /> }
        <Submit itIsSing = {itIsSing}/>
      </form>
    </>
  );
}