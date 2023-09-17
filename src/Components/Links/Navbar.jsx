import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    return ( 
        <div>
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
        </div>
     );
}

export default Navbar;