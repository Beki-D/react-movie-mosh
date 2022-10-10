import React, { Component } from 'react';
import PasswordToggler from './pwdToggler';
import Password from './password';

class LoginForm extends Component {
    state = {
        account: { username: '', password: '' },
        passwordVisible : false
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

    handleClick = () => {
        const currentVisibility = this.state.passwordVisible;
        this.setState({ passwordVisible:  !currentVisibility});
    }

    render() { 
        const { account, passwordVisible } = this.state;

        return (
            <div className="row">
                <div className="col-sm-5 col-md-6">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                value={account.username}
                                onChange={this.handleChange}
                                id="username" name='username'
                                type="text"
                                className="form-control" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <div className="input-group">
                                <Password
                                    handleChange={this.handleChange}
                                    account={account}
                                    visibility={passwordVisible}
                                />
                                <PasswordToggler
                                    visibility={passwordVisible}
                                    onClick={this.handleClick}
                                />
                                <span
                                    id="passwordHelpInline"
                                    className="form-text ms-2"
                                >
                                    Must be 8-20 characters long.
                                </span>
                            </div>
                        </div>
                        <button className="btn btn-info">
                            Login
                        </button>
                    </form>
                </div>
                <div className="col-sm-5 col-md-6">
                    <div className="card" style={{width: "18rem"}} >
                        <img src="Vidly-logo.png" className="card-img-top p-2 ms-3" alt="..." style={{width: "14rem", height: "14rem"}} />
                        <div className="card-body">
                            <h4 className="card-title">Vidly</h4>
                            <h6 className="card-title">Enjoy exclusive Vidly original movies and TV shows.</h6>
                            <p className="card-text text-muted">Join Vidly now for <del>$4.99</del> <mark>USD 3.99</mark> per month.</p>
                            <a href="/" className="btn btn-info">Sign up!</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default LoginForm;