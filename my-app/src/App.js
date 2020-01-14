import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import MainPage from "./components/MainPage";
import Navigation from './components/Navigation/';
import FoodMenu from './components/FoodMenu';
import Stock from "./components/Stock";
import Footer from "./components/Footer";

class App extends Component{
    render(){
        return(
            <Router>
                <div className="App">
                    <Navigation/>
                    <Switch>
                        <Route path='/' exact>
                            <MainPage/>
                        </Route>
                        <Route path='/aboutUs' exact>
                            <MainPage/>
                        </Route>
                        <Route path='/contacts' exact>
                            <MainPage/>
                        </Route>
                        <Route path='/stocks' exact>
                            <Stock/>
                        </Route>
                        <Route path='/food' exact>
                            <FoodMenu/>
                        </Route>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default App;
