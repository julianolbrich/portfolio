import React from 'react';
import './Home.css';

import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiRails } from "react-icons/si";

// import Accordion from '../components/Accordion';
import Card from '../components/Card';


const Home = () => {
    return (
        <div className="Home">
            <h1> JULIAN OLBRICH </h1>
            <h2>Ex-Head of Sales with a <a href="https://www.maastrichtuniversity.nl/education/master/master-international-business-track-strategy-and-innovation/why-this-programme" target="_blank" rel="noreferrer"> M.Sc. International Business</a> & 
                5 years of startup experience in different 
                roles, teams and business models.
            </h2>
            <br /><br />
            <div className="Home-smileys">
                <div className="Home-smiley-icon"> 👨‍🎓 </div>
                <div className="Home-smiley-icon"> 👨‍💻 </div>
                <div className="Home-smiley-icon"> 👨‍💼 </div>
                <div className="Home-smiley-icon"> &#x1F9B8; </div>
            </div>
            <h4> Since 2020 I evolved into becoming a <span className="fullstack"> <em>Full-Stack </em> Software Developer </span> with 
                <em> <span className="rails">Ruby on Rails</span>, <span className="javascript">JavaScript</span> </em> & <em> <span className="react">React.js</span> </em> 
            </h4>
            <div className="Home-stack">
                <div className="Home-stack-icon rails-icon"> <SiRails /> </div>
                <div className="Home-stack-icon node-icon"> <FaNode /> </div>
                <div className="Home-stack-icon javascript-icon"> <FaJs /> </div>
                <div className="Home-stack-icon react-icon"> <FaReact /> </div>
            </div>
            

            <br /><br /><br />


            <h2 id="work"> Work </h2><br /><br />
            <Card /><br /><br />


            {/* <h2> CV </h2>
            <br />
            <Accordion />
            <br /><br /><br /><br /><br /> */}

            <br /><br /><br /><br />
            <h2> CONTACT ME </h2>
            <br /><br /><br /><br />

        </div>
    );
};

export default Home;