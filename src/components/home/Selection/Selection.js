import React from 'react'
import './Selection.css'
import { Link } from 'react-router-dom'
import logo from '../../../assets/trans-logo.png'

export default function Selection(props) {
    

    return (
        <div className="aml-selection">
            <span>
                <div id="aml-selection-images">
                    <div id="aml-selection-circles">
                        <div className="aml-selection-team" id="aml-selection-image" onClick={() => window.location.href = "/team#aml-banner-screen"}/>
                        <div className="aml-selection-reqs" id="aml-selection-image" onClick={() => window.location.href = "/investment-criteria#aml-banner-screen"}/>
                        <div className="aml-selection-port" id="aml-selection-image" onClick={() => window.location.href = "/portfolio#aml-banner-screen"}/>
                    </div>
                </div>
                <div id="aml-selection-text">
                    <span>
                        <h3>Team</h3>
                        <p>The Assurance Mezzanine team is composed
                            of our best and brightest to assure
                            the success of any venture
                        </p>
                    </span>
                    <span>
                        <h3>Investment Criteria</h3>
                        <p>Assurance Mezzanine provides customized
                            growth solutions to profitable lower-middle-
                            market
                        </p>
                    </span>
                    <span>
                        <h3>Portfolio</h3>
                        <p>View our diversified portfolio composed
                            of our current ventures
                        </p>
                    </span>
                </div>
            </span>
            <div id="aml-selection-mobile">
                <span>
                    <div className="aml-selection-team" id="aml-selection-image" onClick={() => window.location.href = "/team"}/>
                    <h3>Team</h3>
                    <p>The Assurance Mezzanine team is composed
                        of our best and brightest to assure
                        the success of any venture
                    </p>
                </span>
                <span>
                    <div className="aml-selection-reqs" id="aml-selection-image" onClick={() => window.location.href = "/investment-criteria"}/>
                    <h3>Investment Criteria</h3>
                    <p>Assurance Mezzanine provides customized
                        growth solutions to profitable lower-middle-
                        market
                    </p>
                </span>
                <span> 
                    <div className="aml-selection-port" id="aml-selection-image" onClick={() => window.location.href = "/portfolio"}/>
                    <h3>Portfolio</h3>
                    <p>View our diversified portfolio composed
                        of our current ventures
                    </p>
                </span>
            </div>
            <div id="aml-selection-map" onClick={() => window.open("https://www.google.com/maps/place/509+W+Colonial+Dr+%23100,+Orlando,+FL+32804/@28.5531979,-81.3888055,17z/data=!3m1!4b1!4m5!3m4!1s0x88e77a584d5e24fb:0xd3e8c3ca4f74c8a!8m2!3d28.5531979!4d-81.3866168")} style={{cursor: "pointer"}}>
                <div id="aml-selection-emblem">
                    <img src={logo} />
                </div>
            </div>
        </div>
    )
}