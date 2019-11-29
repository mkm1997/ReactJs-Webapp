import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './screens/home';

export default class App extends React.Component{

  componentWillMount(){
    console.log("component will mount is called");
  }
  componentDidMount(){
    console.log("componenet did mount is called");
  }


    render(){
        return (
            <div className="App">
                {/*<header className="App-header">*/}

                {/*</header>*/}
                <Home/>
            </div>
        );
    }
};

{/*<img src={logo} className="App-logo" alt="logo" />*/}
