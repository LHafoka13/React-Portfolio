import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./Home"
import Projects from "./Projects";
import Contact from "./Contact";
import { Footer } from 'react-mdl';


const Main = () => {
    return(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/contact" component={Contact}/>
    </Switch>
    
    )

}

export default Main;