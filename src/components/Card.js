import React from 'react';
import './Card.css'
import thegoodygoody from './thegoodygoody.png';
import whatsapp from './whatsapp.png';
import merncart from './merncart.png';

function Card(props) {
    return (
        <>
            <div className="Card">
                <div className="Card-image">
                    <img src={thegoodygoody} alt="The Goody Goody" />
                </div>
                <div className="Card-info">
                    <h4>The Goody Goody</h4>
                </div>
            </div>
            <br/><br/><br/>
            <div className="Card">
                <div className="Card-image">
                    <img src={whatsapp} alt="The Goody Goody" />
                </div>
                <div className="Card-info">
                    <h4>Whatsapp</h4>
                </div>
            </div>
            <br/><br/><br/>
            <div className="Card">
                <div className="Card-image">
                    <img src={merncart} alt="The Goody Goody" />
                </div>
                <div className="Card-info">
                    <h4>MERN Cart</h4>
                </div>
            </div>
        </>
    );
}

export default Card;
