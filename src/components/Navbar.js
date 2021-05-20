import React from 'react';
import './css/Navbar.css';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';


function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function HideAppBar(props) {

  // function scrollToId(e) {
  //   e.preventDefault();
  //   document.getElementById('work').scrollIntoView({ behavior: 'smooth' })
  // }
  
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar style={{ background: 'transparent', boxShadow: 'none'}} elevation={1}>
            <div className="Navbar">
                <h1 className="Navbar-logo">
                  Julian Olbrich
                </h1>
                
                <div className="Navbar-links">
                    <a href="/work">Work</a>
                    {/* <a onClick={scrollToId} href="/work">Work</a> */}
                    <a href="/cv">CV</a>
                    <a href="/contact">Contact</a>
                </div> 
            </div>
        </AppBar>
      </HideOnScroll>
      <Toolbar />

    </>
  );
}
