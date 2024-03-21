import "./submit.scss"

import facebook_logo from "../../../assets/Facebook_Logo_(2019).png"
import google_logo from "../../../assets/google_logo.png"
import instagram_logo from "../../../assets/instagram_logo.jpg"

function SocialMedia({src_logo, clickHandler}) {
  return (
    <button onClick={clickHandler}>
      <img src={src_logo} alt={src_logo}/>
    </button>
  )
}

export default function Submit({itIsSing}) {
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