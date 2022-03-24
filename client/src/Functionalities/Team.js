import React, {useState, useEffect} from 'react'
import {Dropdown, Input} from 'semantic-ui-react'
import * as MLBIcons from 'react-mlb-logos'

const teamOptions = [
    {key: 'ARI', value: 'ARI', flag: <MLBIcons.ARI size={20}/>, text: 'Diamondbacks'},
    {key: 'ATL', value: 'ATL', flag: <MLBIcons.ATL size={20}/>, text: 'Braves'},
    {key: 'BAL', value: 'BAL', flag: <MLBIcons.BAL size={20}/>, text: 'Orioles'},
    {key: 'BOS', value: 'BOS', flag: <MLBIcons.BOS size={20}/>, text: 'Red Sox'},
    {key: 'CHC', value: 'CHC', flag: <MLBIcons.CHC size={20}/>, text: 'Cubs'},
    {key: 'CHW', value: 'CHW', flag: <MLBIcons.CHW size={20}/>, text: 'White Sox'},
    {key: 'CIN', value: 'CIN', flag: <MLBIcons.CIN size={20}/>, text: 'Reds'},
    {key: 'CLE', value: 'CLE', flag: <MLBIcons.CLE size={20}/>, text: 'Guardians'},
    {key: 'COL', value: 'COL', flag: <MLBIcons.COL size={20}/>, text: 'Rockies'},
    {key: 'DET', value: 'DET', flag: <MLBIcons.DET size={20}/>, text: 'Tigers'},
    {key: 'HOU', value: 'HOU', flag: <MLBIcons.HOU size={20}/>, text: 'Astros'},
    {key: 'KAN', value: 'KAN', flag: <MLBIcons.KAN size={20}/>, text: 'Royals'},
    {key: 'LAA', value: 'LAA', flag: <MLBIcons.LAA size={20}/>, text: 'Angels'},
    {key: 'LAD', value: 'LAD', flag: <MLBIcons.LAD size={20}/>, text: 'Dodgers'},
    {key: 'MIA', value: 'MIA', flag: <MLBIcons.MIA size={20}/>, text: 'Marlins'},
    {key: 'MIL', value: 'MIL', flag: <MLBIcons.MIL size={20}/>, text: 'Brewers'},
    {key: 'MIN', value: 'MIN', flag: <MLBIcons.MIN size={20}/>, text: 'Twins'},
    {key: 'NYM', value: 'NYM', flag: <MLBIcons.NYM size={20}/>, text: 'Mets'},
    {key: 'NYY', value: 'NYY', flag: <MLBIcons.NYY size={20}/>, text: 'Yankees'},
    {key: 'OAK', value: 'OAK', flag: <MLBIcons.OAK size={20}/>, text: 'Athletics'},
    {key: 'PHI', value: 'PHI', flag: <MLBIcons.PHI size={20}/>, text: 'Phillies'},
    {key: 'PIT', value: 'PIT', flag: <MLBIcons.PIT size={20}/>, text: 'Pirates'},
    {key: 'SD', value: 'SD', flag: <MLBIcons.SD size={20}/>, text: 'Padres'},
    {key: 'SF', value: 'SF', flag: <MLBIcons.SF size={20}/>, text: 'Giants'},
    {key: 'SEA', value: 'SEA', flag: <MLBIcons.SEA size={20}/>, text: 'Mariners'},
    {key: 'STL', value: 'STL', flag: <MLBIcons.STL size={20}/>, text: 'Cardinals'},
    {key: 'TB', value: 'TB', flag: <MLBIcons.TB size={20}/>, text: 'Rays'},
    {key: 'TEX', value: 'TEX', flag: <MLBIcons.TEX size={20}/>, text: 'Rangers'},
    {key: 'TOR', value: 'TOR', flag: <MLBIcons.TOR size={20}/>, text: 'Blue Jays'},
    {key: 'WAS', value: 'WAS', flag: <MLBIcons.WAS size={20}/>, text: 'Nationals'},
]

function Team(props) {
    return ( 
        <Dropdown onChange={(e, opt) => {
            props.setTeam(opt.value)
        }} selection fluid options={teamOptions}>{props.team}</Dropdown>
    )
}
export default Team