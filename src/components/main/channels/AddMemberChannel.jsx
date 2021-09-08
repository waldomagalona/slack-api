import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import{ yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
//import Select from 'react-select';
import Multiselect from 'multiselect-react-dropdown';

const schema=yup.object().shape({
    name: yup.string().min(4).max(15).required()
})

const AddMemberChannel = (props) => {
    const headers=props.headers;
    const usersList = props.usersList;
    let addedId = [];
    const [newMember, setNewMember] = useState();
    
    const [showModal, setShowModal] = useState(false);
    const {register, handleSubmit, formState:{errors}}= useForm({
        resolver: yupResolver(schema),
    });

    const addChannelHander = () => {
          axios({
            method: 'post',
            url: 'http://206.189.91.54/api/v1/channel/add_member',
            data: {
              'id': props.id, 
              'member_id': newMember
            },
            headers: headers
          })
        .then(response => {
            console.log(response)
            console.log(newMember)
            setShowModal(false)
        })
        .catch(error => alert("Unable to add channel. Please review inputs."))
    }
    
    const onSelect = (data) =>
    {
      console.log(data)
      addedId = parseFloat(data.map(d => ([
        d.id
      ])));
      console.log(addedId)
      setNewMember(addedId)
    }
    const onRemove = (data) =>
    {
      console.log(data)
      addedId = parseFloat(data.map(d => ([
        d.id
      ])));
      console.log(addedId)
      setNewMember(addedId)
    }


    return (
        <div>
            <button onClick={() => setShowModal(true)} className="flex items-center px-2 py-1 text-xs text-white bg-green-400 hover:bg-green-600">
                        
                        <span className="">+ Add Member</span>
            </button>
            {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    Add members to {props.name}:
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form /* onSubmit={addChannelHander} */> 
                  <Multiselect
                    options={usersList} // Options to display in the dropdown
                    onSelect={onSelect} // Function will trigger on select event
                    onRemove={onRemove} // Function will trigger on remove event
                    displayValue="email"
                    selectionLimit = {1} // Property name to display in the dropdown options
                  />
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-500 text-white hover:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={addChannelHander}
                  >
                    Save Changes
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </div>
        )
}

export default AddMemberChannel;
