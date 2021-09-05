import React from 'react'
import Cards from '../cards/Cards'
import SearchBar from '../tools/SearchBar'


export default function ListContainer(props){
  const usersList = props.usersList;
    return (
         <div className=" h-20 pb-4">
        {/* <!-- card --> */}
          <div className="w-full bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
            <div className="header-card flex justify-between font-semibold">
              <div className="">Users</div>
              <SearchBar
              getTerm={props.getTerm}
              searchHandler ={props.searchHandler} />
            </div>
            {/* <!-- end header --> */}
        <div className="overflow-scroll overflow-x-hidden h-64">
            {(usersList.length>0)?(usersList.map(user => {
             return <Cards
            passReceiverDetails={props.passReceiverDetails}
            email={user.email}
            id={user.id} />
            })): <div>No results found</div>}
            </div>
          </div>
        
        
        </div>
    )
}