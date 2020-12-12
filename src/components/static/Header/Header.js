import React from 'react'
import './Header.css'

export default function Header(props) {
    return (
        <div className="aml-header">
            <div id="aml-header-navbar">
                <div id="aml-header-nav">
                    <div id="arrow"/>
                    <span>PORTFOLIO</span>
                </div>
                <div id="aml-header-nav">
                    <div id="arrow"/>
                    <span>INVESTMENT CRITERIA</span>
                </div>
                <div id="aml-header-logo">
                </div>
                <div id="aml-header-nav">
                    <div id="arrow"/>
                    <span>TEAM</span>
                </div>
                <div id="aml-header-nav">
                    <div id="arrow"/>
                    <span>NEWS</span>
                </div>
                <div id="aml-header-nav">
                    <div id="arrow"/>
                    <span>CONTACT</span>
                </div>
            </div>
        </div>
    )
}