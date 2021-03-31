import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Social from './components/pages/Social/Social';
import Sports from './components/pages/Sports/Sports';
import Medical from './components/pages/Medical/Medical';
import Fitness from './components/pages/Fitness/Fitness';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar  />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/social" component={Social} />
          <Route path="/sports" component={Sports} />
          <Route path="/medical" component={Medical} />
          <Route path="/fitness" component={Fitness} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
