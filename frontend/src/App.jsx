import React from 'react';
import './styles.css'; // Import the CSS
import Cypherex from './assets/Cypherex.svg';
import ANewWayToSecure from './assets/A-new-way-to-Secure.svg';
import ComingSoon from './assets/Coming-Soon.svg';

function App() {
    return (
        <div className="main">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <div className="main-content">
                        <img src={Cypherex} alt="Cypherex" className="svg-text" />
                    </div>
                    <div className="div-wrapper">
                        <img src={ANewWayToSecure} alt="A New Way to Secure" className="svg-text" />
                    </div>
                    <div className="main-content-2">
                        <img src={ComingSoon} alt="Coming Soon" className="svg-text" />
                    </div>
                    {/* 
                    <div className="options">
                        <div className="contact-us">
                            <div className="text-wrapper-3">Contact Us</div>
                        </div>
                        <div className="github">
                            <div className="text-wrapper-3">Github</div>
                        </div>
                        <div className="about">
                            <div className="text-wrapper-3">About</div>
                        </div>
                    </div>
                    */}
                </div>
            </div>
        </div>
    );
}

export default App;
