import React from 'react';
import './Card.css'
import thegoodygoody from './thegoodygoody.png';
import whatsapp from './whatsapp.png';
import merncart from './merncart.png';

function Card(props) {
    return (
        <div className="Work">
            <div className="Card-2">
                <div className="Card-2-text">
                    <div>
                        <div className="Card-2-title">The Goody Goody</div>
                        <div className="Card-2-shorttext">By integrating the searches of Europes largest online record stores, we currently host over 150000 Vinyls.</div>
                    </div>
                    <div className="Card-2-stacks">
                        <p className="Card-2-techstack">TECH STACK</p>
                        <div className="Card-2-stacklist">
                            <div className="Card-2-stack">Ruby on Rails</div>
                            <div className="Card-2-stack">Bootstrap</div>
                            <div className="Card-2-stack">JavaScript</div>
                            <div className="Card-2-stack">Stimulus.js</div>
                            <div className="Card-2-stack">Web-Scraping</div>
                            <div className="Card-2-stack">API</div>
                            <div className="Card-2-stack">PostgreSQL</div>
                            <div className="Card-2-stack">Heroku</div>
                        </div>
                    </div>

                </div>
                <div className="Card-2-image" style={{background: `url(${thegoodygoody})`, backgroundPosition: 'center', backgroundSize: 'gst', backgroundRepeat: 'no-repeat' }} cover></div>
            </div>

            <div className="Card-2">
                <div className="Card-2-text">
                    <div>
                        <div className="Card-2-title">WhatsApp Clone</div>
                        <div className="Card-2-shorttext">A Clone of Whatsapp.</div>
                    </div>
                    <div className="Card-2-stacks">
                        <p className="Card-2-techstack">TECH STACK</p>
                        <div className="Card-2-stacklist">
                            <div className="Card-2-stack">MongoDB</div>
                            <div className="Card-2-stack">Express.js</div>
                            <div className="Card-2-stack">React.js</div>
                            <div className="Card-2-stack">Node.js</div>
                            <div className="Card-2-stack">Firebase</div>
                            <div className="Card-2-stack">Material UI</div>
                        </div>
                    </div>

                </div>
                <div className="Card-2-image" style={{background: `url(${whatsapp})`, backgroundSize:"cover"}} cover></div>
            </div>

            <div className="Card-2">
                <div className="Card-2-text">
                    <div>
                        <div className="Card-2-title">MERN Cart</div>
                        <div className="Card-2-shorttext">A simple shopping cart built in the MERN (MongoDB-Express-React-Node) Stack.</div>
                    </div>
                    <div className="Card-2-stacks">
                        <p className="Card-2-techstack">TECH STACK</p>
                        <div className="Card-2-stacklist">
                            <div className="Card-2-stack">MongoDB</div>
                            <div className="Card-2-stack">Express.js</div>
                            <div className="Card-2-stack">React.js</div>
                            <div className="Card-2-stack">Node.js</div>
                            {/* <div className="Card-2-stack">Firebase</div> */}
                            {/* <div className="Card-2-stack">Material UI</div> */}
                        </div>
                    </div>

                </div>
                <div className="Card-2-image" style={{background: `url(${merncart})`, backgroundSize:"cover"}} cover></div>
            </div>
        </div>
    );
}

export default Card;
