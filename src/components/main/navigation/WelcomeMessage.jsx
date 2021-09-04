import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListContainer from '../../table/ListContainer';

export default function WelcomeMessage(props){
    const [usersList, setUsersList] = useState([])
    const headers = props.headers;
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

    useEffect(()=> {
        getUsersList();
    },[])
    
    return(<div>
        <p className='mb-5 text-5xl uppercase tracking-widest'> <span className="text-yellow-400">we're</span> <br /> chatting<br /> soon</p>
        <ListContainer usersList={usersList} />
       
        </div>         
    )
}