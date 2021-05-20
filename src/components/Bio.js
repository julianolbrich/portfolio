import React from 'react';
import './css/Bio.css'

import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiRails } from "react-icons/si";

function Bio() {

    const url_maastricht = "https://www.maastrichtuniversity.nl/education/master/master-international-business-track-strategy-and-innovation/why-this-programme"
    const url_lewagon = "https://www.lewagon.com/"

    return (
        <div className="Bio">
            <div className="Bio-business">
                {/* <h1>JULIAN OLBRICH</h1> */}
                <h2>Ex-Head of Sales with a <a href={url_maastricht} target="_blank" rel="noreferrer"> M.Sc. International Business</a> & 
                    5 years experience in different companies, roles and teams.
                </h2>
                <div className="Bio-smileys">
                    <div className="Bio-smiley-icon"> 👨‍🎓 </div>
                    <div className="Bio-smiley-icon"> 👨‍💻 </div>
                    <div className="Bio-smiley-icon"> 👨‍💼 </div>
                    <div className="Bio-smiley-icon"> &#x1F9B8; </div>
                </div>
            </div>
            <div className="Bio-tech"> 
                <h4> In 2020 I evolved into becoming a <span className="fullstack">  <a href={url_lewagon} target="_blank" rel="noreferrer"> <em>Full-Stack Software Developer </em></a> </span>  with 
                    <span className="rails"> Ruby on Rails</span>, <span className="javascript">JavaScript</span> & <span className="react">React.</span> 
                </h4>
                <div className="Bio-stack">
                    <div className="Bio-stack-icon rails-icon"> <SiRails /> </div>
                    <div className="Bio-stack-icon node-icon"> <FaNode /> </div>
                    <div className="Bio-stack-icon javascript-icon"> <FaJs /> </div>
                    <div className="Bio-stack-icon react-icon"> <FaReact /> </div>
                </div>
            </div>
        </div>
    );
}

export default Bio;