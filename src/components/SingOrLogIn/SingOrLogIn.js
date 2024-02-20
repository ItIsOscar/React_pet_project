

import { capchaPic } from '../../assets/date';
import facebook_logo from "../../assets/Facebook_Logo_(2019).png"
import google_logo from "../../assets/google_logo.png"
import instagram_logo from "../../assets/instagram_logo.jpg"

// import "./SignOrLogIn.css";


function NicknameInput() {
    return (
      <div className='dateInput' >
        <div className='label'>
          <label>Email</label>
          <span>
            Already have an account?
            <button>Log in</button>
          </span>
        </div>
          <input type="text" id="nicknameInput" placeholder="Oscar@gmail.com"/>
      </div>
    )
  }
  
  function PasswordInput() {
    return (
      <div className='dateInput'>
        <div className='label'>
          <label>Password</label>
          <span>
            {/* <img src='https://w7.pngwing.com/pngs/913/965/png-transparent-black-eye-illustration-eye-drawing-color-eye-people-human-eye-simple-eye-in-invertebrates.png'/> */}
            <button>show</button>
          </span>
        </div>
      <input type="password" className="dateInput" placeholder="Create password"/>
      </div>
    )
  }
  
  function LogIn() {
    return (
      <form className='form'> 
        <h2>Sing up</h2>
        <NicknameInput />
        <PasswordInput />
      </form>
    )
  }
  
  function Captcha() {
    let arrayCaptcha = []
    for (let index = 0; index < 8; index++) {
      arrayCaptcha.push(capchaPic[0]) 
    }
    console.log(arrayCaptcha)
    let JSXcaptchaPic = arrayCaptcha.map((picture) => 
      <img src= {picture.src}/>
    )
    console.log(arrayCaptcha[0].src)
    return (
      <div className='captcha'>
      <h3>Find picture with car</h3>
      <div className=''>
        {JSXcaptchaPic}
      </div>
      </div>
    )
  }
  
  function SocialMedia({src_logo}) {
    return (
      <button >
        <img src={src_logo} alt={src_logo}/>
      </button>
    )
  }
  
  function Entry() {
    return (
      <div className='confirmLog'>
        <button className='entry'>Entry</button>
        <div className='soicalMedia'>
          <label>enter with help social</label>
          <div>
            <SocialMedia src_logo={google_logo} />
            <SocialMedia src_logo={facebook_logo} />
            <SocialMedia src_logo={instagram_logo} />
          </div>
        </div>
      </div>
    )
  }
  
  export default function SignOrLogIn() {
    return (
      <div className='logIn'>
      <LogIn />
      <Captcha />
      <Entry />
      </div>
    );
  }