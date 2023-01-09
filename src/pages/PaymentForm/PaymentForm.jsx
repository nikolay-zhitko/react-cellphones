import "./PaymentForm.scss"
import React from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../AppContext";
import swal from 'sweetalert';

function PaymentForm() {

    const{emptyCart} = React.useContext(Context)
    const history = useNavigate()

    function placeOrder(e){
        e.preventDefault()
        emptyCart()
        swal("You're all set!", "Your purchase was successful!", "success")
        setTimeout(() => {history(-1)}, 500)
    }

    return(
        <div className="form-page">
                <form onSubmit={(e) => placeOrder(e)} className="form-container">
                    <div className="fields">
                        <div className="adress">
                            <div>
                                <p>Full Name:</p>
                                <input type="text" placeholder="Reo Ray" 
                                required autoComplete="name"/>
                            </div>

                            <div>
                                <p>Email:</p>
                                <input type="email" placeholder="reoray@gmail.com" 
                                required autoComplete="email"/>
                            </div>

                            <div>
                                <p>Adress:</p>
                                <input type="text" placeholder="1234 NW Bobcat Lane, St. Robert" 
                                required autoComplete="street-address"/>
                            </div>

                            <div>
                                <p>Zip Code:</p>
                                <input type="text" placeholder="123006" 
                                required autoComplete="postal-code"/>
                            </div>
                        </div>

                        <div className="payment">
                            <div>
                                <p>Card Number:</p>
                                <input type="number" placeholder="1111222233334444" 
                                required autoComplete="cc-number" min="1000000000000000" max="9999999999999999" /> 
                            </div>

                            <div>
                                <p>Expiration Month:</p>
                                <input type="number" placeholder="10" 
                                required min="1" max="12" />
                            </div>

                            <div>
                                <p>Expiration Year:</p>
                                <input type="number" placeholder="2025" 
                                required min="2023" max="2040"/>
                            </div>

                            <div>
                                <p>CVV:</p>
                                <input type="number" placeholder="999" 
                                required min="0" max="999"/>
                            </div>

                        </div>
                    </div>
                    
                    <button 
                        type="submit"
                    >
                        Submit
                    </button> 
            </form>
        </div>
    )
}

export default PaymentForm