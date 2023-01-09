import React from "react"
import {Context} from "../../AppContext"
import CartItem from "../../components/CartItem/CartItem"
import { Link } from "react-router-dom"
import "./Cart.scss"

function Cart() {
    const {allDevices, totalPrice} = React.useContext(Context)

    const cartDevices = allDevices.filter(device => device.amountInCart > 0)

    const cartElements = cartDevices.map(device => 
        <CartItem 
            key={device.id} 
            id={device.id}
            url={device.url} 
            model={device.model}
            description={device.description}
            price={device.price}
            isFavorite={device.isFavorite}
            amountInCart={device.amountInCart}
        />
    )

    function renderCart(){
        if (cartDevices.length === 0) return (
            <div className="cartWrapper">
                <div className="emptyCartPage">
                    <h1>Cart is empty!</h1>
                </div>
            </div>
        )
        else return(
            <div className="cartWrapper">
                <div className="cartItems">
                    {cartElements}
                </div>
                {totalPrice() > 0 && 
                <div  className="orderInfo">
                    <h1>Total price: <span>{totalPrice()}</span>$</h1>
                    <Link to="/cart/payment">
                        <button>Place Order</button>
                    </Link>
                </div>
            }
            </div>
        )

    }

    return(
        renderCart()        
    )
}

export default Cart