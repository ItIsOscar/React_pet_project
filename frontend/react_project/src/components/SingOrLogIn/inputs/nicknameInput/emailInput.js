import "../inputs.scss"

export default function EmailInput({itIsSing, toggleStatus}) {
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