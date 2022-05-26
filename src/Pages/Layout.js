import React from 'react';
import logo from '../Assets/Images/cg_logomark.png';
import {
    Link,
    Outlet
  } from 'react-router-dom';

const Layout = () => (
    <div>
        <header>
        <img src={logo} alt="Logo" />
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/workouts">Workouts</Link>
                </li>
                <li>
                    <Link to="/about-me">About me</Link>
                </li>
            </ul>
        </nav>
        </header>
        <Outlet />
        <footer>
            <img src={logo} alt="Logo" />
            <div className="footer-nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/workouts">Workouts</Link>
                    </li>
                    <li>
                        <Link to="/about-me">About me</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-social">
                <ul className="social">
				    <li>
                        <a href="https://www.facebook.com/CampGladiator/"  rel="noreferrer">

                        </a>
                    </li>
					<li>
                        <a href="https://twitter.com/campgladiator" target="_blank" rel="noreferrer">
                            </a>
                    </li>
					<li>
                        <a href="https://www.instagram.com/campgladiator/" target="_blank" rel="noreferrer">

                        </a>
                    </li>
					<li>
                        <a href="https://www.youtube.com/user/CampGladiator" target="_blank" rel="noreferrer">

                        </a>
                    </li>
				</ul>
            </div>
        </footer>
    </div>
);

export default Layout;