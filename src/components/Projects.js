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
                     <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                     <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                     </CardText>
                     <CardActions border>
                        <Button colored>Get Started</Button>
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                     </CardMenu>
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