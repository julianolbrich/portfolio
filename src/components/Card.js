import React from 'react';
import './css/Card.css'

import thegoodygoody from '../assets/images/thegoodygoody.png';
import whatsapp from '../assets/images/whatsapp.png';
import merncart from '../assets/images/merncart.png';

function Card(props) {
    return (
        <>
            <a className="Card" href="https://www.thegoodygoody.com/" target="_blank" rel="noreferrer">
                <div className="Card-text">
                    <div>
                        <div className="Card-title">The Goody Goody</div>
                        <div className="Card-shorttext">Search Vinyl in Europes largest online Record Stores. Automated Scrapers that host over 150.000 Vinyls</div>
                    </div>
                    <div className="Card-stacks">
                        <p className="Card-techstack">TECH STACK</p>
                        <div className="Card-stacklist">
                            <div className="Card-stack">Ruby on Rails</div>
                            <div className="Card-stack">Bootstrap</div>
                            <div className="Card-stack">JavaScript</div>
                            <div className="Card-stack">Stimulus.js</div>
                            <div className="Card-stack">API</div>
                            <div className="Card-stack">Scraping</div>
                            <div className="Card-stack">PostgreSQL</div>
                            <div className="Card-stack">Heroku</div>
                        </div>
                    </div>
                </div>
                <div className="Card-image" style={{background: `url(${thegoodygoody})`, backgroundPosition: 'center center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
            </a>

            <div className="Card">
                <div className="Card-text">
                    <div>
                        <div className="Card-title">WhatsApp Clone</div>
                        <div className="Card-shorttext">A clone of Whatsapp.</div>
                    </div>
                    <div className="Card-stacks">
                        <p className="Card-techstack">TECH STACK</p>
                        <div className="Card-stacklist">
                            <div className="Card-stack">MongoDB</div>
                            <div className="Card-stack">Express.js</div>
                            <div className="Card-stack">React.js</div>
                            <div className="Card-stack">Node.js</div>
                            <div className="Card-stack">Firebase</div>
                            <div className="Card-stack">Material UI</div>
                        </div>
                    </div>

                </div>
                <div className="Card-image" style={{background: `url(${whatsapp})`, backgroundSize:"contain", backgroundRepeat: 'no-repeat' }}></div>
            </div>

            <div className="Card">
                <div className="Card-text">
                    <div>
                        <div className="Card-title">MERN Cart</div>
                        <div className="Card-shorttext">A simple shopping cart built in the MERN (MongoDB-Express-React-Node) Stack.</div>
                    </div>
                    <div className="Card-stacks">
                        <p className="Card-techstack">TECH STACK</p>
                        <div className="Card-stacklist">
                            <div className="Card-stack">MongoDB</div>
                            <div className="Card-stack">Express.js</div>
                            <div className="Card-stack">React.js</div>
                            <div className="Card-stack">Node.js</div>
                        </div>
                    </div>

                </div>
                <div className="Card-image" style={{background: `url(${merncart})`, backgroundSize:"contain", backgroundRepeat: 'no-repeat'}}></div>
            </div>
        </>
    );
}

export default Card;
