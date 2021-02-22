import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton} from 'react-mdl';


class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

   toggleCategories() {
       if (this.state.activeTab === 0) {
           return(
               <div>
                   <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                     <CardTitle style={{color: 'white', height: '176px', background: `url('/assets/images/plantApp.png') center / cover`}}>Get In My Plants</CardTitle>
                     <CardText>
                      This is a plant information app that allows you to search any plant, and it will return its scientific name, common name, and a photo. It uses the Spotify API to return a plant-friendly song.
                     </CardText>
                     <CardActions border>
                        <Button colored href="https://github.com/LHafoka13/Project-1" target="_blank">GitHub Repo</Button>
                        <Button colored href="https://lhafoka13.github.io/Project-1/" target="_blank">App Demo</Button>
                     </CardActions>
                    </Card>
               </div>
           )
       } else if (this.state.activeTab === 1) {
           return(
               <div>
                   <h1>MongoDB Projects</h1>
               </div>
           )
       } else if (this.state.activeTab === 2) {
           return(
               <div>
                   <h1>React Projects</h1>
               </div>
           )
       }
   }
    render() {
    return(
        <div className="categoryTabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})}>
                <Tab>GitPages</Tab>
                <Tab>MongoDB</Tab>
                <Tab>React</Tab>
            </Tabs>
            <section className="projectGrid">
              <Grid>
                  <Cell col={12}>
                      <div className="content">{this.toggleCategories()}</div>
                  </Cell>
              </Grid>
            </section>
        </div>
    )
  }
}

export default Projects;