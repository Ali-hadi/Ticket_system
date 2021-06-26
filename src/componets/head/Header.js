import React from "react";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import '../head/header.css';
import logo from '../../images/logo.svg';
const Header = () => {
    return (
        <header>
            <Router>
            <div className="container-fluid">
                <div className="logo">
                    <h1><Link to="/whofor"><img src={logo} alt="logo here"/></Link></h1>
                </div>
                <div className="right_side">
                    <ul>
                        <li><Link to="">FAQ</Link></li>
                        <li><Link to="">Gift Card</Link></li>
                    </ul>
                    <Link to="/whofor" className="btn-normal hover_border">Let's go</Link>
                </div>
            </div>
            </Router>
        </header>
    )
}
export default Header;