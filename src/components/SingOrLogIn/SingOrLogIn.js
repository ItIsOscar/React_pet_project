import { useState } from 'react';

import { capchaPic } from '../../assets/date';
import facebook_logo from "../../assets/Facebook_Logo_(2019).png"
import google_logo from "../../assets/google_logo.png"
import instagram_logo from "../../assets/instagram_logo.jpg"

// import "./SignOrLogIn.css";

function NicknameInput({itIsSing, toggleStatus}) {
  // console.log(itIsSing)
  function emptyEmail() {
    
  }
  
  function passEmail(input) {
    input.style.borderColor = "green"
  }

  function wrongEmail(input) {
    input.style.borderColor = "red"
  }

  function checkEmail(event) {
    let email = event.target 
    email.value == "" ? emptyEmail(email) : 
      email.value.includes("@") ? passEmail(email) : wrongEmail(email)
  }
  return (
    <div className='dateInput'>
      <div className='label'>
        <label>Email</label>
        <span>
          Already have an account?
          <button type='button' onClick={toggleStatus}>{itIsSing ? "sign in" : "log in"}</button>
        </span>
      </div>
      <input type="email" name='gmail' id="nicknameInput" onBlur={checkEmail} placeholder="Oscar@gmail.com"/>
    </div>
  )
}

function PasswordInput() {
  const [status, toggleStatus] = useState("password")
  const [statusText, toggleText] = useState("hide")

  function toggleToVisible() {
    toggleStatus("text")
    toggleText("hide")
  }

  function toggleToHide() {
    toggleStatus("password")
    toggleText("show")
  }

  function togglePasswordVisible(e) {
    e.preventDefault()
    status == "password" ? toggleToVisible() : toggleToHide()
    console.log(status, statusText)
  }

  return (
    <div className='dateInput'>
      <div className='label'>
        <label>Password</label>
        <span>
          {/* <img src='https://w7.pngwing.com/pngs/913/965/png-transparent-black-eye-illustration-eye-drawing-color-eye-people-human-eye-simple-eye-in-invertebrates.png'/> */}
          <button onClick={togglePasswordVisible}>
            {statusText}
          </button>
        </span>
      </div>
      <input type={status} name='password' className="dateInput" maxLength={15} placeholder="Create password"/>
    </div>
  )
}

function ConfirmPassword() {
  return (
    <div className='dateInput'>
      <div className='label confirm'>
        <label>Confirm password</label>
      </div>
      <input type="text" name='confirmPassword' id="nicknameInput" placeholder="Oscar@gmail.com"/>
    </div>
  )
}
  
function LogIn_SingIn({itIsSing, toggleStatus}) {
  return (
    <div className='inputs'> 
      <h2>{itIsSing ? "Log in" : "Sign in"}</h2>
      <NicknameInput toggleStatus = {toggleStatus}/>
      <PasswordInput />
      {!itIsSing && <ConfirmPassword />}
    </div>        
  ) 
}

function Question({children, checkBoxName}){
  return (
      <label className='question'>
        <input type='checkbox' name={checkBoxName}/>
        <h3>{children}</h3>
      </label>
  )
}

function Anceta() {
  return (
    <div className='anceta'>
    <Question checkBoxName={"spam"}>accept send spam to email</Question>
    <Question checkBoxName={"virus"}>download virus</Question>
    </div>
    
  )
}
  
function Captcha() {
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

function SocialMedia({src_logo, clickHandler}) {
  return (
    <button onClick={clickHandler}>
      <img src={src_logo} alt={src_logo}/>
    </button>
  )
}

function Submit({itIsSing}) {


  return (
    <div className='typeOfSubmit'>
      <div className='confirmLogIn'>
        <input type='submit' name= "submit" className='submit' />
        <div className='soicalMedia'>
          <label>enter with help social</label>
          <div>
            <SocialMedia src_logo={google_logo} clickHandler={() => alert("Buy premium account!")} />
            <SocialMedia src_logo={facebook_logo} clickHandler={() => alert("Buy premium account!")} />
            <SocialMedia src_logo={instagram_logo} clickHandler={() => alert("Buy premium account!")} />
          </div>
        </div>
      </div>
      <button className='forgot'>{itIsSing ? "Forgot password?": "Accept our conference"}</button>
    </div> 
  )
}

export default function SignOrLogIn() {
  let [itIsSing, toggleFormStatus] = useState(true)
  // console.log(itIsSing)
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
  // document.getElementById("form")
  // form.addEventListener("submit", () => {

  // })
  function sendDate(e) {
    e.preventDefault()
    const FORM = e.target
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
  }

  return (
    <form className='logIn' name= "form" onSubmit={sendDate} id = "form">
      <LogIn_SingIn itIsSing = {itIsSing} toggleStatus = {toggleStatus} />
      {!itIsSing && <Captcha /> }
      {!itIsSing && <Anceta /> }
      <Submit itIsSing = {itIsSing}/>
    </form>
  );
}