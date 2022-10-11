import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
    state = {
        data: { username: '', password: '' },
        errors: { },
        passwordVisible : false
    };

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
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
            </div>
        );
    }
}
 
export default RegisterForm;