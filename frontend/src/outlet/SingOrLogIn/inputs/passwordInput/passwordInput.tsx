import "../inputs.scss"
import { MouseEvent, useState } from "react"

export default function PasswordInput() {
  const [status, toggleStatus] = useState("password")
  const [statusText, toggleText] = useState("hide")

  function toggleToVisible(): void {
    toggleStatus("text")
    toggleText("hide")
  }

  function toggleToHide(): void {
    toggleStatus("password")
    toggleText("show")
  }

  function togglePasswordVisible(ClickEvent: MouseEvent<HTMLButtonElement>): void {
    ClickEvent.preventDefault()
    status == "password" ? toggleToVisible() : toggleToHide()
  }
  
  return (
    <div className='dateInput'>
      <div className='label'>
        <label>Password</label>
        <span>
          {/* <img src='https://w7.pngwing.com/pngs/913/965/png-transparent-black-eye-illustration-eye-drawing-color-eye-people-human-eye-simple-eye-in-invertebrates.png'/> */}
          <button onClick={ClickEvent => togglePasswordVisible(ClickEvent)}>
            {statusText}
            </button>
        </span>
      </div>
      <input type={status} name='password' className="dateInput" maxLength={15} placeholder="Create password"/>
    </div>
  )
}

export function ConfirmPassword() {
  return (
    <div className='dateInput'>
      <div className='label confirm'>
        <label>Confirm password</label>
      </div>
      <input type="text" name='confirmPassword' id="nicknameInput" placeholder="Oscar@gmail.com"/>
    </div>
  )
}