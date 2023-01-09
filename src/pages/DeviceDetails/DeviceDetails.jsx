import "./DeviceDetails.scss"
import React from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../AppContext";

function DeviceDetails() {
    const {id} = useParams()
    const {allDevices} = React.useContext(Context)
    const device = allDevices.find(item => item.id === id)
    
    return(
        <div className="deviceDetailsWrapper">
            <div className="deviceDetails">
                <h1>{device.model}</h1>
                <div>
                    <img src={device.url} alt="" />
                    <p><span>Description:</span>{device.description}</p>
                </div>
                
            </div>
        </div>
    )
    
}

export default DeviceDetails