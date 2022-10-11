import PasswordToggler from "../pwdToggler";

const Input = ({ value, onChange, name, label, visibility, handleClick, error }) => {
    const type = (visibility) ? "text" : "password";
    
    return ( 
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <div className="input-group">
                <input 
                    value={value}
                    onChange={onChange}
                    id={name} name={name}
                    type={type}
                    className="form-control mb-3"
                />
                
                { name==="password" &&
                    <>
                    <PasswordToggler
                        visibility={visibility}
                        onClick={handleClick}
                        />
                    </>        
                }
                { error && 
                    <span className="alert alert-danger">
                        {error}
                    </span>
                }
                { error && name==="password" &&
                    <span id="passwordHelpInline" className="form-text ms-2">
                        Must be 8-20 characters long.
                    </span>
                }
            </div>
        </div>   
    );
}
 
export default Input;