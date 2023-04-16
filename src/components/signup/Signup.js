import React , {useState} from 'react'

import { auth , fs} from '../../config/firebaseConfig'

import {useNavigate} from 'react-router-dom'

import "./Signup.css"

function Signup() {

    const history = useNavigate()
    
    const [fullName, setFullname]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [repassword, setRePassword]=useState('');

    const [successMsg , setSuccessMsg] = useState('');
    const [errorMsg , setErrorMsg] = useState('');

    const handleSignUp = (e) => {
            e.preventDefault()
            auth.createUserWithEmailAndPassword(email,password).then((credentials)=>{
                console.log(credentials);
                fs.collection('users').doc(credentials.user.uid).set({
                    FullName: fullName,
                    Email: email,
                    Password: password
                }).then(()=>{
                    alert('Signup Successfull. You will now automatically get redirected to Login. Press OK to continue...');
                    // setFullname('');
                    // setEmail('');
                    // setPassword('');
                    // setErrorMsg('');
                    setTimeout(()=>{
                        setSuccessMsg('');
                        history('/login');
                    },3000)
                }).catch(error=>alert(error.message));
            }).catch((error)=>{
                alert(error.message)
            })
    }

  return (
    <div className="container">
        <span>Sign-Up User</span>
        <form className="formContainer" onSubmit={handleSignUp}>
            <label for="">Name*</label>
            <input onChange={e=>setFullname(e.target.value)} value={fullName} type="text"/>
            <label for="">Email*</label>
            <input onChange={e=>setEmail(e.target.value)} value={email} type="email"/>
            <label for="">Password*</label>
            <input onChange={e=>setPassword(e.target.value)} value={password} type="password"/>
            <label for="">Re-Enter Password*</label>
            <input onChange={e=>setRePassword(e.target.value)} value={repassword} type="password"/>
            <button type="submit">Submit</button>    
        </form>
    </div>
  )
}

export default Signup
