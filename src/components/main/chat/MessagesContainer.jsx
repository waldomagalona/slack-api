import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MapMessage from './MapMessage';


export default function MessagesContainer(props){
    const data =props.data
    const headers= props.headers
    const [messages, setMessages]=useState([])
    const count = props.counter;
  

    const hydrate=()=>{
      axios({
        method: 'get',
        url:`https://slackapi.avionschool.com/api/v1/messages?receiver_id=${data?data["receiver_id"]:""}&receiver_class=${data?data["receiver_class"]:""}`,
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
          url:`https://slackapi.avionschool.com/api/v1/messages?receiver_id=${data?data["receiver_id"]:""}&receiver_class=${data?data["receiver_class"]:""}`,
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
      retrieveMessages()
     
    },[data])

    useEffect(()=>{
      hydrate()
     },[count])
    return(
        <MapMessage 
        data={data}
        headers ={headers}
        messages={messages} />
    )
}