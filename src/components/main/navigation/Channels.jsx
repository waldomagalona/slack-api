import React from 'react';
import AddButton from '../../buttons/AddButton';
import NewChannelModal from '../../modals/NewChannelModal';
import ChannelsList from '../channel/ChannelsList';

export default function Channels(){
    return(<div>
        <p className='w-1/2 mb-5 text-5xl uppercase tracking-widest'> <span className="text-yellow-400">Channels</span> <br /> here</p>
        <NewChannelModal />
        <ChannelsList />
        </div>         
    )
}