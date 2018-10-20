import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { Ranking } from './components/Ranking';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ul>
                    <li><Link to="/all">All categories</Link></li>
                    <li><Link to="/category/2502">Computers and accessaries</Link></li>
                    <li><Link to="/category/10002">Books, magazines and comics</Link></li>
                </ul>
                <Switch>
                    <Route path="/all" component={Ranking}/>
                    <Route path="/category/:id" render={
                        ({ match }) => <Ranking categoryId={match.params.id}/>
                    }/>
                </Switch>
            </div>
        );
    }
}

export default App;
