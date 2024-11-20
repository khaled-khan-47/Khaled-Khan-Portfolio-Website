import React from 'react'
import styles from './Navbar.module.css'
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
    const current = useLocation();

    return (
        <>
            <nav className = {styles.navbar}>
                <ul className = {styles.menu}>
                    <li className = {styles.menubutton}>
                        <Link to ="/" className = {current.pathname === '/' ? styles.activepage : ''}>Home</Link>
                    </li>
                    <li className = {styles.menubutton}>
                        <p> | </p>    
                    </li>
                    <li className = {styles.menubutton}>
                        <Link className = {current.pathname === '/about' ? styles.activepage : ''} to="/about">About</Link>
                    </li>
                    <li className = {styles.menubutton}>
                        <Link className = {current.pathname === '/projects' ? styles.activepage : ''} to="/projects">Projects</Link>
                    </li>
                    <li className = {styles.menubutton}>
                        <Link className = {current.pathname === '/connect' ? styles.activepage : ''} to="/connect">Connect</Link>
                    </li>
                    
                </ul>
            </nav>
        </>
    );
  }
export default Navbar