import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route,Link,BrowserRouter as Router } from 'react-router-dom';
import Home from './screens/home';
import MapRender from './screens/mapfile'
import NotFound from './screens/notfound'

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/app" component={App}/>

            <Route  exact path="/map" component={MapRender}/>
            {/*<Route exact component={NotFound}/>*/}

        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
