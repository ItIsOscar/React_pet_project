import "./inputs.scss"
import EmailInput from "./emailInput/emailInput"
import PasswordInput from "./passwordInput/passwordInput"
import { ConfirmPassword } from "./passwordInput/passwordInput"

interface IInputs {
  isItSing: boolean
  toggleStatus: () => void
}

export default function Inputs({isItSing, toggleStatus}: IInputs) {
  return (
    <div className='inputs'> 
      <h2>{isItSing ? "Log in" : "Sign in"}</h2>
      <EmailInput isItSing={isItSing} toggleStatus = {toggleStatus}/>
      <PasswordInput />
      {!isItSing && <ConfirmPassword />}
    </div>        
  ) 
}