import React from 'react'
import './Header.css'
import logo from '../../../assets/trans-logo.png'
import Button from '../../layout/Button'

export default function Header(props) {
    return (
        <div className="aml-header">
            <div id="aml-header-navbar">
                <div id="aml-header-navs">
                    <img src={logo} height="75"/>
                    <span>Portfolio</span>
                    <span>Investment Criteria</span>
                    <span>Team</span>
                    <span>News</span>
                    <span>Contact</span>
                </div>
                <Button variant="trans-white">Login</Button>
            </div>
        </div>
    )
}