import './App.css';
import {Layout, Header, Navigation, Content, Drawer} from 'react-mdl';
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
        <Drawer title="Title">
            <Navigation>
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
            </Navigation>
        </Drawer>
        <Content>
            <Main />
        </Content>
    </Layout>
</div>

  );
}

export default App;
