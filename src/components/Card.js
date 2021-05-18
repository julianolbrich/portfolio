import React from 'react';
import './css/Card.css'

import thegoodygoody from '../assets/images/thegoodygoody.png';
import whatsapp from '../assets/images/whatsapp.png';
import merncart from '../assets/images/merncart.png';

function Card(props) {
    return (
        <>
            <div className="Card-alt" style={{background: `url(${thegoodygoody})`, backgroundPosition: 'center', backgroundSize: 'contain'  , backgroundRepeat: 'no-repeat' }}></div> 
            <div className="Card-alt" style={{background: `url(${whatsapp})`, backgroundPosition: 'center', backgroundSize: 'contain'  , backgroundRepeat: 'no-repeat' }}></div> 
            <div className="Card-alt" style={{background: `url(${merncart})`, backgroundPosition: 'center', backgroundSize: 'contain'  , backgroundRepeat: 'no-repeat' }}></div> 

            <div className="Card">
                <div className="Card-text">
                    <div>
                        <div className="Card-title">The Goody Goody</div>
                        <div className="Card-shorttext">By integrating the searches of Europes largest online record stores, we currently host over 150000 Vinyls.</div>
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
            </div>

            <div className="Card">
                <div className="Card-text">
                    <div>
                        <div className="Card-title">WhatsApp Clone</div>
                        <div className="Card-shorttext">A Clone of Whatsapp.</div>
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
                            {/* <div className="Card-stack">Firebase</div> */}
                            {/* <div className="Card-stack">Material UI</div> */}
                        </div>
                    </div>

                </div>
                <div className="Card-image" style={{background: `url(${merncart})`, backgroundSize:"contain", backgroundRepeat: 'no-repeat'}}></div>
            </div>
        </>
    );
}

export default Card;
