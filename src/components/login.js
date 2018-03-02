import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../reducers/user';

class Login extends Component {
    constructor(props) {
        super(...props);

        this.state = {
            email: 'tony@sample.com',
            password: 'qwerty'
        }
    }

    onChange(event) {
        const newState = { ...this.state };
        newState[ event.target.name ] = event.target.value;
        this.setState(newState);
    }

    onLoginSubmit(event) {
        event.preventDefault();
        this.props.startLogin(this.state.email, this.state.password);
    }

    render() {
        return (
            <section className="login">
                <form onSubmit={ this.onLoginSubmit.bind(this) }>
                    <label>
                        email
                        <input type="text" name='email' value={ this.state.email }
                               onChange={ this.onChange.bind(this) }/>
                    </label>
                    <label>
                        password
                        <input type="password" name='password' value={ this.state.password }
                               onChange={ this.onChange.bind(this) }/>
                    </label>
                    <button>Login</button>
                </form>
            </section>
        );
    }
}

export default connect(
    () => ({}),
    { startLogin }
)(Login);
