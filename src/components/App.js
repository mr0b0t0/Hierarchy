import React from 'react';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// ui
import Header from './ui/Header'

// routes
import Home from './routes/Home'
import Hierarchy from './routes/Hierarchy'


// redux
import {Provider} from 'react-redux'
import store from '../redux/store'

const App = () => {
  return (
    <div className="App">
        <Provider store={store}>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/hierarchy' component={Hierarchy}/>
                </Switch>
            </Router>
        </Provider>
    </div>
  );
}

export default App;
