import React, { useState } from 'react'
import './Login.css'
import assests from '../../assets/images/images'
import { login,signup } from '../../firebase'

const Login = () => {
    const [signState, setSignState] = useState("Sign In")
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const user_auth = async(event)=>{
        event.preventDefault()
        if(signState === 'Sign In'){
            await login(email,password)
        }else{
            await signup(name,email,password)
        }
    }
  return (
    <div className='login'>
        <img src={assests.logo} className='login-logo' alt="" />
        <div className="login-form">
            <h1>{signState}</h1>
            <form>
                {signState === 'Sign Up'? <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Your name'/>:<></>}
                
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email'/>
                <input value={password} onChange={(e)=>setPassword(e.target.value)}type="password" placeholder='Password'/>
                <button onClick={user_auth} type='submit'>{signState}</button>
                <div className="form-help">
                    <div className="remember">
                        <input type="checkbox" />
                        <label htmlFor="">Remember me</label>
                    </div>
                    <p>Need help?</p>
                </div>
            </form>
            <div className="form-switch">
                {signState === "Sign In"?<p>new to netflix? <span onClick={()=>setSignState('Sign Up')}>Sign Up now</span></p>:
                <p>already have account? <span onClick={()=>setSignState('Sign In')}>Sign In now</span></p>}
                
                
            </div>
        </div>
    </div>
  )
}

export default Login