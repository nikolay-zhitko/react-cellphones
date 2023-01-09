import React from "react"
import {Routes, Route} from "react-router-dom"
import "./App.scss"

import Cart from "./pages/Cart/Cart"
import Devices from "./pages/Devices/Devices"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import DeviceDetails from "./pages/DeviceDetails/DeviceDetails"
import PaymentForm from "./pages/PaymentForm/PaymentForm"

function App() {
    return(
        <div>
            <Header />
            <Routes>
                <Route exact path="/" element={<Devices />}/>
                <Route exact path="/cart" element={<Cart />} />
                <Route path="/:id" element={<DeviceDetails/>}/>
                <Route path="/cart/payment" element={<PaymentForm />}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default App

