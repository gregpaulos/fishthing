import React from 'react'
import { formatPrice } from '../helpers'

const Order = ({ order, fishes, removeFromOrder }) => {
    // console.log(order);
    // console.log('new order this fish');
    Object.keys(order).forEach(fish => {
        console.log(fish);
        })
    
    function total () {
        if (Object.keys(order).length !== 0) {
            var sum = Object.keys(order).filter(fish => fishes[fish]).reduce((accumulator, fishname) => {
                return accumulator+= fishes[fishname].price * order[fishname]
            }, 0)
            return (
                <div>
                <h2>TOTAL YOU NEED TO PAY, SON</h2>
                <h1>{formatPrice(sum)}</h1>
                </div>
            )    
        }
    }
    
    function listOrder () {
        return Object.keys(order).filter(fish => fishes[fish]).map(fish =>
            <li key={fish} onClick={()=> removeFromOrder(fish)}>
                {fishes[fish].name},
                {order[fish]} times 
                {formatPrice(fishes[fish].price)} equals
                {formatPrice(fishes[fish].price * order[fish])}
            </li>
        )
    }




    return (
        <div>
            <h1>Order</h1>
            <ul className="order">
                {listOrder()}
                <li>{total()}</li>
            </ul>
            


        </div>
    )
}


export default Order;
