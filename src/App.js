import React                   from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MainForm                from './components/MainForm';
import Home                    from './pages/Home';
import Recipes                 from './pages/Recipes';
import Recipe                  from './pages/Recipe';

const App = () => {
  return (
    <div className="App" style={style}>
      <Link to="/" className="App__title">Mama Mia</Link>
      <Route
        path="*"
        render={props => <MainForm {...props} />}
      />
      <Switch>
        <Route
          exact
          path="/recipes"
          component={Recipes}
        />
        <Route
          path="/recipe"
          component={Recipe}
        />
        <Route
          exact
          path="/"
          component={Home}
        />
      </Switch>
    </div>
  );
};

// Background image
const style = {
  backgroundImage: `url(${require('./assets/img/bg.jpg')})`
};

export default App;
