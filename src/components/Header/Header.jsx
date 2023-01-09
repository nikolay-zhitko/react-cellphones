import "./Header.scss"

import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import {Context} from "../../AppContext"

function Header() {
    const {totalPrice, changeShowFavorite, showFavorite} = React.useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    
    function headerRightSection() {
        if(location.pathname === "/"){
            return(
                <div className="headerRightSection">
                    <img src={showFavorite ? "img/favorite-inline.svg" : "img/favorite-outline.svg"} alt="" className="favoriteIcon"
                    onClick={() => changeShowFavorite()} />
                    <Link to="/cart">
                        <div>
                            <img src="img/cart.svg" alt="" className="cartIcon"/>
                            <span>{totalPrice()}$</span>
                        </div>
                    </Link>
                </div>
            )
        }
        else {
            return(
                <div className="headerRightSection"> 
                    <img src="img/back.png" alt="" className="backButton"
                    onClick={() => history(-1)} />
                </div>
            )
        }
    }
    
    return (
        <header>
            <Link to="/">
                <div className="headerLeftSection">
                    <img src="img/logo.png" alt=""/>
                    <div>
                        <h3>React Cellphones</h3>
                        <p>Trusted retailer</p>
                    </div>
                </div>
            </Link>            
            
            {headerRightSection()}
            
        </header>
    )
}

export default Header