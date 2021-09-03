import React, {useState, useRef} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import{ yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema=yup.object().shape({
    name: yup.string().min(4).max(15).required()
})

const AddChannel = (props) => {
    const headers=props.headers;
    const [showModal, setShowModal] = useState(false);
    const {register, handleSubmit, formState:{errors}}= useForm({
        resolver: yupResolver(schema),
    });
    

    const addChannelHander = (data) => {
        axios.post('http://206.189.91.54//api/v1/channels', data, {
            headers: headers
          })
        .then(response => {
            console.log(response)
            setShowModal(false)
        })
        .catch(error => alert("Unable to add channel. Please review inputs."))
    }
    
    return (
        <div>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => setShowModal(true)}> 
                Add Channel
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
                  <h3 className="text-3xl font-semibold">
                    Create a new channel
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
                <form onSubmit={handleSubmit(addChannelHander)}>
                <div className="relative p-6 flex-auto">
                  <label>
                      Channel Name:
                  </label>
                  <input
                    {...register("name")} 
                    name="name"
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="name"
                    type="name"
                    placeholder="Channel name"
				    />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
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

export default AddChannel;
