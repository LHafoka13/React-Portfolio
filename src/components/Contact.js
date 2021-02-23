import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent, Button} from 'react-mdl';

class Contact extends Component {
    render() {
    return(
        <div className="contactBody">
            <Grid className="contactGrid">
                <Cell col={6}>
                    <h2>Lily'okalani Hafoka</h2>
                    <img
                        src="/assets/images/Hafoka_Lily2.jpg"
                        alt="me"
                        style={{height: '250px'}}
                    />
                    <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}> I graduated from Metropolitan State University of Denver in 2017 with a B.A in Psychology and a double minor in Criminal Justice Criminology and Africana Studies. 
                     As a Training Specialist with the Colorado Department of Revenue,  I manipulate web pages using Dev Tools a lot to grab screenshots I need to build training materials. This motivated me to learn more about the code I was altering, and I enrolled in a Coding Bootcamp for Full-Stack Web Development at the University of Denver. I will graduate the program March 2021. </p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr />
                    <div className="contactList">
                      <List>
                        <ListItem>
                          <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                              <i class="fas fa-phone-square"></i>  (720)-629-3364 
                          </ListItemContent>
                        </ListItem>
                        <ListItem>
                          <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                              <i class="fas fa-envelope-square"></i>  lilyhafoka.du@gmail.com
                          </ListItemContent>
                        </ListItem>
                    </List>
                    <hr />
                    <br></br><br></br><br></br>
                    <a href="/assets/docs/HafokaL_Resume2020.pdf" target="_blank">View Resume</a>
                    </div>
                    
                </Cell>
            </Grid>
        </div>
    )
  }
}

export default Contact;