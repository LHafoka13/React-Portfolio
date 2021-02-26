import './App.css';
import {Layout, Header, Navigation, Content, Drawer, Footer, FooterSection} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from "./components/main"


function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title="My Portfolio" scroll className="headerColor">
          <Navigation>
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/projects">Projects</Link>
            </p>
            <p>
              <Link to="/contact">Contact</Link>
            </p>
          </Navigation>
        </Header>
        <Drawer title="Menu">
          <Navigation>
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/projects">Projects</Link>
            </p>
            <p>
              <Link to="/contact">Contact</Link>
            </p>
          </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
        <Footer>
          <FooterSection>
            <p>© Lily'okalani Hafoka</p>
          </FooterSection>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
