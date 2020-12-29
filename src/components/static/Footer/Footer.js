import React, { useState } from 'react'
import logo from '../../../assets/trans-logo.png'
import linkedin from '../../../assets/linked-in.svg'
import { Link } from 'react-router-dom'
import './Footer.css'

import Menu from '../Menu'

export default function Footer(props) {
    const [showView, toggleView] = useState(false);
    let year = new Date().getFullYear();

    return (
        <div className="aml-footer">
            <Menu showView={showView} toggleView={() => toggleView(false)}/>
            <div id="aml-footer-selectionbar">
                <i className="material-icons" id="aml-hamburger" onClick={() => {
                    toggleView(true);
                    document.body.style.overflow = "none";
                }}>menu</i>
                <div id="aml-footer-selections">
                    <span onClick={() => window.scrollTo(0,0)}>
                        <Link to="/portfolio#aml-banner-screen" style={{ textDecoration: "none", color: "inherit"}}>
                            Portfolio
                        </Link>
                    </span>
                    <span onClick={() => window.scrollTo(0,0)}>
                        <Link to="/investment-criteria#aml-banner-screen" style={{ textDecoration: "none", color: "inherit"}}>
                            Investment Criteria
                        </Link>
                    </span>
                    <Link to="/" style={{ textDecoration: "none"}}>
                        <img id="aml-footer-logo" src={logo} height="75"/>
                    </Link>
                    <span onClick={() => window.scrollTo(0,0)}>
                        <Link to="/team#aml-banner-screen" style={{ textDecoration: "none", color: "inherit"}}>
                            Team
                        </Link>
                    </span>
                    <span onClick={() => window.scrollTo(0,0)}>
                        <Link to="/news#aml-banner-screen" style={{ textDecoration: "none", color: "inherit"}}>
                            News
                        </Link>
                    </span>
                    <span onClick={() => setTimeout(() => document.getElementById("aml-contact-screen").scrollIntoView({behavior: "smooth"}), 100)}>
                        <Link to="/team#aml-contact-screen" style={{ textDecoration: "none", color: "inherit"}}>
                            Contact
                        </Link>
                    </span>
                </div>
            </div>
            <div id="aml-footer-more">
                <div>
                    <span style={{display: "block"}}>509 W Colonial Drive #100 Orlando, Florida 32804</span>
                    <span>
                        P: <a href="tel:407-801-1436">407-801-1436</a> | E: <a href="mailto:dellis@assurancemezz.com">dellis@assurancemezz.com</a> 
                    </span>
                </div>
                <span style={{display: "flex", alignItems: "center"}}>
                    <div id="aml-footer-linkedin">
                        <a href="https://www.linkedin.com/company/assurance-mezzanine-fund/about/" target="_blank">
                            <img src={linkedin} />
                        </a>
                    </div>
                </span>
                <p>Copyright © { year } Assurance Mezzanine Fund. All rights reserved.</p>
                
            </div>
        </div>
    )
}