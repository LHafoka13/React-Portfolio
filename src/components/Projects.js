import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';


class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

   toggleCategories() {
       if (this.state.activeTab === 0) {
           return(
               <div className="projectGrid">
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
                    <Card id="test" shadow={0} style={{width: '512px', margin: 'auto'}}>
                     <CardTitle style={{color: 'black', height: '176px', background: 'url(https://user-images.githubusercontent.com/68487859/98502455-49074880-220f-11eb-8d44-4c8b3223f717.png) center / cover'}}>Weather Dashboard</CardTitle>
                     <CardText>
                      This is a weather information app that allows you to search any US city, and it will return the current weather including icons, temperature, humidity, and UV index. It also gives you a five day forecast and stores your recent searches. The recent searches can be clicked to display the weather for that city again. 
                     </CardText>
                     <CardActions border>
                        <Button colored href="https://github.com/LHafoka13/Weather-Dashboard" target="_blank">GitHub Repo</Button>
                        <Button colored href="https://lhafoka13.github.io/Weather-Dashboard/" target="_blank">App Demo</Button>
                     </CardActions>
                    </Card>
               </div>
           )
       } else if (this.state.activeTab === 1) {
           return(
               <div className="projectGrid">
                    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                     <CardTitle style={{color: 'black', height: '176px', background: 'url(https://user-images.githubusercontent.com/70773240/107090226-23adba80-67bd-11eb-8040-7d4e672c241e.png) center / cover'}}>Santa's Helper</CardTitle>
                     <CardText>
                      This is a holiday list organizer that allows you to create lists for people you need to buy items for, you can add items to the list, and delete items when you've purchased them. It's integrated with the Etsy API to allow you to search for gift.
                     </CardText>
                     <CardActions border>
                        <Button colored href="https://github.com/rgr5035/Project_2_Local_Edits" target="_blank">GitHub Repo</Button>
                        <Button colored href="https://limitless-springs-32990.herokuapp.com/" target="_blank">App Demo</Button>
                     </CardActions>
                    </Card>
               </div>
           )
       } else if (this.state.activeTab === 2) {
           return(
                <div className="projectGrid">
                    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                     <CardTitle style={{color: 'black', height: '176px', background: 'url(https://user-images.githubusercontent.com/68487859/107836010-c8e60700-6d58-11eb-96d7-3de46c35ff4d.png) center / cover'}}>Budget Tracker</CardTitle>
                     <CardText>
                      This is a budget tracking app that works online/offline. You can name your transaction, plus or minus funds, and it will update the transactions and graph accordingly.
                     </CardText>
                     <CardActions border>
                        <Button colored href="https://github.com/LHafoka13/Budget-Tracker" target="_blank">GitHub Repo</Button>
                        <Button colored href="https://hidden-chamber-52787.herokuapp.com/" target="_blank">App Demo</Button>
                     </CardActions>
                    </Card>
               </div>
           )
       }
   }
    render() {
    return(
        <div className="categoryTabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})}>
                <Tab>GitPages</Tab>
                <Tab>mySQL</Tab>
                <Tab>MongoDB</Tab>
            </Tabs>
           
              <Grid>
                  <Cell col={12}>
                      <div className="content">{this.toggleCategories()}</div>
                  </Cell>
              </Grid>
            
        </div>
    )
  }
}

export default Projects;