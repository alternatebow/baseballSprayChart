import React, {useState, useEffect} from 'react'
import {Dropdown, Input} from 'semantic-ui-react'

const catagories = [
    {key: "launch_angle", value: "launch_angle", text: "Launch Angle"},
    {key: "launch_speed", value: "launch_speed", text: "Exit Speed"},
    {key: "hit_distance_sc", value: "hit_distance_sc", text: "Hit Distance"},
    {key: "woba_value", value: "woba_value", text: "WOBA"},
    {key: "launch_speed", value: "launch_angle", text: "Launch Angle"},
    {key: "delta_home_win_exp", value: "delta_home_win_exp", text: "Win change probability"},
    {key: "iso_value", value: "iso_value", text: "Iso"},
    {key: "babip_value", value: "babip_value", text: "BABIP"}
]

function Annontate(props) {
    return (
        <Dropdown onChange={(e, opt) => {
            props.setAnnotate(opt.value)
        }} selection fluid options={catagories}>{props.Annontate}</Dropdown>
    )
}

export default Annontate