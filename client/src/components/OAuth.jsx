import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { app } from "../firebase";
import { signInSuccess } from '../redux/user/userSlice.js';
export default function OAuth() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleGoogleClick = async () =>{
    try {
      const provider=new GoogleAuthProvider();
      const auth=getAuth(app);
      const result=await signInWithPopup(auth, provider);
      const res=await fetch('/api/auth/google',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data=await res.json();
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      console.log('Could not login with google',error);
    }
  }
  return (
    <button type='button' onClick={handleGoogleClick} className='bg-blue-500 text-white rounded-lg p-3 uppercase hover:opacity-95'>Continue with google</button>
  )
}
