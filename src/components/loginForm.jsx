import Joi from 'joi-browser';
import InfoCard from './infoCard';
import Form from './common/form'

class LoginForm extends Form {
    state = {
        data: { username: '', password: '' },
        errors: { },
        passwordVisible : false
    };

    schema = {
        username: Joi.string()
            .min(3).max(10)
            .required()
            .label("Username"),

        password: Joi.string()
            .min(3).max(10)
            .required()
            .label("Password")
    }
   
    doSubmit = () => {
        //Call server
        console.log('Submitted successfully');
    }

    handleClick = () => {
        const currentVisibility = this.state.passwordVisible;
        this.setState({ passwordVisible:  !currentVisibility});
    }

    render() { 
        return (
            <div className="row">
                <div className="col-sm-5 col-md-6 mt-5">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput("username", "Username", true)}
                        <div className="mb-3">
                            {this.renderInput("password", "Password")}
                        </div>
                        {this.renderButton("Login")}
                    </form>
                </div>
                <InfoCard />
            </div>
        );
    }
}
 
export default LoginForm;