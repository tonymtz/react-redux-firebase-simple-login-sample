import React, { Component } from 'react';
import { connect } from 'react-redux';
// import logo from './logo.svg';
import './App.css';
import Login from './components/login';

class App extends Component {
    render() {
        return this.props.user.email ?
            <div>Holi { this.props.user.displayName || this.props.user.email }</div> :
            <Login/>;
        // return (
        //     <div className="App">
        //         <header className="App-header">
        //             <img src={ logo } className="App-logo" alt="logo"/>
        //             <h1 className="App-title">Welcome to React</h1>
        //         </header>
        //         <p className="App-intro">
        //             To get started, edit <code>src/App.js</code> and save to reload.
        //         </p>
        //         <a href="">Login</a>
        //     </div>
        // );
    }
}

export default connect(
    (state) => ({ user: state.user.user }),
    {}
)(App);
