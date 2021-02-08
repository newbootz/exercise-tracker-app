import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-fixed-top" >
                <Link to="/" className="navbar-brand"> ExcerTracker </Link>
                <div className="container collapse navbar-collapse">
                    <ul className="nav navbar-nav mr-auto">
                        <li className="navbar-item" style={{ paddingRight : '10px'}}>
                            <Link to="/" className="navbar-link navbar-text mr-auto ">Exercises</Link>
                        </li>
                        <li className="navbar-item" style={{ paddingRight : '10px'}}>
                            <Link to="/create" className="navbar-link navbar-text mr-auto">Create Exercise Log</Link>
                        </li>
                        <li className="navbar-item" style={{ paddingRight : '10px'}}>
                            <Link to="/user" className="navbar-link navbar-text mr-auto">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}