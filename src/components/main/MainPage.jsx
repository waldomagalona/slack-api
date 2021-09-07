import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ChatBox from './chat/ChatBox';
import Sidebar from './SideBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WelcomeMessage from './navigation/WelcomeMessage';
import DirectMessages from './navigation/DirectMessages';
import Channels from './navigation/Channels';

export default function MainPage(props){
    console.log(props.user.data.id)
    const [receiverData, setReceiverData]= useState()
    const headers = props.headers
    // console.log(headers.uid)
    const [usersList, setUsersList] = useState([])

    const getUsersList =()=>{
        axios({
            method:'get',
            url:'http://206.189.91.54/api/v1/users',
            headers: headers
        })
        .then(response => {
            console.log(response.data.data)
            setUsersList(response.data.data)
        })
        .then(error => {
            console.log(error)
        })
    }

    function passReceiverDetails(receiverDetails){
    const rData = localStorage.getItem("receiver");
    const data =JSON.parse(rData)
        setReceiverData(data)
    }

    

    useEffect(()=> {
        console.log("useeffect in main page ran")
        getUsersList();
    },[receiverData])

    return(
        
<div>
    <div className='overflow-hidden h-screen flex'>
        <div className='flex w-1/2  bg-gradient-to-r from-yellow-100'>
        <Router>
        <Sidebar logOut={props.logOut} />

        <div className="p-10 w-full">
                 <h1 className="mb-16 text-2xl">SLACK API </h1>

                <Switch>
                <Route exact path ="/" >
                    <WelcomeMessage
                    passReceiverDetails={passReceiverDetails}
                    usersList={usersList}
                    headers={props.headers} />
                </Route>
                <Route path ="/directmessages" >
                    <DirectMessages />
                </Route>
                <Route path ="/channels" >
                    <Channels />
                </Route>
                </Switch>
                </div>
</Router>
        </div>
        <div className="w-1/2 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80')`}}>
            <ChatBox 
            receiverData ={receiverData}
            headers={props.headers}/>
        </div>
    </div>
</div>


    )
}