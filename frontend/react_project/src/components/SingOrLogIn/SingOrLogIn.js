import { useState } from 'react';
import "./SingOrLogIn.scss";


import Inputs from './inputs/inputs';
import Anceta from './anceta/ancate';
import Captcha from './captcha/captcha';
import Submit from './submit/submit';



export default function SignOrLogIn({ closeAuthForm }) {
  let [itIsSing, toggleFormStatus] = useState(true)

  function disableScroll() {
    let scrollTop = window.scrollY
    window.onscroll = () => {
      window.scrollTo(window.scrollX, scrollTop)
    }
  } disableScroll()

  function toggleStatus() {
    toggleFormStatus(!itIsSing)
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
    }) 
  }

  return (
    <>
      <div className='membrana' onClick={closeAuthForm}></div>
      <form className='logIn' name= "form" onSubmit={sendData} id = "form">
        <Inputs itIsSing = {itIsSing} toggleStatus = {toggleStatus} />
        {/* {!itIsSing && <Captcha /> } */}
        {!itIsSing && <Anceta /> }
        <Submit itIsSing = {itIsSing}/>
      </form>
    </>
  );
}