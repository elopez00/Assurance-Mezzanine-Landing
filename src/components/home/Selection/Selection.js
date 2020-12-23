import React from 'react'
import './Selection.css'
import logo from '../../../assets/trans-logo.png'

export default function Selection(props) {
    return (
        <div className="aml-selection">
            <span>
                <div id="aml-selection-images">
                    <div id="aml-selection-circles">
                    <div className="aml-selection-team" id="aml-selection-image"/>
                    <div className="aml-selection-reqs" id="aml-selection-image"/>
                    <div className="aml-selection-port" id="aml-selection-image"/>
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
                    <div className="aml-selection-team" id="aml-selection-image"/>
                    <h3>Team</h3>
                    <p>The Assurance Mezzanine team is composed
                        of our best and brightest to assure
                        the success of any venture
                    </p>
                </span>
                <span>
                    <div className="aml-selection-reqs" id="aml-selection-image"/>
                    <h3>Investment Criteria</h3>
                    <p>Assurance Mezzanine provides customized
                        growth solutions to profitable lower-middle-
                        market
                    </p>
                </span>
                <span> 
                    <div className="aml-selection-port" id="aml-selection-image"/>
                    <h3>Portfolio</h3>
                    <p>View our diversified portfolio composed
                        of our current ventures
                    </p>
                </span>
            </div>
            <div id="aml-selection-map">
                <div id="aml-selection-emblem">
                    <img src={logo} />
                </div>
            </div>
        </div>
    )
}