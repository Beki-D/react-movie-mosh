// import React, { Component } from 'react'

//stateless functional component
const NavBar = ({totalCounters}) => {
    console.log("Navbar - Rendered");

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand col-1" href="#navbar-brand">
                    Navbar <span className="badge badge-pill bg-secondary">{totalCounters}</span>
                </a>
            </div>
        </nav>
    );
};

//class component
// class NavBar extends Component {
//     render() { 
//         return (
//             <nav className="navbar navbar-light bg-light">
//                 <a className="navbar-brand" href="#navbar-brand">
//                     Navbar <span className="badge badge-pill bg-secondary">{this.props.totalCounters}</span>
//                 </a>
//             </nav>
//         );
//     }
// }

export default NavBar;