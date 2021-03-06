import React from 'react';
import './css/Sidebar.css'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import AlbumIcon from '@material-ui/icons/Album';

function Sidebar(props) {

    return (
        <div className="Sidebar">
            <a className="Sidebar-navlink-work"> Work </a>
            <a className="Sidebar-navlink-cv"> CV </a>
            <a className="Sidebar-navlink-contact"> Contact </a>
            {/* <p className="Sidebar-navlink"> CV </p>
            <p className="Sidebar-navlink"> Contact </p> */}
            <a className="Sidebar-icon" href="https://github.com/julianolbrich" target="_blank" rel="noreferrer"> <GitHubIcon htmlColor="black" /> </a>
            <a className="Sidebar-icon" href="https://www.linkedin.com/in/julianolbrich/" target="_blank" rel="noreferrer"> <LinkedInIcon htmlColor="black"  /> </a>
            <a className="Sidebar-icon" href="https://www.instagram.com/thegoodygoody__/" target="_blank" rel="noreferrer"> <InstagramIcon htmlColor="black"  /> </a>
            <a className="Sidebar-icon" href="https://www.thegoodygoody.com/" target="_blank" rel="noreferrer"> <AlbumIcon htmlColor="black"  /> </a>
            <a className="Sidebar-icon lastlink" href="mailto:julianolbrich@gmail.com" target="_blank" rel="noreferrer"> <MailIcon htmlColor="black"  /> </a>
            <div className="Sidebar-line"> </div>
        </div>
    );
}

export default Sidebar;