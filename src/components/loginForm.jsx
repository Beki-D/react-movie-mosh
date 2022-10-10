import React, { Component } from 'react';
import Input from './common/input';
import InfoCard from './infoCard';

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
                <div className="col-sm-5 col-md-6 mt-5">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <Input 
                            name="username" 
                            value={account.username}
                            label="Username"
                            onChange={this.handleChange}
                            visibility={true} 
                        />
                        <div className="mb-3">
                            <Input
                                name="password"
                                value={account.password}
                                label="password"
                                onChange={this.handleChange}
                                visibility={passwordVisible}
                                handleClick={this.handleClick}
                            />
                        </div>
                        <button className="btn btn-info mb-3">
                            Login
                        </button>
                    </form>
                </div>
                {/* Needs To be extracted */}
                <InfoCard />
            </div>
        );
    }
}
 
export default LoginForm;