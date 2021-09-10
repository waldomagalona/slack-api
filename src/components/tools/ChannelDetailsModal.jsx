import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import axios from "axios";

export default function ChannelDetailsModal(props) {
    const usersList =props.usersList
    const headers = props.headers;
    const receiveData = props.receiveData;
    const display = props.display;
    const channelId =receiveData && receiveData['receiver_id']
    const [channelDetails, setChannelDetails] = useState({
        channelName:"",
        channelMembers:[]
    })
    
    
    
    
    const [showModal, setShowModal] = React.useState(false);

    function handleClick(event){
        event.preventDefault();
        setShowModal(true)
        props.toggleOption()

        axios({
            method:'get',
            url:`http://206.189.91.54/api/v1/channels/${channelId}`,
            headers: headers
        })
        .then(response=>{
            console.log(response.data.data)
            const data =response.data.data
            const {channel_members , name} = data
            console.log('cha',channel_members)
            setChannelDetails({
                channelName: name,
                channelMembers: channel_members
            })
            // 
            // console.log(channel_members)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const memberId = channelDetails.channelMembers.map(member=>{
        return member['user_id']
    })
    console.log(memberId)
    const channelMembers = memberId.map(mId=>{
        console.log(mId)
        return usersList.filter(user=>{
            return user.id === mId
        })
    })
    const members = [].concat.apply([], channelMembers)
    console.log("mem",members)
    return (
        <>
           {(receiveData && receiveData["receiver_class"]==="Channel")&&<div
            onClick={handleClick}
            className={`${display} right-0 w-48 py-2 mt-2 bg-white bg-gray-100 rounded-md shadow-xl`}>
        <div  className="block px-4 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 hover:text-white">
            Channel Details
        </div>
        
    </div>}
           
            <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                   {channelDetails.channelName}
                </ModalHeader>
                <ModalBody>
                <p className="text-green-900">MEMBERS</p>
                  {members.map(member=>{
                      const {email}=member
                      return <p className="text-green-900">{email}</p>
                  })}
                </ModalBody>
                <ModalFooter>
                    <Button 
                        color="red"
                        buttonType="link"
                        onClick={(e) => setShowModal(false)}
                        ripple="dark"
                    >
                        Close
                    </Button>

                </ModalFooter>
            </Modal>
        </>
    );
}