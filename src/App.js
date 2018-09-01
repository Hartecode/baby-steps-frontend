import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/landing/landing';
import DashBoard from './components/dashboard/dashboard';
import 'purecss/build/pure.css';
import 'purecss/build/grids-responsive-min.css';
import 'purecss/build/grids-responsive-old-ie-min.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={ LandingPage } />
                    <Route exact path="/dashboard" component={ DashBoard } />
                </div>
            </Router>
        );
    }
}

export default App;
