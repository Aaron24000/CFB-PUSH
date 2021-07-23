import Navigation from './components/navbar/Navigation';
import Slideshow from './components/carousel/Showcase';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeIcons from './components/home icon section/HomeIcons';
import HomeHeading from './components/homeheading/HomeHeading';
import Bottom from './components/footer/Bottom';
import Contact from './components/contact/Contact';
import Conferences from './components/pages/Conferences';
import Stadiums from './components/pages/Stadiums';
import TeamInfo from './components/pages/TeamInfo';

function App() {
  return (
    <Router>
      <div>
      <Navigation />
      <div>
      <Switch>
      <Route exact path="/">
        <Slideshow />
        <HomeIcons />
        <HomeHeading />
        <Contact />
        </Route>
        </Switch>
      </div>
      <Route path="/conferences">
        <Conferences />
      </Route>
      <Route path="/stadiums">
        <Stadiums />
      </Route>
      <Route path="/team-info">
        <TeamInfo />
      </Route>
      <Bottom />
    </div>
    </Router>
  );
}

export default App;
