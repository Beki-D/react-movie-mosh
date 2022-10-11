import Joi from "joi-browser";
import Form from "./common/form";
import InfoCard from "./infoCard";

class RegisterForm extends Form {
    state = {
        data: { username: '', password: '', name: '' },
        errors: { },
        passwordVisible : false
    };

    schema = {
        username: Joi.string()
            .min(3).max(30)
            .required()
            .email()
            .label("Username"),
        password: Joi.string()
            .min(3).max(30)
            .required()
            .label("Password"),
        name: Joi.string()
            .min(3).max(30)
            .required()
            .label('Name')
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
                    <h1>Register</h1>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput("username", "Username", true)}
                        <div className="mb-3">
                            {this.renderInput("password", "Password")}
                        </div>
                        {this.renderInput("name", "Name", true)}
                        {this.renderButton("Register")}
                    </form>
                </div>
                <InfoCard />
            </div>
        );
    }
}
 
export default RegisterForm;