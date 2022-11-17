import React, { useEffect, useState } from 'react';
import './Feed.css';
import {collection, onSnapshot, query,setDoc,doc,addDoc,serverTimestamp, orderBy } from "firebase/firestore";
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import Post from './Post';
import { db} from './firebase';
import firebase from 'firebase/compat/app';
import { async } from '@firebase/util';

function Feed ()
{
    const [input,setInput] =useState('');
    const [posts,setPost]=useState([]);/* UseState is react hook and for
    every 1st variable there should be a setter method for [post there
    is setPost]*/
    const colref=collection(db,"posts");
    const q=query(colref,orderBy('timestamp',"desc"));

    useEffect(()=> {
        onSnapshot(q,(snapshot)=>{
            setPost(
                snapshot.docs.map((doc)=>({
                    id:doc.id,
                    data : doc.data(),
                }))
            )
        })
    },[]);
    const sendPost = (e) => {
        e.preventDefault();
        addDoc(colref, {
            name:"shakambhar pujari",
            description:"This is a test",
            Message:input,
            photourl:"",
            timestamp:serverTimestamp()
        })
        setInput("")
    };
    return(
        <div className='feed'>
            <div className="feed__inputcontainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input value={input} onChange={(e)=> {
                            setInput(e.target.value)
                        }} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                <InputOptions Icon={ImageIcon} title='Photo' color="#70B5F9"/>
                <InputOptions Icon={SmartDisplayIcon} title='video' color="#E7A33E"/>
                <InputOptions Icon={EventIcon} title='Events' color="#C0CBCD"/>
                <InputOptions Icon={CalendarViewDayIcon} title='calendar' color="#7FC15E"/>
            </div>

            </div>
            {/*Rendering all the postssss*/}
            {
                posts.map(({id, data: {name,description,Message,photourl}})=>(
                    <Post
                    key={id}
                    name={name}
                    description={description}
                    Message={Message}
                    photourl={photourl}
                    />
                ))}
            
           
        </div>
    )
}
export default Feed;
