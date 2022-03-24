import React, {useState, useEffect} from 'react'
import { Container, Button, Grid, Image, Header, Dropdown, Input, Label, Menu, Item, Loader } from 'semantic-ui-react';
import Flask_script from './Functionalities/Flask_script';
import {enGB} from 'date-fns/locale'
import {DatePicker} from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import Team from "./Functionalities/Team"
import Park from "./Functionalities/Park"
import Spray_Chart from "./Functionalities/Spray_Chart"

function App() {
  const [chart, setChart] = useState()
  const [date_start, setStartDate] = useState(new Date())
  const [date_end, setEndDate] = useState(new Date())
  const [firstName, setFirstName] = useState("Chris")
  const [lastName, setLastName] = useState("Taylor")
  const [park, setPark] = useState("Dodger Stadium")
  const [team, setTeam] = useState("LAD")
  const [annontate, setAnnotate] = useState("launch_angle")
  const [loading, setLoad] = useState(false)

  const getImg = async (url, player) => {
    const response = await fetch(
      url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(player)
    });
    const imageByte = await response.text();

    return imageByte
  };

  // useEffect(() => {

  //   getImg('http://127.0.0.1:5000/chart', {
  //     firstName: 'Randy',
  //     lastName : 'Arozarena',
  //     team : 'TB',
  //     start : '2021-04-01',
  //     end : '2021-10-03',
  //     park : 'Tropicana Field',
  //     annontate : 'launch_angle'
  //   }).then(val => setChart(val));
  // }, [])
    
  return (
    <div>
      <Container>
        <Header textAlign='center' style={{padding:'1em 0em 3em' }}><h1>MLB Slugger Spray Chart</h1></Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Spray_Chart chart={chart} loading={loading}/> 
            </Grid.Column>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={7}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Flask_script 
                      setChart={setChart} 
                      setLoad={setLoad}
                      loading={loading}
                      firstName={firstName} lastName={lastName}
                      park={park} team={team} 
                      start={"".concat(date_start.getFullYear(), "-", date_start.getMonth() + 1 , "-", date_start.getDate())} 
                      end={"".concat(date_end.getFullYear(), "-", date_end.getMonth() + 1 , "-", date_end.getDate())} 
                      annontate={annontate}
                    />
                  </Grid.Column>
                  <Grid.Column width={11}><Label>First Name</Label>
                    <p>
                      <Input focus placeholder= 'Player first name...' onChange={(e) => setFirstName(e.target.value)}/>
                    </p>
                    <Label>Last Name</Label>
                    <p>
                      <Input focus placeholder= 'Player Last name...' onChange={(e) => setLastName(e.target.value)}/>
                    </p>
                    <p>
                      <Label>Start Date</Label>
                      <DatePicker date={date_start} onDateChange={setStartDate} locale={enGB}>
                        {({ inputProps, focused }) => (
                          <input
                            className={'input' + (focused ? ' -focused' : '')}
                            {...inputProps}
                          />
                        )}
                      </DatePicker>
                    <br></br>
                    <Label>End Date</Label>
                    <DatePicker date={date_end} onDateChange={setEndDate} locale={enGB}>
                      {({ inputProps, focused }) => (
                        <input
                          className={'input' + (focused ? ' -focused' : '')}
                          {...inputProps}
                        />
                      )}
                    </DatePicker>
                    </p>
                    <br></br>
                    <Label>Park Overlay</Label>
                    <Park setPark={setPark}/>
                    <br></br>
                    <br></br>
                    <Label>Home Team</Label> 
                    <Team setTeam={setTeam}/>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Container>
    </div>
  )
}

export default App