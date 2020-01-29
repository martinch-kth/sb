import React, { Component } from 'react';

import { Container,Header,Statistic,Grid, Placeholder, Menu, Segment,Form, Checkbox } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { ResponsiveTreeMapHtml } from '@nivo/treemap'


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

      this.state = {}
  }

  componentDidMount() {

  }


  render() {

      return (
          <Container>
          <Grid padded>

              <Grid.Row>
                  <Grid.Column width={13}>

                         <Header as='h1' icon='code' content='Dashboard' />

                  </Grid.Column>
              </Grid.Row>

            <Grid.Row>
              <Grid.Column width={13}>
                <Segment raised>SAAB - Treemap </Segment>
              </Grid.Column>
            </Grid.Row>

              <Grid.Row>
                  <Grid.Column width={13}>

                      <div className="chart">
                          <ResponsiveTreeMapHtml

                              //       root={{"name":"Mutation test","color":"hsl(187, 70%, 50%)","children":[{"name":"org/apache/commons/codec/digest","color":"hsl(87, 70%, 50%)","children":[{"name": "Tested","color":"hsl(99, 98%, 51%)","loc":106},{"name":"Partially tested","color": "hsl(53, 100%, 50%)","loc": 2},{"name": "Not covered","color": "hsl(348, 100%, 50%)","loc": 44}]},{"name":"org/apache/commons/codec/language","color":"hsl(87, 70%, 50%)","children":[{"name": "Tested","color":"hsl(99, 98%, 51%)","loc":100},{"name":"Partially tested","color": "hsl(53, 100%, 50%)","loc": 5},{"name": "Not covered","color": "hsl(348, 100%, 50%)","loc": 3}]},{"name":"org/apache/commons/codec/binary","color":"hsl(87, 70%, 50%)","children":[{"name": "Tested","color":"hsl(99, 98%, 51%)","loc":98},{"name":"Partially tested","color": "hsl(53, 100%, 50%)","loc": 4},{"name": "Not covered","color": "hsl(348, 100%, 50%)","loc": 1}]},{"name":"org/apache/commons/codec/net","color":"hsl(87, 70%, 50%)","children":[{"name": "Tested","color":"hsl(99, 98%, 51%)","loc":57},{"name":"Partially tested","color": "hsl(53, 100%, 50%)","loc": 4},{"name": "Not covered","color": "hsl(348, 100%, 50%)","loc": 0}]},{"name":"org/apache/commons/codec/language/bm","color":"hsl(87, 70%, 50%)","children":[{"name": "Tested","color":"hsl(99, 98%, 51%)","loc":51},{"name":"Partially tested","color": "hsl(53, 100%, 50%)","loc": 2},{"name": "Not covered","color": "hsl(348, 100%, 50%)","loc": 5}]},{"name":"org/apache/commons/codec/cli","color":"hsl(87, 70%, 50%)","children":[{"name": "Tested","color":"hsl(99, 98%, 51%)","loc":0},{"name":"Partially tested","color": "hsl(53, 100%, 50%)","loc": 0},{"name": "Not covered","color": "hsl(348, 100%, 50%)","loc": 8}]},{"name":"org/apache/commons/codec","color":"hsl(87, 70%, 50%)","children":[{"name": "Tested","color":"hsl(99, 98%, 51%)","loc":3},{"name":"Partially tested","color": "hsl(53, 100%, 50%)","loc": 0},{"name": "Not covered","color": "hsl(348, 100%, 50%)","loc": 0}]}]}}




                              // vid långa message för errors.. så bryt av raden med \n  ...gah..

                              root={{"name":"Mutation test","color":"hsl(17, 20%, 20%)","children":[

                                      {
                                          "name": "moduleName:ÖÖÖÖÖÖÖÖ1 + onHOST : 'hostname1' ...???",
                                          "color": "hsl(87, 70%, 50%)",
                                          "children": [
                                              {
                                                  "name": "message: WYYYYYYYYYYY* 12*45*02*599 |-YYYYY YY YY.YYY.YYYYYYY.YYYY.YYYYYYYYYYYY[YYYYYYY] \n- YYYYYY YY YYYYYY YYYYYY YYYYYYYYYYY YYY [/YYY/YYY/YYYY/YYYYYY/ÖÖÖÖÖÖÖÖ1/ÖÖÖÖÖÖÖÖ1.YYY]",
                                                  "color": "hsl(99, 98%, 51%)",
                                                  "loc": 1
                                              },
                                              {
                                                  "name": "\"message\":\"WYYYYYYYYYYY* 12*45*02*599 |-YYYYY YY YY.YYY.YYYYYYY.YYYY.YYYYYYYYYYYY[YYYYYYY] \n- YYYYYYYY(/YYY/YYY/YYYY/YYYYYY/ÖÖÖÖÖÖÖÖ1/ÖÖÖÖÖÖÖÖ1.YYY*YYYY) YYYY YYYYYY. YYYY.YY.YYYYYYYYYYYYYxYYYYYYY*\n /YYY/YYY/YYYY/YYYYYY/ÖÖÖÖÖÖÖÖ1/ÖÖÖÖÖÖÖÖ1.YYY (YY YYYY YYYY YY YYYYYYYYy)",
                                                  "color": "hsl(99, 98%, 51%)",
                                                  "loc": 1
                                              }
                                          ]
                                      },

                                      {
                                          "name": "moduleName:ÖÖÖÖÖÖÖÖ2 + onHOST : 'hostname2' ..???",
                                          "color": "hsl(47, 50%, 30%)",
                                          "children": [
                                              {
                                                  "name": "message: WYYYYYYYYYYY* 12*45*02*599 |-YYYYY YY YY.YYY.YYYYYYY.YYYY.YYYYYYYYYYYY[YYYYYYY] \n- YYYYYY YY YYYYYY YYYYYY YYYYYYYYYYY YYY [/YYY/YYY/YYYY/YYYYYY/ÖÖÖÖÖÖÖÖ1/ÖÖÖÖÖÖÖÖ1.YYY]",
                                                  "color": "hsl(99, 58%, 21%)",
                                                  "loc": 1
                                              },
                                              {
                                                  "name": "\"message\":\"WYYYYYYYYYYY* 12*45*02*599 |-YYYYY YY YY.YYY.YYYYYYY.YYYY.YYYYYYYYYYYY[YYYYYYY] \n- YYYYYYYY(/YYY/YYY/YYYY/YYYYYY/ÖÖÖÖÖÖÖÖ1/ÖÖÖÖÖÖÖÖ1.YYY*YYYY) YYYY YYYYYY. YYYY.YY.YYYYYYYYYYYYYxYYYYYYY*\n /YYY/YYY/YYYY/YYYYYY/ÖÖÖÖÖÖÖÖ1/ÖÖÖÖÖÖÖÖ1.YYY (YY YYYY YYYY YY YYYYYYYYy)",
                                                  "color": "hsl(99, 58%, 21%)",
                                                  "loc": 1
                                              }
                                          ]
                                      }






                                  ]}}


                              // root={JSON.parse(this.state.treemap_version)}

                              identity="name"
                              value="loc"
                              innerPadding={10}
                              outerPadding={10}

                              label="loc"
                              labelFormat="0"

                              labelSkipSize={2}
                              labelTextColor="black"
                              colors={{ scheme: 'paired' }}
                              colorBy="name"
                              borderColor="inherit:darker(0.3)"
                              animate={true}
                              motionStiffness={90}
                              motionDamping={11}
                          />
                      </div>
                  </Grid.Column>
              </Grid.Row>


          </Grid>
          </Container>
      )
    }

} export default App;




