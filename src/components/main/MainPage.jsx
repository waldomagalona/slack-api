
import React from 'react';
import {Spinner} from 'react-bootstrap'


export default function MainPage(props){
    return(
        

<div>

    <div className=' h-screen flex'>
        <div className='w-1/2 p-10 bg-gradient-to-r from-yellow-100'>
                 <h1 className="mb-16 text-2xl">SLACK API</h1>
                <p className='mb-5 text-5xl uppercase tracking-widest'> <span className="text-yellow-400">we're</span> <br /> chatting<br /> soon</p>
                <p className="mb-7 text-sm leading-snug text-yellow-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div>
                    <input type="email" className="h-11 rounded-full bg-transparent border-yellow-300 border w-2/4" />
                    <button className="bg-gradient-to-r from-yellow-300 to-yellow-500 h-11 w-20 rounded-full text-white -m-12"> &#62; </button>
                </div>
                <div className="pt-52">
                <button
                onClick ={()=> props.toggleIsLoggedIn()} 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Log out
                </button></div>
                

        </div>
        <div className="w-1/2 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80')`}}>
            
        </div>
    </div>
</div>
    )
}