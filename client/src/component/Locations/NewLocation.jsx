import { useState } from "react"

const NewLocation = () => {
    const [placeholder, setPlaceholder] = useState("whatever")
    const geofunc = () => {
        const success = (position) => {
            console.log(position)
        }
        const error = () => {
            console.log("denied")
        }
        navigator.geolocation.getCurrentPosition(success, error)
        setPlaceholder()
    }


    return (<div>
        <h1>New Locations</h1>
        <p>{placeholder}</p>
        <button onClick={
            geofunc
        }>Find</button>
    </div>)
}

export default NewLocation