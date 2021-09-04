import React from 'react'
import Cards from '../../cards/Cards'

export default function Channelslist(){
    return (
         <div className=" h-20 pb-4">
        {/* <!-- card --> */}
          <div className="w-full bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
            <div className="header-card flex justify-between font-semibold">
              <div className="">Channels</div>
            </div>
            {/* <!-- end header --> */}
        <div className="overflow-scroll overflow-x-hidden h-64">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            </div>
          </div>
        
        
        </div>
    )
}