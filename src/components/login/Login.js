import React , {useState} from 'react'

import "./Login.css"

import { auth , fs} from '../../config/firebaseConfig'
import {useNavigate} from 'react-router-dom'

function Login() {


  const history = useNavigate()

  const [fullName, setFullname]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [repassword, setRePassword]=useState('');

  const [successMsg , setSuccessMsg] = useState('');
  const [errorMsg , setErrorMsg] = useState('');

  const handleLogin=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email , password).then(() => {
        
        setSuccessMsg('Login Successfull. You will now automatically get redirected to Home Page. Press OK to continue...')
        setEmail('')
        setPassword('')

        setTimeout(() => {
            alert("Login Successfully! You will automatically redirected to our HomePage")
            history('/home')
        }, 2000);

    }).catch((error) => {
        alert(error.message)
    })
}

  return (
    <div className="container">
    <span>Log-In</span>
    <form className="formContainer" onSubmit={handleLogin}>
        {/* <label for="">Name*</label>
        <input onChange={e=>setFullname(e.target.value)} value={fullName} type="text"/> */}
        <label for="">Email*</label>
        <input onChange={e=>setEmail(e.target.value)} value={email} type="email"/>
        <label for="">Password*</label>
        <input onChange={e=>setPassword(e.target.value)} value={password} type="password"/>
        {/* <label for="">Re-Enter Password*</label>
        <input onChange={e=>setRePassword(e.target.value)} value={repassword} type="password"/> */}
        <button type="submit">Submit</button>    
    </form>
</div>
  )
}

export default Login
