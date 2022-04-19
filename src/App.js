import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Messages } from './pages/Messages';
import { Reports, ReportsOne, ReportsTwo, ReportsThree, Reports11, Reports12 } from './pages/Reports';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/messages' exact component={Messages} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/reports/reports1/rep11' exact component={Reports11} />
        <Route path='/reports/reports1/rep12' exact component={Reports12} />
        <Route path='/team' exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;
