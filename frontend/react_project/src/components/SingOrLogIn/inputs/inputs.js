import "./inputs.scss"
import EmailInput from "./nicknameInput/emailInput"
import PasswordInput from "./passwordInput/passwordInput"
import { ConfirmPassword } from "./passwordInput/passwordInput"

export default function Inputs({itIsSing, toggleStatus}) {
  return (
    <div className='inputs'> 
      <h2>{itIsSing ? "Log in" : "Sign in"}</h2>
      <EmailInput toggleStatus = {toggleStatus}/>
      <PasswordInput />
      {!itIsSing && <ConfirmPassword />}
    </div>        
  ) 
}