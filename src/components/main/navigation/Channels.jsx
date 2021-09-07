import React,{useState} from 'react';
import ChannelListContainer from '../../table/ChannelListContainer';
import AddButton from '../../tools/AddButton';
import NewChannelModal from '../../tools/NewChannelModal';

export default function Channels(props){

    const [searchResult, setSearchResult] = useState([])
    const [term, setTerm] =useState("")

    function getTerm(searchTerm){
        setTerm(searchTerm)
    }

    function searchHandler(searchTerm){
        if(searchTerm !== ""){
            const newChannelList = props.channelList.filter((channel) => {
                return (Object.values(channel).join(" ").toLowerCase().includes(searchTerm.toLowerCase()))
            })
            setSearchResult(newChannelList);
        } else {
            setSearchResult(props.channelList)
        }
    }

    return(<div>
        <p className='mb-5 text-5xl uppercase tracking-widest'> <span className="text-yellow-400">Channels</span> <br /> here</p>
        <NewChannelModal />
        <ChannelListContainer
        passReceiverDetails={props.passReceiverDetails}
        channelList={term.length < 1? props.channelList: searchResult}
        getTerm={getTerm}
        searchHandler ={searchHandler} />
        </div>         
    )
}