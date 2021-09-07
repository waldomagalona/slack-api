import React from 'react';
import ChannelCards from '../cards/ChannelCards';
import SearchBar from '../tools/SearchBar';

export default function ChannelListContainer(props){
    const channelList = props.channelList;
    console.log("clc", channelList)
    return(
        <div className=" h-20 pb-4">
        {/* <!-- card --> */}
          <div className="w-full bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
            <div className="header-card flex justify-between font-semibold">
              <div className="">Channels</div>
              <SearchBar
              getTerm={props.getTerm}
              searchHandler ={props.searchHandler} />
            </div>
            {/* <!-- end header --> */}
        <div className="overflow-scroll overflow-x-hidden h-64">
          
            
          {channelList.map(channel=>{
              {/* console.log(channel) */}
              return <ChannelCards
              id={channel.id}
              channelName={channel.name}
              channelId={channel.id}
              updatedAt={channel['updated_at']}
              ownerId= {channel['owner_id']} />
          })}
            </div>
          </div>
        
        
        </div>
    )
}