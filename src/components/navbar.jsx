// import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-dark bg-secondary">
            <div className="container">
                <a className="navbar-brand col-1" href="#navbar-brand">
                    Vidly
                </a>
                <a href="#navbar-brand">
                    Movies
                </a>
                <a href="#navbar-brand">
                    Customers
                </a>
                <a href="#navbar-brand">
                    Rentals
                </a>
            </div>
        </nav>
     );
}
 
export default Navbar;