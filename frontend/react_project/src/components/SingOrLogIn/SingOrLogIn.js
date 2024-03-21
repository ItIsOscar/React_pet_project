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
    // Надо исправить
    if(itIsSing) {
      fetch("http://localhost:3000/", {
        method: "POST",
        body: JSON.stringify({
          gmail: FORM.gmail.value,
          password: FORM.password.value,
        })  
      })
    } else if(validationData(FORM)) {
      fetch("http://localhost:3000/", {
        method: "POST",
        body: JSON.stringify({
          gmail: FORM.gmail.value,
          password: FORM.password.value,
          spam: FORM.spam.checked,
          virus: FORM.virus.checked,
        })  
      })
    }
    // let allUsers = fetch("http://localhost:2000/api/users/all", {
    //   method: "GET",
      
    // })
    // allUsers.then(result => {
    //   console.log(result)
    // })
    // let promise = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     for(let i = 1; i <= 100; i++) {
          
    //       setTimeout(() => {
    //         console.log(`dima myzik №${i}`)
    //         if(i == 100) {
    //           resolve("OSCAR MYZIK")
    //         }
    //       }, 100 * i); 
    //     }
    //   }, 3000)
    // })
    // promise.then(result => {
    //   console.log(result)
    // })
    // console.log("blablabla")
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