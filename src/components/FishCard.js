import React from 'react'
import { formatPrice } from '../helpers'

const FishCard = ({keyName, fish, addToOrder})=> {
    // console.log(fish);
    // console.log(keyName);
    
    let available;
    fish.status === "available" ? available = "Add to Order" : available = "SOLD OUT!"
    

    return (
        <li className="menu-fish">
            <img src={fish.image} alt={fish.name}/>
            <h3 className="fish-name">
                {fish.name}
                <span className="price">{formatPrice(fish.price)}</span>
            </h3>
            <p>{fish.desc}</p>
            <button disabled={fish.status === "unavailable"} onClick={() => addToOrder(keyName)}>{available}</button>
        </li>
    )
}


export default FishCard