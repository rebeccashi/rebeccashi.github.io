import * as React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

function Navbar() {
    //Make an array for all the sections and save it in a separate file
    return (
            <div>

                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Experience'>Experience</Link></li>
                <li><Link to='/Skills'>Skills</Link></li>
                <li><Link to='/Coursework'>Coursework</Link></li>
                {/* <li><a href="/">HOME</a></li> */}
                {/* <li><a href="/Experience">Experience</a></li>
                <li><a href="/Skills">Skills</a></li>
                <li><a href="/Coursework">Coursework</a></li> */}
            </div>
    );
}

export default Navbar;