
import React from 'react';
import ChatBox from './chat/ChatBox';
import Sidebar from './SideBar';


export default function MainPage(props){
    // console.log(props)
    

    return(
<div>

    <div className='overflow-hidden h-screen flex'>
        <div className='flex w-1/2  bg-gradient-to-r from-yellow-100'>
        
        <Sidebar logOut={props.logOut} />
        <div className="p-10">
                 <h1 className="mb-16 text-2xl">SLACK API </h1>
                <p className='mb-5 text-5xl uppercase tracking-widest'> <span className="text-yellow-400">we're</span> <br /> chatting<br /> soon</p>
                <p className="mb-7 text-sm leading-snug text-yellow-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                </div>

        </div>
        <div className="w-1/2 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80')`}}>
            <ChatBox headers={props.headers}/>
        </div>
    </div>
</div>
    )
}