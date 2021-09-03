import React, {useState, useEffect} from 'react';
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
        setChannels(response.data.data)
      })
      .catch(error=>{
        console.log(error)
      })
    }

    useEffect(()=>{
        retrieveChannels();
       },[channels])


    return (
        <div>
            {
            channels.map(channels => (
                    <div>
                        <div id='channels'>{channels.name}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default ListChannels;
