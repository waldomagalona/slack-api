import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MapMessage from './MapMessage';


export default function MessagesContainer(props){
    const data =props.data
    
    const receiverEmail = data['receiver_email']
    const messageBody= data['body']
    const headers= props.headers
    const receiveMessages =props.messages;
    const [messages, setMessages]=useState([])
    console.log("counter",props.counter)
    const count = props.counter;
    const mapMessages=()=>{
        setMessages(receiveMessages)
    }
    const hydrate=()=>{
      axios({
        method: 'get',
        url:`http://206.189.91.54/api/v1/messages?receiver_id=${data?data["receiver_id"]:""}&receiver_class=${data?data["receiver_class"]:""}`,
        data: data,
        headers: headers
      })
      .then(response=>{
        setMessages(response.data.data)
      })
      .catch(error=>{
        console.log(error)
      })
    }
    const retrieveMessages =()=>{
        axios({
          method: 'get',
          url:`http://206.189.91.54/api/v1/messages?receiver_id=${data?data["receiver_id"]:""}&receiver_class=${data?data["receiver_class"]:""}`,
          data: data,
          headers: headers
        })
        .then(response=>{
          setMessages(response.data.data)
        })
        .catch(error=>{
          console.log(error)
        })
        }

    useEffect(()=>{
     hydrate()
    },[count])
    
    useEffect(()=>{
    mapMessages() 
    retrieveMessages()
    },[receiverEmail])

    return(
        <MapMessage 
        data={data}
        headers ={headers}
        messages={messages} />
    )
}