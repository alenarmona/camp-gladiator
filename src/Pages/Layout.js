import React from 'react';
import logo from '../Assets/Images/cg_logomark.png';
import logoFooter from '../Assets/Images/logo-white.png';
import {
    Link,
    Outlet,
    NavLink
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
                    <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/">Workouts</NavLink>
                </li>
                <li>
                    <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/about-me">About me</NavLink>
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