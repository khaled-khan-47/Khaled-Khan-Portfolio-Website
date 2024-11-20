import React from 'react'
import styles from './Navbar.module.css'
import { useLocation } from 'react-router-dom'
const Navbar = () => {
    const current = useLocation();

    return (
        <>
            <nav className = {styles.navbar}>
                <div className = {styles.navleft}>
                    <a className = {styles.homebutton} href ="/"><div className = {current.pathname === '/' ? styles.activepage : ''}>Home</div></a>
                    <p className = {styles.divider}> | </p>
                </div>
                <ul className = {styles.menu}>
                    <li className = {styles.menubutton}>
                        <a className = {current.pathname === '/about' ? styles.activepage : ''} href="/about">About</a>
                    </li>
                    <li className = {styles.menubutton}>
                        <a className = {current.pathname === '/projects' ? styles.activepage : ''} href="/projects">Projects</a>
                    </li>
                    <li className = {styles.menubutton}>
                        <a className = {current.pathname === '/connect' ? styles.activepage : ''} href="/connect">Connect</a>
                    </li>
                </ul>
            </nav>
        </>
    );
  }
export default Navbar