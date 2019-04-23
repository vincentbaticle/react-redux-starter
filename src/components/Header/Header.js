// IMPORT PACKAGE REFERENCES

import React from 'react';
import { NavLink } from 'react-router-dom';

import mainlogo from '../../images/atelierjs.png';

// COMPONENT

export const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light alert-dark">
        <a className="navbar-brand" href="/">
            <img className="m-3" height="100" src={mainlogo} alt="Main Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/' activeClassName='menu selected' exact={true}>HOME</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/zipcodes' activeClassName='menu selected'>ZIP CODES</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link">
                        <NavLink to='/about' activeClassName='menu selected'>ABOUT</NavLink>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
);