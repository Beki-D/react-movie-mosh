import React, { Component } from 'react';

class LoginForm extends Component {
    state = {
        account: { username: '', password: '' }
    };
    
    //To create a reference
    // username = React.createRef();
    //Put ref in the element
    // <input ref={this.username}.../>

    componentDidMount() {
        //Ditch this, just use autofocus
        // this.username.current.focus();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //Call server
        // const username = this.username.current.value;
        console.log('Submitted successfully');
    ;}

    handleChange = ({ currentTarget: input}) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account});
    }

    render() { 
        const { username, password } = this.state.account;

        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input 
                            value={username} 
                            onChange={this.handleChange}
                            id="username" name='username' 
                            type="text" 
                            className="form-control" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-group">
                            <input 
                                value={password}
                                onChange={this.handleChange}
                                id="password" name="password"
                                type="password"
                                className="form-control" required />
                            <span className="input-group-text">
                                <i 
                                    id="togglePassword" 
                                    className="fa fa-eye clickable"> 
                                </i>
                            </span>
                            <span 
                                id="passwordHelpInline ms-2" 
                                className="form-text"
                            >
                                Must be 8-20 characters long.
                            </span>
                        </div>
                    </div>
                    <button className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        );
    }
}
 
export default LoginForm;