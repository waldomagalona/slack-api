
import React from 'react';
import ChatBox from './chat/ChatBox';
import AddChannel from '../channels/AddChannel';
import ListChannels from '../channels/ListChannels';


export default function MainPage(props){
    // console.log(props)
    function handleClick(){
        props.logOut()
    }

    return(
<div>

    <div className=' h-screen flex'>
        <div className='w-1/2 p-10 bg-gradient-to-r from-yellow-100'>
                 <h1 className="mb-16 text-2xl">SLACK API </h1>
                <p className='mb-5 text-5xl uppercase tracking-widest'> <span className="text-yellow-400">we're</span> <br /> chatting<br /> soon</p>
                <div class="md:container md:mx-auto">
                    <AddChannel headers={props.headers}/>

                </div>
                <div className="pt-52">
                <button
                onClick ={handleClick} 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Log out
                </button></div>
                

        </div>
        <div className="w-1/2 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80')`}}>
            <ChatBox headers={props.headers}/>
        </div>
    </div>
</div>
    )
}