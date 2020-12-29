import React, { useState } from 'react'
import './Header.css'
import logo from '../../../assets/trans-logo.png'
import Button from '../../layout/Button'
import { Link } from 'react-router-dom'
import Menu from '../Menu'

export default function Header(props) {
    const [showView, toggleView] = useState(false);

    return (
        <div className="aml-header">
            <Menu showView={showView} toggleView={() => toggleView(false)}/>
            <div id="aml-header-navbar">
                <i className="material-icons" id="aml-hamburger" onClick={() => {
                    toggleView(true);
                    document.body.style.overflow = "hidden";
                }}>menu</i>
                <div id="aml-header-navs">
                    <Link to="/" style={{ textDecoration: "none"}}>
                        <img src={logo} height="75"/>
                    </Link>
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
                    <span onClick={() => setTimeout(() => document.getElementById("aml-contact-screen").scrollIntoView(), 100)}>
                        <Link to="/team#aml-contact-screen" style={{ textDecoration: "none", color: "inherit"}}>
                            Contact
                        </Link>
                    </span> 
                </div>
                <Button onClick={() => window.location.href = "https://viewmyportal.investorflow.com/"} variant="trans-white">Login</Button>
            </div>
        </div>
    )
}