import React, { Component } from 'react';
import Input from './common/input';
import InfoCard from './infoCard';

class LoginForm extends Component {
    state = {
        account: { username: '', password: '' },
        errors: { },
        passwordVisible : false
    };
    
    //To create a reference
    // username = React.createRef();
    //Put ref in the element
    // <input ref={this.username}.../>

    validate = () => {
        const errors = {};

        const { account } = this.state;
        if (account.username.trim() === "")
            errors.username = "Username is required";
        if (account.password.trim() === "")
            errors.password = "Password is required";
        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if(errors) return;

        //Call server
        console.log('Submitted successfully');
    ;}

    validateProperty = ({name, value}) => {
        if (name === "username") {
            if (value.trim() === "") return 'Username is required';
        }
        if (name === "password") {
            if (value.trim() === "") return 'password is required';
        }
    }

    handleChange = ({ currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;

        this.setState({account, errors});
    }

    handleClick = () => {
        const currentVisibility = this.state.passwordVisible;
        this.setState({ passwordVisible:  !currentVisibility});
    }

    render() { 
        const { account, passwordVisible, errors } = this.state;

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
                            error={errors.username}
                        />
                        <div className="mb-3">
                            <Input
                                name="password"
                                value={account.password}
                                label="password"
                                onChange={this.handleChange}
                                visibility={passwordVisible}
                                handleClick={this.handleClick}
                                error={errors.password}
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