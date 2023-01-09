import "./Device.scss"

import React from "react";
import { Context } from "../../AppContext";
import { Link } from "react-router-dom"

function Device(device) {

    const {toggleFavorite, toggleAdded} = React.useContext(Context)

    function heartIcon() {
        if(device.isFavorite) {
            return (<img src="img/favorite.png" alt="" className="favorite-img"
            onClick={() => toggleFavorite(device.id)} />)
        }
        else {
            return (<img src="img/not-favorite.png" alt="" className="favorite-img"
            onClick={() => toggleFavorite(device.id)} />)
        }
    }

    function addedToCartIcon() {
        if(device.amountInCart > 0) {
            return(<img src="img/added.png" alt="" className="added-img"
            onClick={() => toggleAdded(device.id)} />)
        }
        else {
            return(<img src="img/not-added.png" alt="" className="added-img"
            onClick={() => toggleAdded(device.id)} />)
        }
    }


    return (
        <div className="device-item">
            <Link to={`/${device.id}`}>
                <img src={device.url} alt="" className="device-img" />
            </Link>  
            {heartIcon()}
            {addedToCartIcon()}

            <Link to={`/${device.id}`}>
                <p className="device-model">{device.model}</p>
            </Link>
            
            <p className="device-price"><span>Price:</span> {device.price}$</p>
        </div>
    )
}

export default Device