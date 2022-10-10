const Password = ({ account, handleChange, visibility }) => {
    const type = (visibility) ? "text" : "password";

    return (   
        <input 
            value={account.password}
            onChange={handleChange}
            id="password" name="password"
            type={type}
            className="form-control" required 
        />
    );
}
 
export default Password;