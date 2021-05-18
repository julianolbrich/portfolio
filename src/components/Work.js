import React from 'react';
import './css/Work.css'

import Card from '../components/Card';

function Work(props) {
    return (
        <div className="Work" id="Work">
            <h2> Work </h2>
            <div class="Work-cards">
                <Card />
            </div>
        </div>
    );
}

export default Work;