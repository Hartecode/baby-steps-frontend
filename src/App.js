import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/landing/landing';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={ LandingPage } />
                </div>
            </Router>
        );
    }
}

export default App;
