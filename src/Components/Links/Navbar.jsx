import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
function Navbar() {
    return ( 
        <header className={classes.header}>
            <div className={classes.logo}>MeetUps</div>
            <ul>
            <li>
                    <Link to='/'>All MeetUps</Link>
                </li>
                <li>
                    <Link to='/new-meetups'>New MeetUps</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favorites</Link>
                </li>
            </ul>
        </header>
     );
}

export default Navbar;