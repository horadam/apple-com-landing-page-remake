import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBag, faBars } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons"

const Header = () => {
    return (
        <div className="header">
            <div className = "headerInner">
                <FontAwesomeIcon className="headerIcon" id="menuIcon" icon={faBars} />
                <FontAwesomeIcon className="headerIcon" icon={faApple} id="appleIcon"/>
                <span className="headerText">Mac</span>
                <span className="headerText">iPad</span>
                <span className="headerText">iPhone</span>
                <span className="headerText">Watch</span>
                <span className="headerText">TV</span>
                <span className="headerText">Music</span>
                <span className="headerText">Support</span>
                <FontAwesomeIcon className="headerIcon" id="searchIcon" icon={faSearch} />
                <FontAwesomeIcon className="headerIcon" icon={faShoppingBag} />
            </div>
        </div>
    )
}

export default Header;