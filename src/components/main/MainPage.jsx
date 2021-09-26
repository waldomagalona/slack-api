import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ChatBox from './chat/ChatBox';
import Sidebar from './SideBar';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import WelcomeMessage from './navigation/WelcomeMessage';
import DirectMessages from './navigation/DirectMessages';
import Channels from './navigation/Channels';

export default function MainPage(props){
    const [receiverData, setReceiverData]= useState()
    const headers = props.headers
    const [usersList, setUsersList] = useState([])
    const [channelList, setChannelList] = useState([])
   
    const hydrate =()=> {
        axios({
            method:'get',
            url:'https://slackapi.avionschool.com/api/v1/channels',
            headers: headers
        })
        .then(response =>{
            if(response.data.errors){
                setChannelList(null)
            }else{
                setChannelList(response.data.data)
            }
           
        })
        .catch(error=>{
            console.log("Channels where was invited",error)
        })
    }
// ================================

const retrieveInvitedChannels =()=> {
    axios({
        method:'get',
        url:'https://slackapi.avionschool.com/api/v1/channels',
        headers: headers
    })
    .then(response =>{
        if(response.data.errors){
            setChannelList(null)
        }else{
            setChannelList(response.data.data)
        }
       
    })
    .catch(error=>{
        console.log("Channels where was invited",error)
    })
}
    // for User
    const getUsersList =()=>{
        axios({
            method:'get',
            url:'https://slackapi.avionschool.com/api/v1/users',
            headers: headers
        })
        .then(response => {
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
        retrieveInvitedChannels();
        getUsersList();
        console.log(headers)
    },[receiverData])

    useEffect(()=>{
        hydrate()
    },[headers])

    return(
        
<div>
    <div className='overflow-hidden h-screen flex'>
        <div className='flex w-1/2  bg-gradient-to-br from-gray-600 to-gray-300'>
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
                    <DirectMessages 
                    />
                </Route>
                <Route path ="/channels" >
             
                    <Channels
                     passReceiverDetails={passReceiverDetails}
                    channelList={channelList}
                    headers={props.headers} 
                    usersList={usersList}/>
                </Route>
                </Switch>
                </div>
        </Router>
        </div>
        <div className="w-1/2 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1599992836360-f88e279f8350?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHdvb2QlMjB0ZXh0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80')`}}>
            <ChatBox 
             usersList={usersList}
            receiverData ={receiverData}
            headers={props.headers}/>
        </div>
    </div>
</div>


    )
}