import { FocusEvent } from "react"
import "../inputs.scss"

interface  IEmailInput {
  isItSing: boolean
  toggleStatus: () => void
}

export default function EmailInput({isItSing: itIsSing, toggleStatus}: IEmailInput) {
  function emptyEmail() {
    
  }
  
  function passEmail(emailInput: HTMLInputElement) {
    emailInput.style.borderColor = "green"
  }

  function wrongEmail(emailInput: HTMLInputElement) {
    emailInput.style.borderColor = "red"
  }

  function checkEmail(event: FocusEvent<HTMLInputElement>): void {
    let email = event.target as HTMLInputElement
    email.value == "" ? emptyEmail() : 
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
      <input type="email" name='gmail' id="nicknameInput" onBlur={event => checkEmail(event)} placeholder="Oscar@gmail.com"/>
    </div>
  )
}