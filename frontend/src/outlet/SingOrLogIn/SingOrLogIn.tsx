import { FormEvent, useState } from 'react';
import "./SingOrLogIn.scss";


import Inputs from './inputs/inputs';
import Anceta from './anceta/ancate';
import Captcha from './captcha/captcha';
import Submit from './submit/submit';


export default function SignOrLogIn() {
  let [iItSing, toggleFormStatus] = useState(true)

  function disableScroll() {
    let scrollTop = window.scrollY
    window.onscroll = () => {
      window.scrollTo(window.scrollX, scrollTop)
    }
  } disableScroll()

  function toggleStatus() {
    toggleFormStatus(!iItSing)
  }

  function dispatchCloseAuthForm(element: HTMLElement) {
    let closeAuthFormEvent = new CustomEvent("closeAuthForm", {
      bubbles: true
    })
    element.dispatchEvent(closeAuthFormEvent)
  }

  function validationData(LogInform: HTMLFormElement) {
    if(LogInform.password.value != LogInform.confirmPassword.value)  {
      alert("password not!")
      return false
    }
    return true
  }
  function sendData(FormEvent: FormEvent) {
    FormEvent.preventDefault()
    const FORM = FormEvent.target

    let allUsersJson = fetch("http://localhost:2000/api/productList/all", {
      method: "GET",
    })
    allUsersJson.then(result => {
      let allUsers = result.json()
    }) 
  }

  return (
    <>
      <div className='membrana' onClick={event => dispatchCloseAuthForm(event.target as HTMLElement)}></div>
      <form className='logIn' name= "form" onSubmit={sendData} id = "form">
        <Inputs isItSing = {iItSing} toggleStatus = {toggleStatus} />
        {/* {!itIsSing && <Captcha /> } */}
        {!iItSing && <Anceta /> }
        <Submit itIsSing = {iItSing}/>
      </form>
    </>
  );
}