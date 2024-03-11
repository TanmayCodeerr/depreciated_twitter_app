import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './components_3.css'

import {  } from '@fortawesome/free-brands-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
import { faCircle, faMessage,faArrowsRotate, faHeart, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'

import dribbble from '../assets/dribbble.png'

function Content() {
    return (
        <>
            <div className="main-content-div">
                <div className="content-div">
                    <div className="content-header">
                        <div className="the-svg">
                            <FontAwesomeIcon icon={faCircle} className="icon"/>
                        </div>
                        <div className="content-text">
                            <span>Dribbble</span>
                            <span> 19 Aug</span>
                            <br />
                            <span>@dribbble</span>
                        </div>
                    </div>
                    <div className="content-footer">
                        <div className="details">
                            Suitcase handling by 
                            <span>@baspixels</span>
                            <span>#dribbble</span>
                            <span>#dribbblers</span>
                            <span>#design</span>
                        </div>
                        <div className="details-2">
                            <div>
                                <ul className="detail-metrics">
                                    <li>
                                        <FontAwesomeIcon icon={faMessage} />
                                        <span>122</span>    
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faArrowsRotate} />
                                        <span>1.8k</span>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faHeart} />
                                        <span>4.3k</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="share-btn">
                                <FontAwesomeIcon icon={faArrowUpFromBracket} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-div">
                    <h1>dfgdrg</h1>
                </div>
            </div>
        </>
    )
}

export default Content