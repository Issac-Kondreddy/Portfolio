import React, { useState } from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faToolbox, faProjectDiagram, faNewspaper, faImage } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const toggleMenu = () => setIsActive(!isActive);

    return (
        <nav className={"navbar" + (isActive ? " active" : "")}>
            <div className="menu-toggle" onClick={toggleMenu}>
                <i className="fas fa-bars"></i>
            </div>
            <ul className="nav-list">
                <li><a href="#about-me" onClick={toggleMenu}><FontAwesomeIcon icon={faUser} /> About</a></li>
                <li><a href="#education" onClick={toggleMenu}><FontAwesomeIcon icon={faGraduationCap} /> Education</a></li>
                <li><a href="#skills" onClick={toggleMenu}><FontAwesomeIcon icon={faToolbox} /> Skills</a></li>
                <li><a href="#projects" onClick={toggleMenu}><FontAwesomeIcon icon={faProjectDiagram} /> Projects</a></li>
                <li><a href="#publications" onClick={toggleMenu}><FontAwesomeIcon icon={faNewspaper} /> Publications</a></li>
                <li><a href="#travel-photos" onClick={toggleMenu}><FontAwesomeIcon icon={faImage} /> Travel Photos</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
