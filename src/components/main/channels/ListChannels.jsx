import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';


export const ListChannels =(props) =>{
    const [channels, setChannels] = useState();
    const headers = props.headers;

    const retrieveChannels =()=>{
        console.log(headers)
     
      axios({
        method: 'get',
        url:`http://206.189.91.54/api/v1/channels`,
        headers: headers
      })
      .then(response=>{
        setChannels([response.data.data])
      })
      .catch(error=>{
        console.log(error)
      })
    }

    useEffect(()=>{
        retrieveChannels();
       },[])


    return (
        <div>
            {
            channels && channels.map(channels => (
                    <div className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                        <div id='channels'>{channels.name}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default ListChannels;
