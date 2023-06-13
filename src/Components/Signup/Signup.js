import React, { useContext, useState } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../store/FirebaseContext';



export default function Signup() {
  const history =useHistory()
  const {firebase}= useContext(FirebaseContext)

  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('')
  const [number,setNumber]=useState('')
  const [password,setPassword]=useState('')

  
  const handleSubmit=(e)=>{
    e.preventDefault()
   firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
    result.user.updateProfile({DisplayName:username}).then(()=>{
      firebase.firestore().collection('users').add({
        id:result.user.uid,
        username:username,
        number:number
      }).then(()=>{
         history.push("/login")
      })

    })
   })
   
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            value={username} 
            onChange={(e)=>setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            value={number}
            onChange={(e)=>setNumber(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
