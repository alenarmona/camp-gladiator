import React from 'react';
import logo from '../Assets/Images/cg_logomark.png';
import logoFooter from '../Assets/Images/logo-white.png';
import {
    Link,
    Outlet
  } from 'react-router-dom';

const Layout = () => (
    <div>
        <header>
        <Link to="/">
            <img src={logo} alt="Logo" />
        </Link>
        <nav>
            <ul>
                <li>
                    <Link to="/">Workouts</Link>
                </li>
                <li>
                    <Link to="/about-me">About me</Link>
                </li>
            </ul>
        </nav>
        </header>
        <Outlet />
        <footer>
            <img src={logoFooter} alt="Logo" />
        </footer>
    </div>
);

export default Layout;