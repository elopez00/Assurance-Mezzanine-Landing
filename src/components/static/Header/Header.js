import React from 'react'
import './Header.css'
import logo from '../../../assets/trans-logo.png'
import Button from '../../layout/Button'
import { Link } from 'react-router-dom'

export default function Header(props) {
    return (
        <div className="aml-header">
            <div id="aml-header-navbar">
                <div id="aml-header-navs">
                    <Link to="/" style={{ textDecoration: "none"}}>
                        <img src={logo} height="75"/>
                    </Link>
                    <span>
                        <Link to="/portfolio" style={{ textDecoration: "none", color: "inherit"}}>
                            Portfolio
                        </Link>
                    </span>
                    <span>
                        <Link to="/investment-criteria" style={{ textDecoration: "none", color: "inherit"}}>
                            Investment Criteria
                        </Link>
                    </span>
                    <span>
                        <Link to="/team" style={{ textDecoration: "none", color: "inherit"}}>
                            Team
                        </Link>
                    </span>
                    <span>News</span>
                    <span>Contact</span>
                </div>
                <Button variant="trans-white">Login</Button>
            </div>
        </div>
    )
}