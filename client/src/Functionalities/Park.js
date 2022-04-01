import React, {useState, useEffect} from 'react'
import Creatable from 'react-select/creatable';

const parkOptions = [
    { label: 'Angel Stadium of Anaheim', value: 'Angel Stadium of Anaheim' },
    { label: 'Busch Stadium', value: 'Busch Stadium' },
    { label: 'Chase Field', value: 'Chase Field' },
    { label: 'Citi Field', value: 'Citi Field' },
    { label: 'Citizens Bank Park', value: 'Citizens Bank Park' },
    { label: 'Comerica Park', value: 'Comerica Park' },
    { label: 'Coors Field', value: 'Coors Field' },
    { label: 'Dodger Stadium', value: 'Dodger Stadium' },
    { label: 'Fenway Park', value: 'Fenway Park' },
    { label: 'Great American Ballpark', value: 'Great American Ballpark' },
    { label: 'Guaranteed Rate Field', value: 'Guaranteed Rate Field' },
    { label: 'Kauffman Stadium', value: 'Kauffman Stadium' },
    { label: 'Marlins Park', value: 'Marlins Park' },
    { label: 'Miller Park', value: 'Miller Park' },
    { label: 'Minute Maid Park', value: 'Minute Maid Park' },
    { label: 'Nationals Park', value: 'Nationals Park' },
    { label: 'Oakland-Alameda County Coliseum', value: 'Oakland-Alameda County Coliseum' },
    { label: 'Oracle Park', value: 'Oracle Park' },
    { label: 'Oriole Park at Camden Yards', value: 'Oriole Park at Camden Yards' },
    { label: 'PETCO Park', value: 'PETCO Park' },
    { label: 'PNC Park', value: 'PNC Park' },
    { label: 'Progressive Field', value: 'Progressive Field' },
    { label: 'Rangers Ballpark in Arlington', value: 'Rangers Ballpark in Arlington' },
    { label: 'Rogers Centre', value: 'Rogers Centre' },
    { label: 'T-Mobile Park',value: 'T-Mobile Park' },
    { label: 'Target Field', value: 'Target Field' },
    { label: 'Tropicana Field', value: 'Tropicana Field' },
    { label: 'Truist Park', value: 'Truist Park' },
    { label: 'Wrigley Field', value: 'Wrigley Field' },
    { label: 'Yankee Stadium', value: 'Yankee Stadium' },
];


function Park(props) {
    return (
        <Creatable
            options={parkOptions}
            onChange={(e) => {
                props.setPark(e.label)
            }}
        />
    )
}

export default Park