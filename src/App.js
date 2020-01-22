import React, { Component } from 'react';

import { Statistic,Grid, Placeholder, Menu, Segment,Form, Checkbox } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';
import './App.css';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

      return (

          <Grid>


            <Grid.Row>
              <Grid.Column width={13}>
                <Segment raised>SAAB - Treemap </Segment>
              </Grid.Column>
            </Grid.Row>

          </Grid>
      )
    }

} export default App;




