import "./submit.scss"

import facebook_logo from "../../../shared/assets/Facebook_Logo_(2019).png"
import google_logo from "../../../shared/assets/google_logo.png"
import instagram_logo from "../../../shared/assets/instagram_logo.jpg"

interface ISocialMedia {
  src_logo: string
  clickHandler: () => void
}

function SocialMedia({src_logo, clickHandler}: ISocialMedia) {
  return (
    <button onClick={clickHandler}>
      <img src={src_logo} alt={src_logo}/>
    </button>
  )
}

interface ISubmit {
  itIsSing: boolean
}

export default function Submit({itIsSing}: ISubmit) {
  return (
    <div className='typeOfSubmit'>
      <div className='confirmLogIn'>
        <input type='submit' name= "submit" className='submit' />
        <section className='soicalMedia'>
          <label>enter with help social</label>
          <ul>
            <SocialMedia src_logo={google_logo} clickHandler={() => alert("Buy premium account!")} />
            <SocialMedia src_logo={facebook_logo} clickHandler={() => alert("Buy premium account!")} />
            <SocialMedia src_logo={instagram_logo} clickHandler={() => alert("Buy premium account!")} />
          </ul>
        </section>
      </div>
      <button className='forgot'>{itIsSing ? "Forgot password?": "Accept our conference"}</button>
    </div> 
  )
}