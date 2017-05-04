import React from 'react';
import './App.css';
import {HashRouter, Route, Link, Redirect} from 'react-router-dom'
import injectTapEventPlugin from "react-tap-event-plugin"
import AboutPage from './AboutPage'
import MapPage from './MapPage'
import LandingPage from './LandingPage'
import ShowCompanies from './ShowCompanies'
import FormPage from './FormPage'


class App extends React.Component {
    render() {
        return (
          <HashRouter>
            <div>
              <Route exact path="/" component={LandingPage}/>
              <Route path="/AboutPage" component={AboutPage}/>
                <Route path="/DatabasePage" component={Data}/>
              <Route path="/MapPage" component={MapPage}/>
              <Route path="/ShowCompanies" component={ShowCompanies}/>
              <Route path="/FormPage" component={FormPage}/>
            </div>
          </HashRouter>
        )
    }
}

export default App
