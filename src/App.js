import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

/** Users */
import UserProvider from './components/Users/UserProvider';
import UserProfile from './components/Users/UserProfile';

/** Posts */
import PostsTrending from './components/Posts/PostsTrending';
import PostsAdd from './components/Posts/PostAdd';

/** Connexion */
import Login from './components//Login/Login';

/** Register */
import Register from './components//Register/Register';

class App extends Component {

    UserGreeting() {
        return <div>{localStorage.getItem('email')} {localStorage.getItem('name')} </div>;
    }

    GuestGreeting() {
        return <h1>Please sign up.</h1>;
    }
    
    Greeting() {
        if (localStorage.getItem('email') !== undefined) {
            return this.UserGreeting();
        }
        return this.GuestGreeting();
    }
    
    render() {
        return (
            <Router>
                {this.Greeting()}
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/connexion" />
                    </Route>
                    <Route path="/utilisateur" render={() =>
                        (<UserProvider>
                            <div className="App">
                                <UserProfile />
                            </div>
                        </UserProvider>)
                    } />
                    <Route path="/accueil" render={() =>
                        (<PostsTrending />)
                    } />
                    <Route path="/add/post" render={() =>
                        (<PostsAdd />)
                    } />
                    <Route path="/connexion" render={() =>
                        (<Login />)
                    } />
                    <Route path="/inscription" render={() =>
                        (<Register />)
                    } />
                </Switch>
            </Router>
        );
    }
}

export default App;