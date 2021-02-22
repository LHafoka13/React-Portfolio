import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';



class Home extends Component {
    render() {
    return(
        <div style={{width: '100%', margin: 'auto'}}>
          <Grid className="landingGrid">
            <Cell col={12}>
                <img src="https://sdk.bitmoji.com/render/panel/76c3b171-f0cf-4dd6-b91f-91bd86693f61-cfff7d92-b498-4b9b-a1b3-43edc32d6f2f-v1.png?transparent=1&palette=1" alt="avatar" className="avatarImage"/>
                <div className="bannerText">
                  <h1>Full-Stack Web Developer</h1>
                  <hr />
                  <p>HTML/CSS | JavaScript | React | NodeJS | Express | MySQL | MongoDB</p>
                  <div className="socialLinks">
                     {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/lilyokalani-hafoka/" rel="noopener noreferrer"target="_blank">
                      <i class="fab fa-linkedin"></i>
                    </a>
                     {/* GitHub */}
                    <a href="https://github.com/LHafoka13" rel="noopener noreferrer"target="_blank">
                      <i class="fab fa-github-square"></i>
                    </a>
                     {/* Instagram */}
                    <a href="https://www.instagram.com/ic__ace/" rel="noopener noreferrer"target="_blank">
                      <i class="fab fa-instagram-square"></i>
                    </a>
                  </div>
                </div>
            </Cell>
          </Grid>
        </div>
    )
  }
}
export default Home;