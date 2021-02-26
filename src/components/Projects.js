import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import ProjectCard from './Card';


class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

   toggleCategories() {
       if (this.state.activeTab === 0) {
           return (
             <div className="projectGrid">
               <ProjectCard
                 title="Get In My Plants"
                 image="https://lhafoka13.github.io/Responsive-Portfolio/Main/assets/imgs/plants.png"
                 color="black"
                 description="This is a plant information app that allows you to search any plant, and it will return its scientific name, common name, and a photo. It uses the Spotify API to return a plant-friendly song."
                 repo="https://github.com/LHafoka13/Project-1"
                 demo="https://lhafoka13.github.io/Project-1/"
               />
               <ProjectCard
                 title="Weather Dashboard"
                 image="https://user-images.githubusercontent.com/68487859/98502455-49074880-220f-11eb-8d44-4c8b3223f717.png"
                 color="black"
                 description=" This is a weather information app that allows you to search
                   any US city, and it will return the current weather including
                   icons, temperature, humidity, and UV index. It also gives you
                   a five day forecast and stores your recent searches. The
                   recent searches can be clicked to display the weather for
                   that city again."
                 repo="https://github.com/LHafoka13/Weather-Dashboard"
                 demo="https://lhafoka13.github.io/Weather-Dashboard/"
               />
               <ProjectCard
                 title="Password Generator"
                 image="https://user-images.githubusercontent.com/68487859/96199627-2ede9100-0f15-11eb-9aba-015c8838725a.png"
                 color="black"
                 description="This is a password generator that takes in user preferences
                   such as password length and desired characters and returns a
                   randomly generated password that meets the desired
                   components."
                 repo="https://github.com/LHafoka13/Password-Generator"
                 demo="https://lhafoka13.github.io/Password-Generator/"
               />
             </div>
           );
       } else if (this.state.activeTab === 1) {
           return (
             <div className="projectGrid">
               <ProjectCard
                 title=" Santa's Helper"
                 image="https://user-images.githubusercontent.com/70773240/107090226-23adba80-67bd-11eb-8040-7d4e672c241e.png"
                 color="black"
                 description="  This is a holiday list organizer that allows you to create
                   lists for people you need to buy items for, you can add items
                   to the list, and delete items when you've purchased them.
                   It's integrated with the Etsy API to allow you to search for
                   gift."
                 repo="https://github.com/rgr5035/Project_2_Local_Edits"
                 demo="https://limitless-springs-32990.herokuapp.com/"
               />
               
             </div>
           );
       } else if (this.state.activeTab === 2) {
           return (
             <div className="projectGrid">
               <ProjectCard
                 title="Budget Tracker"
                 image="https://user-images.githubusercontent.com/68487859/107836010-c8e60700-6d58-11eb-96d7-3de46c35ff4d.png"
                 color="black"
                 description="This is a budget tracking app that works online/offline. You
                   can name your transaction, plus or minus funds, and it will
                   update the transactions and graph accordingly."
                 repo="https://github.com/LHafoka13/Budget-Tracker"
                 demo="https://hidden-chamber-52787.herokuapp.com/"
               />
             </div>
           );
       }

       else if (this.state.activeTab === 3) {
           return (
             <div className="projectGrid">
               <ProjectCard
                 title="React Counter"
                 image="https://user-images.githubusercontent.com/68487859/108803387-c99c4b80-7557-11eb-8f73-0b73535734e5.png"
                 color="black"
                 description="This is a simple counter app built with React. It allows you
                   to separately increment numeric values for a specific
                   counter. You can also delete counters and reset the counters
                   which change the counters back to their initial state. The
                   Navigation bar at the top also keeps track of the number of
                   counters with values above 0."
                 repo="https://github.com/LHafoka13/React-Counter"
                 demo="hhttps://lhafoka13.github.io/React-Counter/"
               />
             </div>
           );
       }
   }
    render() {
    return(
        <div className="categoryTabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})}>
                <Tab>GitPages</Tab>
                <Tab>mySQL</Tab>
                <Tab>MongoDB</Tab>
                <Tab>React</Tab>
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