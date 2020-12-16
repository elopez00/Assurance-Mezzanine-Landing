import React from 'react'
import logo from '../../../assets/trans-logo.png'
import linkedin from '../../../assets/linked-in.svg'
import './Footer.css'

export default function Footer(props) {
    let year = new Date().getFullYear();

    return (
        <div className="aml-footer">
            <div id="aml-footer-selectionbar">
                <div id="aml-footer-selections">
                    <span>Portfolio</span>
                    <span>Investment Criteria</span>
                    <img src={logo} id="aml-footer-logo" />
                    <span>Team</span>
                    <span>News</span>
                    <span>Contact</span>
                </div>
            </div>
            <div id="aml-footer-more">
                <div>
                    <span style={{display: "block"}}>509 W Colonial Drive #100 Orlando, Florida 32804</span>
                    <span>
                        P: <a>407-801-1436</a> | E: <a>dellis@assurancemezz.com</a> 
                    </span>
                </div>
                <span style={{display: "flex", alignItems: "center"}}>
                    <div id="aml-footer-linkedin">
                        <img src={linkedin} />
                    </div>
                    <a>Login</a>
                </span>
                <p>Copyright © { year } Assurance Mezzanine Fund. All rights reserved.</p>
                
            </div>
        </div>
    )
}