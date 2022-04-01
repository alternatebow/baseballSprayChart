import React from 'react'
import { Image, Loader } from 'semantic-ui-react'

function Spray_Chart({chart}, {loading}) {
    return (
        <Image src={`data:image/png;base64,${chart}`} 
        alt="Please enter a players name"/>
    )
}

export default Spray_Chart