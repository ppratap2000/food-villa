import React from 'react'
import "../styles/RestrauntCard.css";
import { IMG_CDN_URL } from './constants';





//config driven UI



// const config = [
//     {
//         type: "carousel",
//         cards: [
//             // {
//             //     offerName: "50% off"
//             // },
//             // {
//             //     offerName: " No delivery charges"
//             // }
//         ],
//     },
//     {
//         type: "restaurants",{
//         cards: [
//             {
//                 name: "BurgerKing",
//                 image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/28fb13049b4e55297bb3f703cde63c35",
//                 cusines: ["Burger", "American"],
//                 rating: "4.2"

//             },
//             {
//                 name: "KFC",
//                 image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/28fb13049b4e55297bb3f703cde63c35",
//                 cusines: ["Burger", "American"],
//                 rating: "4.2"
//             }
//         ]
//     }
//     }
// ]

// const burgerKing = {
//     name: "BurgerKing",
//     image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/28fb13049b4e55297bb3f703cde63c35",
//     cusines: ["Burger", "American"],
//     rating: "4.2"
// }


const RestrauntCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {

    // const { name, cuisines, cloudinaryImageId, avgRating } = restaurant.data;
    return (
        <div className='card'>
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <p>{cuisines.join(" , ")}</p>
            <h4>{avgRating}stars</h4>


        </div>
    )
}

export default RestrauntCard
