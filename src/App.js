import React, { useEffect } from 'react';
import './App.css';
import Header from './header';
import Sidebar from './Sidebar';
import Login from './Login';
import Feed from './Feed';
import { login,logout, selectUser } from './features/UserSlice';
import {useDispatch, useSelector} from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase';

function App() {

  //retrieving data from redux data layer
  const user=useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        dispatch(login({
          email:user.email,
            uid:user.uid,
            displayName:user.displayName,
            photoUrl:user.photoURL,
        }))
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(logout());
      }
    });
  },[])

  return (
    //Everything written here is returned using the js file and displayed
    <div className="app"> 
      <Header />
      { !user ? (
      <Login />
      ) :  (
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      )}
    </div>
  );
}

export default App;
