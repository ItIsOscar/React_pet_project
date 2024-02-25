import { useState } from 'react';

import { capchaPic } from '../../assets/date';
import facebook_logo from "../../assets/Facebook_Logo_(2019).png"
import google_logo from "../../assets/google_logo.png"
import instagram_logo from "../../assets/instagram_logo.jpg"

// import "./SignOrLogIn.css";

function NicknameInput({itIsLogIn, toggleStatus}) {
  console.log(itIsLogIn)
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
    email.value == "" ? emptyEmail() : 
    email.value.includes("@") ? passEmail() : wrongEmail()
    // email.value == "" && email.value.includes("@") ? passEmail : wrongEmail
  }
  return (
    <div className='dateInput'>
      <div className='label'>
        <label>Email</label>
        <span>
          Already have an account?
          <button onClick={toggleStatus}>{itIsLogIn ? "sing in" : "log in"}</button>
        </span>
      </div>
      <input type="text" id="nicknameInput" onBlur={checkEmail} placeholder="Oscar@gmail.com"/>
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
      <input type={status} className="dateInput" placeholder="Create password"/>
    </div>
  )
}

function ConfirmPassword() {
  return (
    <div className='dateInput'>
      <div className='label confirm'>
        <label>Confirm password</label>
      </div>
      <input type="text" id="nicknameInput" placeholder="Oscar@gmail.com"/>
    </div>
  )
}
  
function LogIn_SingIn({itIsLogIn, toggleStatus}) {
  return (
    <div className='inputs'> 
      <h2>{itIsLogIn ? "Log in" : "Sing in"}</h2>
      <NicknameInput toggleStatus = {toggleStatus}/>
      <PasswordInput />
      {!itIsLogIn && <ConfirmPassword />}
    </div>        
  ) 
}

function Question({children}){
  return (
      <label className='question'>
        <input type='checkbox'/>
        <h3>{children}</h3>
      </label>
  )
}

function Anceta() {
  return (
    <div className='anceta'>
    <Question>accept send spam to email</Question>
    <Question>download virus</Question>
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

function Submit({itIsLogIn}) {
  return (
    <div className='forgot_extraInfo'>
      <div className='confirmLogIn'>
        <button className='submit'>TTT</button>
        <div className='soicalMedia'>
          <label>enter with help social</label>
          <div>
            <SocialMedia src_logo={google_logo} clickHandler={() => alert("Buy premium account!")} />
            <SocialMedia src_logo={facebook_logo} clickHandler={() => alert("Buy premium account!")} />
            <SocialMedia src_logo={instagram_logo} clickHandler={() => alert("Buy premium account!")} />
          </div>
        </div>
      </div>
      <h4>{itIsLogIn ? "Forgot password?": "Accept our conference"}</h4>
    </div> 
  )
}

export default function SignOrLogIn() {
  const [itIsLogIn, toggleFormStatus] = useState(true)
  function toggleStatus() {
    toggleFormStatus(itIsLogIn ? false : true)
  }
  document.body.addEventListener("keydown", (e) => {
    if(e.key == "g") {
      toggleStatus()
      console.log("status:", itIsLogIn)
    }
  })
  return (
    <form className='logIn'>
    <LogIn_SingIn itIsLogIn = {itIsLogIn} toggleStatus = {toggleStatus} />
    {!itIsLogIn && <Captcha /> }
    {!itIsLogIn && <Anceta /> }
    <Submit itIsLogIn = {itIsLogIn}/>
    </form>
  );
}