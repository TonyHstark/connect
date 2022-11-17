import './login.css';
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import loginIcon from './Images/LoginIcon.png';
import {auth} from './firebase';
import {login} from './features/UserSlice';
import { createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import { selectUser } from './features/UserSlice';
import {useSelector} from 'react-redux';

function Login() {
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [profilepic,setProfile]=useState("");
    const dispatch=useDispatch();
    const user=useSelector(selectUser);
    const register=()=>
    {
        if(!name)
        {
            return alert("Please enter the name!!");
        }
        createUserWithEmailAndPassword(auth,email,password)
      .then((userAuth) => {
        const user = userAuth.user;
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName:name,
          photoURL:profilepic,
        })
        .then(()=>{
          dispatch(login({
            email:userAuth.user.email,
            uid:userAuth.user.uid,
            displayName:name,
            photoUrl:profilepic,

          }));
      });
    }) .catch((error) => {
      alert(error);
    });
   
      console.log(user);  
    };
    const LoginToapp=(e)=>
    {
      e.preventDefault();
   };
  return (
    <div className='login'>
        <img src={loginIcon} alt="" />
        <form action="">
            <input value={name} onChange={e=>setName(e.target.value)} placeholder='Full Name(Required)' type="text" />
            <input value={profilepic} onChange={e=> setProfile(e.target.value)} placeholder="Enter your profile pic URL" type="text" />
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter your Email(Required)' type="text" />
            <input value={password} onChange={e=> setPassword(e.target.value)} placeholder='Enter your password' type="password" />
            <button onClick={LoginToapp} type='submit'>Submit</button>
        </form>
        <p>Not a Member? {" "}<span className='login__register'  onClick={register}>Register Now!</span></p>
    </div>
  )
}

export default Login