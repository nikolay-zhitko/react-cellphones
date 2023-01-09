import "./Devices.scss"
import React from "react"
import {Context} from "../../AppContext"
import Device from "../../components/Device/Device"

function Devices() {

    const {allDevices, showFavorite} = React.useContext(Context)

    const[value, setValue] = React.useState("")
        
    const filteredDevices = allDevices.filter(device => {
        return device.model.toLowerCase().includes(value.toLowerCase())
    }) 
    
    const filteredElements = filteredDevices.map(device =>
        <Device 
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

    const favoriteDevices = filteredDevices.filter(device => device.isFavorite)
    
    const favoriteElements = favoriteDevices.map(device =>
        <Device 
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

    function renderDevices(){
        if(showFavorite === true){
            if(favoriteDevices.length === 0) return (
                    <div  className="emptyDevicesPage">
                        <h1>There are no favorite devices.</h1>
                    </div>
                )
            else return (
                <div className="devices">
                    {favoriteElements}
                </div>
            )
        }
        else {
            if(filteredDevices.length === 0) return (
                <div  className="emptyDevicesPage">
                    <h1>Such devices are not found.</h1>
                </div>
            )
            else return (
                <div className="devices">
                    {filteredElements}
                </div>
            )
        }
    }

    return(
        
        <div className="devicesWrapper">
            <div className="devices-title-search">
                <h1>All Devices:</h1>
                <div className="search-block">
                    <img src="img/search.svg" alt="search" />
                    <input placeholder="Search... " 
                    onChange={(event) => setValue(event.target.value.trim())}
                    />
                </div>
            </div>

            {renderDevices()}

        </div>
    )
}

export default Devices