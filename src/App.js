import logo from './logo.svg';
//import './App.css';

import { Link, NavLink, Route, Switch } from 'react-router-dom';

import TodoFeature from './features/Todo/index'
import AlbumFeature from './features/Album/index';

function App() {


  return (
    <div className="App">



      <p><NavLink to="/todos" activeClassName="active-link">TODOS</NavLink></p>
      <p><NavLink to="/albums" activeClassName="active-link">ALBUMS</NavLink></p>

      <Switch>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
      </Switch>

    </div>
  );
}

export default App;
