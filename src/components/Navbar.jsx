// import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import './components.css'

// import { faTwitter } from '@fortawesome/free-brands-svg-icons'
// import {} from '@fortawesome/free-regular-svg-icons'
// import { faHouse, faHashtag, faBell, faEnvelope, faTag } from '@fortawesome/free-solid-svg-icons'


// function Navbar() {
//     return (
//         <>
//         <nav className="nav">
//             <div className="main-nav-div">
//                 <div className="sub-nav-div-1">
//                     <FontAwesomeIcon icon={faTwitter} />
//                 </div>
//                 <div className="sub-nav-div-2">
//                     <ul>
//                         <li>
//                             <a href="#">
//                                 <FontAwesomeIcon icon={faHouse} />
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <FontAwesomeIcon icon={faHashtag} />
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <FontAwesomeIcon icon={faBell} />
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <FontAwesomeIcon icon={faEnvelope} />
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#">
//                                 <FontAwesomeIcon icon={faTag} />
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
        
//         </>
//     )
// }

// export default Navbar



import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'

import { faTwitter } from '@fortawesome/free-brands-svg-icons'
// import {} from '@fortawesome/free-regular-svg-icons'     still important when needed
import { faHouse, faHashtag, faBell, faEnvelope, faTag, 
        faFeatherPointed, faCircle } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
    return (
        <>
        <nav className="nav">
            <div className="main-nav-div">
                <div className="sub-nav-div-1">
                    <a href="#home">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
                <div className="sub-nav-div-2">
                    <ul className="nav-ul">
                        <li>
                            <a href="#home">
                                <FontAwesomeIcon icon={faHouse} />
                            </a>
                        </li>
                        <li>
                            <a href="#explore">
                                <FontAwesomeIcon icon={faHashtag} />
                            </a>
                        </li>
                        <li>
                            <a href="#notifications">
                                <FontAwesomeIcon icon={faBell} />
                            </a>
                        </li>
                        <li>
                            <a href="#messages">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </li>
                        <li>
                            <a href="#bookmarks">
                                <FontAwesomeIcon icon={faTag} />
                            </a>
                        </li>
                        {/* <li>
                            <a href="#post">
                                <div className="post-div">
                                    <FontAwesomeIcon icon={faFeatherPointed} className="post-icon"/>
                                </div>
                            </a>
                        </li> */}
                    </ul>
                </div>
                <a href="#post">     
                    <div className="post-div">
                            <FontAwesomeIcon icon={faFeatherPointed} className="post-icon"/>
                    </div>
                </a>
                <div className="sub-nav-div-3">
                    <a href="#profile">
                        <FontAwesomeIcon icon={faCircle} />
                    </a>
                </div>
            </div>
        </nav>
        
        </>
    )
}

export default Navbar
