import './App.css';
import {Layout, Header, Navigation, Content, Drawer, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import Main from "./components/main"


function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title="My Portfolio" scroll className="headerColor">
          <Navigation>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </Navigation>
        </Header>
        <Drawer title="Menu">
          <Navigation>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
        <Footer>
          <FooterSection>
            <a>© Lily'okalani Hafoka</a>
          </FooterSection>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
