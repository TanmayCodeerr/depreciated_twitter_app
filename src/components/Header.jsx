import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './components_2.css'

import {  } from '@fortawesome/free-brands-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return(
        <>
        <header>
            <div className="header-text">
                What's going on?
            </div>
            <div className="header-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
        </header>

        {/* <div className="header">
            <div className="header-text">What's going on?</div>
            <div className="search-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
        </div> */}
        </>
    )
}

export default Header