import React from "react";

const Context = React.createContext()

function ContextProvider({children}) {
    const[allDevices, setAllDevices] = React.useState(JSON.parse(localStorage.getItem("devices")) || [])
    const[showFavorite, setShowFavorite] = React.useState(false)

    const url = "https://raw.githubusercontent.com/nikolay-zhitko/images-pet/main/data.json"
    React.useEffect(() => {
        if(localStorage.getItem("devices") === null) {
            fetch(url)
                .then(res => res.json())
                .then(data => setAllDevices(data))
            }
    }, [])

    React.useEffect(() => {
        localStorage.setItem("devices", JSON.stringify(allDevices))
    }, [allDevices])

    function toggleFavorite(id){
        const updatedArr = allDevices.map(device => {
            if(device.id === id) {
                return{...device, isFavorite: !device.isFavorite}
            }
            return device
        })
        setAllDevices(updatedArr)
    }

    function toggleAdded(id){
        const updatedArr = allDevices.map(device => {
            if(device.id === id) {
                if(device.amountInCart > 0){
                    return {...device, amountInCart: 0}
                }
                else if(device.amountInCart === 0) {
                    return {...device, amountInCart: 1}
                }
            }
            return device
        })
        setAllDevices(updatedArr)
    }

    function emptyCart() {
        const updatedArr = allDevices.map(device => {
            if(device.amountInCart > 0) {
                return {...device, amountInCart: 0}
            }
            return device
        })
        setAllDevices(updatedArr)
    }

    function increaseCartQuantity(id) {
        const updatedArr = allDevices.map(device => {
            if(device.id === id && device.amountInCart < 20) {
                return {...device, amountInCart: device.amountInCart + 1}
            }
            return device
        })
        setAllDevices(updatedArr)
    }

    function decreaseCartQuantity(id) {
        const updatedArr = allDevices.map(device => {
            if(device.id === id && device.amountInCart > 1) {
                return {...device, amountInCart: device.amountInCart - 1}
            }
            return device
        })
        setAllDevices(updatedArr)
    }

    function removeCartItem(id){
        const updatedArr = allDevices.map(device => {
            if(device.id === id) {
                return {...device, amountInCart: 0}
            }
            return device
        })
        setAllDevices(updatedArr)
    }

    function totalPrice() {
        let totalPrice = 0
        allDevices.forEach(device => {
            if(device.amountInCart > 0){
                const addToPrice = device.amountInCart * +device.price
                totalPrice = totalPrice + addToPrice
            }
        })
        return totalPrice
    }

    function changeShowFavorite() {
        setShowFavorite(prevState => !prevState)
    }
    
    return(
        <Context.Provider value={{
            allDevices,
            toggleFavorite,
            toggleAdded,
            emptyCart,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeCartItem,
            totalPrice,
            showFavorite,
            changeShowFavorite,
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}