const PasswordToggler = ({ onClick, visibility }) => {
    let classes = "clickable fa fa-eye";
    if (!visibility) classes = "clickable fa fa-eye-slash"

    return (   
    <span className="input-group-text">
        {/* {() => {classes += "-slash"; console.log(classes)} } */}
        <i
            onClick={onClick}
            id="togglePassword" 
            className={classes}> 
        </i>
    </span>
    );
}
 
export default PasswordToggler;