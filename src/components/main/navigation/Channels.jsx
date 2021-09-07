import React from 'react';
import AddChannel from '../channels/AddChannel';
import ListChannels from '../channels/ListChannels';

export default function Channels(props){
    return(<div>
        <p className='mb-5 text-5xl uppercase tracking-widest'> <span className="text-yellow-400">Channels</span> <br /> here</p>
        <p className="mb-7 text-sm leading-snug text-yellow-400">TODO: List Channels here</p>
        <ListChannels headers={props.headers} usersList={props.usersList}/>
        <br></br>
        <AddChannel headers = {props.headers} usersList={props.usersList}/>
        </div>         
    )
}