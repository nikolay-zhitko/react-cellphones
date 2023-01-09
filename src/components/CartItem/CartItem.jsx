import "./CartItem.scss"

import React from "react";
import { Context } from "../../AppContext";
import { Link } from "react-router-dom"

function CartItem(device) {
    
    const { increaseCartQuantity, decreaseCartQuantity, removeCartItem} = React.useContext(Context)

    const totalDevicePrice = +device.price * device.amountInCart

    return(
        <div className="cartItem">
            <Link to={`/${device.id}`}>
                <img src={device.url} alt="" className="cartItem-img" />
            </Link>

            <Link to={`/${device.id}`}>
                <p className="cartItem-model">{device.model}</p>
            </Link>

            <div className="counter">
                <button onClick={() => decreaseCartQuantity(device.id)}>-</button>
                <p className="amount">{device.amountInCart}</p>
                <button onClick={() => increaseCartQuantity(device.id)}>+</button>
            </div>
            <p className="cartItem-price">{totalDevicePrice}$</p>
            <img src="img/removeIcon.svg" alt="" className="cartItem-remove"
            onClick={() => removeCartItem(device.id)} />
        </div>
    )    
}

export default CartItem