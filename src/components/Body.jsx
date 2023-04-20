import React from 'react'
import RestrauntCard from './Restrauntcard';
import "../styles/body.css";
import { restrautList } from "./constants"



const Body = () => {
    return (
        <>
            <div className="search-container"></div>
            <div className='restaurant-list'>
                {/* //or restaurant={restrautList[0]} */}
                {/* <RestrauntCard {...restrautList[0].data} />
            <RestrauntCard {...restrautList[1].data} />
            <RestrauntCard {...restrautList[2].data} />
            <RestrauntCard {...restrautList[3].data} />
            <RestrauntCard {...restrautList[4].data} />
            <RestrauntCard {...restrautList[5].data} /> */}

                {/* OR */}
                {/* //no key(not acceptible)<<<index key(use only if we don't have anything)<<<unique key(best practice) */}
                {restrautList.map((restaurant) => {

                    return < RestrauntCard  {...restaurant.data} key={restaurant.data.id} />


                })}



            </div>
        </>
    )
}

export default Body
