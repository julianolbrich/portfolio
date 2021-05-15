import React from 'react';
import './Sidebar.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import AlbumIcon from '@material-ui/icons/Album';

function Sidebar(props) {
    return (
        <div className="Sidebar">
            <a className="Sidebar-links" href="https://github.com/julianolbrich" target="_blank" rel="noreferrer"> <GitHubIcon color="primary" /> </a>
            <a className="Sidebar-links" href="https://www.linkedin.com/in/julianolbrich/" target="_blank" rel="noreferrer"> <LinkedInIcon color="primary" /> </a>
            <a className="Sidebar-links" href="https://www.instagram.com/thegoodygoody__/" target="_blank" rel="noreferrer"> <InstagramIcon color="primary" /> </a>
            <a className="Sidebar-links" href="https://www.thegoodygoody.com/" target="_blank" rel="noreferrer"> <AlbumIcon color="primary" /> </a>
            <a className="Sidebar-links lastlink" href="mailto:name@bla.de" target="_blank" rel="noreferrer"> <MailIcon color="primary" /> </a>
            <div className="Sidebar-line"> </div>
        </div>
    );
}

export default Sidebar;