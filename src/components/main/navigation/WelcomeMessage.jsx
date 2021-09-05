import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListContainer from '../../table/ListContainer';

export default function WelcomeMessage(props){
    const [usersList, setUsersList] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [term, setTerm] =useState("")
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

    function getTerm(searchTerm){
        setTerm(searchTerm)
    }

    function searchHandler(searchTerm){
        if(searchTerm !== ""){
            const newUsersList = usersList.filter((user) => {
                return (Object.values(user).join(" ").toLowerCase().includes(searchTerm.toLowerCase()))
            })
            setSearchResult(newUsersList);
        } else {
            setSearchResult(usersList)
        }
    }
    
    useEffect(()=> {
        getUsersList();
    },[])

   
    return(<div>
        <p className='mb-5 text-5xl uppercase tracking-widest'> <span className="text-yellow-400">we're</span> <br /> chatting<br /> soon</p>
        <ListContainer 
        getTerm={getTerm}
        searchHandler ={searchHandler}
        usersList={term.length < 1? usersList: searchResult} 
        
        />
        
        </div>         
    )
}