import { FormEvent, MouseEvent, useState } from 'react';
import "./SingOrLogIn.scss";


import Inputs from './inputs/inputs';
import Anceta from './anceta/ancate';
import Captcha from './captcha/captcha';
import Submit from './submit/submit';


export default function SignOrLogIn() {
  let [isItSing, toggleFormStatus] = useState(true)

  function disableScroll() {
    let scrollTop = window.scrollY
    window.onscroll = () => {
      window.scrollTo(window.scrollX, scrollTop)
    }
  } disableScroll()

  function toggleStatus() {
    toggleFormStatus(!isItSing)
  }

  function closeAuthForm(event: MouseEvent<HTMLDivElement>) {
    let closeAuthEvent = new CustomEvent("closeAuthForm", {
      bubbles: true
    })
    event.target.dispatchEvent(closeAuthEvent)
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
      <div className='membrana' onClick={event => closeAuthForm(event)}></div>
      
      <form className='logIn' name= "form" onSubmit={sendData} id = "form">
        <Inputs isItSing = {isItSing} toggleStatus = {toggleStatus} />
        {/* {!itIsSing && <Captcha /> } */}
        {!isItSing && <Anceta /> }
        <Submit itIsSing = {isItSing}/>
      </form>
    </>
  );
}