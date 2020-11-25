import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import SingleUser from './components/users/SingleUser';
import GitHubProvider from './context/github/GitHubProvider';
import AlertProvider from './context/alert/AlertProvider';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const App = () => (
  <GitHubProvider>
    <Router>
      <div className="App">
        <Navbar icon="fab fa-github">GitHub Finder</Navbar>
        <div className="container">
          <AlertProvider>
            <Alert />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={SingleUser} />
              <Route component={NotFound} />
            </Switch>
          </AlertProvider>
        </div>
      </div>
    </Router>
  </GitHubProvider>
);

export default App;
