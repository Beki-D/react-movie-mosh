import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img 
                        src="Vidly-logo.png" alt="Vidly logo" 
                        width="30" height="30" 
                        className="d-inline-block align-text-top"/>
                    Vidly
                </Link>
                <button 
                    className="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/movies">
                                Movie
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/customers">
                                Customers
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/rentals">
                                Rentals
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">
                                Register
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;