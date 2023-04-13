import React ,{useState}  from 'react'

import { storage , fs} from '../../config/firebaseConfig'

import "./Home.css"

function Home() {
  
  const [topic, setTopic]=useState('');
  const [description, setDescription]=useState('');
  const [contact, setContact]=useState('');
  const [redescription, setRedescription]=useState('');

  const [successMsg , setSuccessMsg] = useState('');
  const [errorMsg , setErrorMsg] = useState('');


  const handleMessage = (e) => {
    e.preventDefault();

    fs.collection('Meassages').add({
      topic,
      description,
      contact
    }).then(() => {
      setTopic('')
      setDescription('')
      setContact('')
      setTimeout(()=>{
        alert("Meassage sent successfully");
    },3000)
    }).alert(error=>console.log(error.message));
  
    
  }

  return (
    <div className="container">
      <h1>This is our Home Page</h1>
      <form className="formContainer" onSubmit={handleMessage}>
   
        <label for="">Topic*</label>
        <input onChange={e=>setTopic(e.target.value)} value={topic} type="text"/>
        <label for="">Message*</label>
        <textarea id="msg" onChange={e=>setDescription(e.target.value)} value={description} type="textarea"/>
        <label for="">Contact Number (iff urgent)</label>
        <input onChange={e=>setContact(e.target.value)} value={contact} type="text"/>

        <button type="submit">Send</button>    
    </form>
    </div>
  )
}

export default Home
