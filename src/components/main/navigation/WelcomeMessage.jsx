import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListContainer from '../../table/ListContainer';


export default function WelcomeMessage(props){
   
    const [searchResult, setSearchResult] = useState([])
    const [term, setTerm] =useState("")

   
    function getTerm(searchTerm){
        setTerm(searchTerm)
    }

    function searchHandler(searchTerm){
        if(searchTerm !== ""){
            const newUsersList = props.usersList.filter((user) => {
                return (Object.values(user).join(" ").toLowerCase().includes(searchTerm.toLowerCase()))
            })
            setSearchResult(newUsersList);
        } else {
            setSearchResult(props.usersList)
        }
    }
    


   
    return(<div>
    
        <p className='mb-5 text-5xl uppercase tracking-widest'> <span className="text-yellow-400">we're</span> <br /> chatting<br /> soon</p>
        <ListContainer
        passReceiverDetails={props.passReceiverDetails} 
        getTerm={getTerm}
        searchHandler ={searchHandler}
        usersList={term.length < 1? props.usersList: searchResult} 
        
        />
        
        </div>         
    )
}