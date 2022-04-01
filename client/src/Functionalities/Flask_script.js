import React, {useState, useEffect} from 'react'
import {Button} from 'semantic-ui-react'

function Flask_script(props) {
  const playerRequest = {
    firstName: props.firstName,
    lastName : props.lastName,
    team : props.team,
    start : props.start,
    end : props.end,
    park : props.park,
    annontate : props.annontate
  }

  const getImg = async (url, player) => {
    props.setLoad(true)
    const response = await fetch(
      url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(player)
    });
    const imageByte = await response.text();
    props.setChart(imageByte)
    props.setLoad(false)
  };

  return <Button onClick={() => getImg(
          'https://baseballspraychart.herokuapp.com/chart', playerRequest)} 
          primary loading={props.loading}
          >Generate Chart!
        </Button>
}

export default Flask_script